import * as api from '../../../axios'


type UserSubmitForm = {
  creator: string;
  title: string;
  description: string;
  tags: string;
  pic: string
};


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


export const createPost = (post:UserSubmitForm)=> async (dispatch:any) => {
    try {
        const {data} = await api.createPost(post)
        dispatch({type: 'ADD_POST', payload: data})
    } catch (error:unknown) {
        if (error instanceof Error) {
            return {
              message: `Things exploded (${error.message})`,
            };
          }
    }
}  


export const updatePost = (id:string, post:UserSubmitForm) => async (dispatch:any) => {
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