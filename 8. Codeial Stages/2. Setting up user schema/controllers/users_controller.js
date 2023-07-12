module.exports.profile = (req, res)=>
{
    return res.render('user_profile', { title: 'User Profile'})
}

module.exports.signIn = (req, res)=>
{
    return res.render('user_sign_in', { title: 'Codeial | Sign In'})
}

module.exports.signUp = (req, res)=>
{
    return res.render('user_sign_up', { title: 'Codeial | Sign Up'})
}