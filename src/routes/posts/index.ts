import express from 'express';
import {getAllPosts, addPosts } from '../../controllers/posts'
const routes = express.Router();

routes.get('/', getAllPosts)
routes.post('/', addPosts)


export default routes