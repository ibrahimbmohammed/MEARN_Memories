import axios from "axios";
//import { getToken } from "../helpers";


const baseURL:string = "http://localhost:8000";


export const fetchPost = () => axios.get(`${baseURL}/posts`)
export const createPost = (newPost:any) => axios.post(`${baseURL}/posts`, newPost)
export const updatePost = (id:string, updatedPost:any) => axios.patch(`${baseURL}/${id}`, updatedPost)