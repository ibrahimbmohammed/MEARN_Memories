import express, { Request, Response} from 'express';
import { PostModel } from '../../models/Posts';

export const getAllPosts = async (req:Request, res:Response ):Promise<void> => {
try {
  const posts = await PostModel.find()
   res.status(200).send(posts)
} catch (error) {
    res.send(error)
}

   
}


export const addPosts = async (req:Request, res:Response ):Promise<void> => {
  const post = req.body;
  const newPost = new PostModel(post)
  try {
    await newPost.save()
     res.status(200).send(newPost)
  } catch (error) {
      res.send(error)
  }
  
     
  }