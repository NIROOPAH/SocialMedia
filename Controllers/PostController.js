import PostModel from '../Models/postModel.js'
import mongoose from 'mongoose'


//create a post
export const createPost=async(req,res)=>{
    const newPost=new PostModel(req.body);

    try {
        await newPost.save()
        res.status(200).json("Post Created Succesfully")
    } catch (error) {
        res.status(500).json(error)
    }
}


//getting a post
export const getPost=async(req,res)=>{
    const id=req.params.id
    try {
        const post=await PostModel.findById(id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
}


//update post

export const updatePost=async (req,res)=>{
    const postId=req.params.id;
    const {userId}=req.body;

    try {
        const post=await PostModel.findById(postId)
        if(post.userId===userId)
        {
            await post.updateOne({$set:req.body})
            res.status(200).json("Updated Succesfully");
        }
        else
        {
            res.status(403).json("You Are Not Allowed To Update")
        }
    } catch (error) {
        res.status(200).json(error)
        
    }
}


//delete post
export const deletePost=async(req,res)=>{
    const id=req.params.id
    const {userId}=req.body
    try {
        const post=await PostModel.findById(id)
        if(post.userId===userId)
        {
            await post.deleteOne();
            res.status(200).json("User Deleted SSuccessfully")
        }
        else
        {
            res.status(403).json("You Are Not Allowed To Delete")
        }
    } catch (error) {
        res.status(403).json(error)
    }
}