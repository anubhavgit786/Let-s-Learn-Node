const User = require('../models/user');
const Post = require('../models/posts');
const Comment = require('../models/comments');

module.exports.create = async (req, res)=>
{
    try 
    {
        const post = await Post.findById(req.body.post);
        if(post)
        {
            const comment = await Comment.create({content: req.body.content, post: req.body.post, user: req.user._id});
            await post.comments.push(comment);
            await post.save();
            return res.redirect('back');
        }
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
        const comment = await Comment.findById(req.params.id);
        if(comment.user.toString() === req.user.id)
        {
            let postId = comment.post;
            await Comment.deleteOne({_id: req.params.id});
            await Post.findByIdAndUpdate(postId, { $pull : { comments : req.params.id } });
            return res.redirect('back');
        }    
    } 
    catch (error) 
    {
        console.log(error);
        return res.redirect('back');
    }
}