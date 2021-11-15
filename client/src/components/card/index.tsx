import {AiOutlineLike} from 'react-icons/ai'
import {BsTrash} from 'react-icons/bs'
import image1 from '../../assets/img/img2.jpg'

function index():JSX.Element {
    return (
        <div className="h-auto w-88 bg-white flex flex-col rounded-md shadow-md">
        <div className="flex">
            <img src={image1} alt="vacation" className="w-full h-48  bg-cover rounded-t-md"/>

        </div>
        <div className="flex flex-col  px-4 pb-4">
         <span className="flex space-x-2 mt-3">
             <p className="text-xs text-gray-400">#escaperoom </p>
             <p className="text-xs text-gray-400">#escaperoom </p>
             <p className="text-xs text-gray-400">#vacation </p>
         </span>
         <span className="">
             <p className="text-xl mt-4 font-semibold"> Visited the Escape Room</p>
         </span>
         <span className="text-sm text-gray-500 mt-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus veniam inventore corporis amet cum.</span>
         <span className="flex justify-between items-center mt-4 text-blue-600">
         <span className="flex items-center content-between space-x-1 text-sm"><AiOutlineLike/><p>Likes</p><p>9</p></span>
         <span className="flex items-center content-between text-sm space-x-1"><BsTrash/><p>Delete</p></span>
         </span>
        </div>
       
            
        </div>
    )
}

export default index
