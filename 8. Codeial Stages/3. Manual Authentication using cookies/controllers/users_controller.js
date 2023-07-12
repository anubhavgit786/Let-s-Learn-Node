const User = require('../models/user');

module.exports.profile = async (req, res)=>
{
    try 
    {
        if(req.cookies.user_id)
        {
            const user = await User.findById(req.cookies.user_id);
            if(user)
            {
                return res.render('user_profile', { user, title: 'User Profile'})
            }
        }
        return res.redirect('/users/sign-in');
        
    } 
    catch (error) 
    {
        console.log(error);
        return res.redirect('back');
    }    
}

module.exports.signIn = (req, res)=>
{
    return res.render('user_sign_in', { title: 'Codeial | Sign In'})
}

module.exports.signUp = (req, res)=>
{
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

module.exports.createSession = async (req, res)=>
{
    try 
    {
        const user = await User.findOne({ email: req.body.email });
        if(user.password !== req.body.password)
        {
            console.log('Password Mismatch');
            return res.redirect('back');
        }

        res.cookie('user_id', user.id);
        return res.redirect('/users/profile/');    
    } 
    catch (error) 
    {
        console.log(error);
        return res.redirect('back');
    }
}