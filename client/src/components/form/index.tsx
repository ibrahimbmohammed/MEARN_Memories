import React,{useState} from 'react'
import { useForm, SubmitHandler  } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { Dispatch } from "redux"
// @ts-ignore
import FileBase from 'react-file-base64'
import {getPosts} from  '../../redux/actions/posts'

type UserSubmitForm = {
    creator: string;
    title: string;
    description: string;
    tags: string;
    pic: string
  };

const Index:React.FunctionComponent = () => {
  const dispatch: Dispatch<any> = useDispatch()
    const [image, setImage] = useState<string|any>('')
    const { register, handleSubmit } = useForm<UserSubmitForm>();

    
    const onSubmit = (data: UserSubmitForm): void => {
       dispatch(getPosts())
        //console.log(data);
        //console.log(image);
      };
    return (
        <div className="bg-white rounded-md h-2/3 w-96 flex flex-col justify-center items-center px-4 py-0  space-y-3 shadow-md mt-8">
            <div className="">
            <p className="text-xl font-semibold pt-4">Add</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" w-full">
            <label className="text-gray-400"> Creator</label>
            <input {...register("creator")} type="text" aria-label="Creator" className="p-2 border border-gray-500 w-full  rounded-md py-4" />
            </div>
            <div className="w-full">
            <label className="text-gray-400">Title</label>
            <input {...register("title")} type="text" className="p-2 border border-gray-500 w-full rounded-md py-4" />
            </div>
            <div className="w-full">
            <label className="text-gray-400">Description:</label>
            <textarea {...register("description")} className="p-2 border border-gray-500 w-full rounded-md py-4" />
            </div>
            <div className="w-full">
            <label className="text-gray-400">Tags (comma seperated)</label>
            <input {...register("tags")} type="text" className="p-2 border border-gray-500 w-full rounded-md py-4" />
            </div>
            <div className="w-full">
           <FileBase
           type="file"
           multiple={false}
           onDone={({base64}:any)=> setImage(base64)}
           /> 
            </div>
            <div className="w-full">
            <button className="w-full py-3 rounded-md text-white bg-blue-600 " type="submit"> SUBMIT</button>
            </div>
            <div className="w-full pb-2">
            <button className="w-full rounded-md py-2 text-white bg-red-600"> CLEAR</button>
            </div>
            </form>
        </div>
    )
}

export default Index
