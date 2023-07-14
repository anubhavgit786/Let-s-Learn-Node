const User = require('../models/user');

module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: 'User Profile'
    })
}

module.exports.signIn = (req, res)=>
{
    if(req.isAuthenticated())
    {
        return res.redirect('/users/profile');
    }
    
    return res.render('user_sign_in', { title: 'Codeial | Sign In'})
}

module.exports.signUp = (req, res)=>
{
    if(req.isAuthenticated())
    {
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_up', { title: 'Codeial | Sign Up'})
}

module.exports.create = async (req, res)=>
{
    try 
    {
        if(req.body.password !== req.body.cpassword)
        {
            return res.redirect('back');
        }
        
        const user =  await User.findOne({ email: req.body.email});
        if(user)
        {
            console.log('Email already in use');
            return res.redirect('back');
        }

        await User.create(req.body);
        return res.redirect('/users/sign-in/');
    } 
    catch (error) 
    {
        console.log(error);
        return res.redirect('back');
    }
}

//sign in and create the session for the user
module.exports.createSession = (req, res)=>
{
    //when Passport.js uses the local strategy 
    //to authenticate the user the control comes here
    //session is created in passport.js
    return res.redirect('/');
};

module.exports.destroySession = (req, res, next)=>
{
    req.logout(function(err) {
        if (err) { return next(err); }
        return res.redirect('/');
      });
};