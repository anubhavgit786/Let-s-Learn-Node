const User = require('../models/user');
const Post = require('../models/posts');
const Comment = require('../models/comments');

module.exports.create = async (req, res)=>
{
    try 
    {
        const post = await Post.create({ content : req.body.content, user: req.user._id });
        return res.redirect('back');
    } 
    catch (error) 
    {
        console.log(error);
        return res.redirect('back');
    }
}

module.exports.destroy = async (req, res)=>
{
    
    try 
    {
        const post = await Post.findById(req.params.id);

        if(post.user.toString() === req.user.id) 
        {
            await Post.deleteOne({_id: req.params.id});
            await Comment.deleteMany({ post : req.params.id});
        }
        return res.redirect('back');
    } 
    catch (error) 
    {
        
        console.log(error);
        return res.redirect('back');       
    }
}