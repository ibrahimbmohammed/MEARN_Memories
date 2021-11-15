import * as api from '../../../axios'

interface PostModel {
    title : string
    imageUri : string
    creator: string
    description: string
    tags: string
}


export const getPosts = () => async (dispatch:any) => {
 

    try {
       const {data} = await api.fetchPost();
       dispatch({type:'FETCH_ALL', payload: data})
    } catch (error:unknown) {
        if (error instanceof Error) {
            return {
              message: `Things exploded (${error.message})`,
            };
          }
    }
}


export const createPost = (post:PostModel)=> async (dispatch:any) => {
    try {
        const {data} = await api.createPost(post)
        dispatch({type: 'CREATE', payload: data})
    } catch (error:unknown) {
        if (error instanceof Error) {
            return {
              message: `Things exploded (${error.message})`,
            };
          }
    }
}  


export const updatePost = (id:string, post:PostModel) => async (dispatch:any) => {
    try {
        const {data} = await api.updatePost(id, post); 
        dispatch({type:'UPDATE', payload: data})
    } catch (error:unknown) {
        if (error instanceof Error) {
            return {
              message: `Things exploded (${error.message})`,
            };
          }
    }
}