const User = require('../models/user');
const Post = require('../models/posts');

module.exports.home = async (req, res)=>
{
    try 
    {
        const posts = await Post.find({}).populate('user').populate({ path: 'comments', populate: { path: 'user'}});
        return res.render('home', { title: "Home", posts });    
    } 
    catch (error) 
    {
        console.log(error);
        return res.redirect('back');    
    }
}

// module.exports.actionName = function(req, res){}