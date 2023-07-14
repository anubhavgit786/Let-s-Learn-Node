const User = require('../models/user');

const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const verifyCreds = async (email, password, done)=> 
{
    try 
    {
        const user = await User.findOne({ email: email });
        if(!user)
        {
            return done(null, false);
        }

        if (user.password !== password)
        {
            return done(null, false);
        }
        
        return done(null, user);

    } 
    catch (error) 
    {
        console.log(error);
        return done(err);
    }
    
}


const localStrategy = new LocalStrategy({ usernameField: 'email'}, verifyCreds);

passport.use(localStrategy);

passport.serializeUser((user, done)=>
{
    done(null, user.id);
})

passport.deserializeUser(async(id, done)=>
{
    try 
    {
        const user = await User.findById(id);
        return done(null, user);     
    } 
    catch (error) 
    {
        console.log(error);
        return done(err);
    }
})

// check if the user is authenticated
passport.checkAuthentication = (req, res, next)=>
{
    // if the user is signed in, then pass on 
    //the request to the next function(controller's action)
    if (req.isAuthenticated())
    {
        return next();
    }

    // if the user is not signed in
    return res.redirect('/users/sign-in');
}

passport.setAuthenticatedUser = function(req, res, next)
{
    if (req.isAuthenticated())
    {
        // req.user contains the current signed in user from 
        //the session cookie and we are just sending this to the locals for the views
        res.locals.user = req.user;
    }

    next();
}

module.exports = passport;