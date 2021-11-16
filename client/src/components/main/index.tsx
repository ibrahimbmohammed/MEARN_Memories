import {useEffect} from 'react'
import Card from '../card'
import {useSelector} from 'react-redux'
import { RootState } from '../../redux/reducers'


type UserSubmitForm = {
    creator: string;
    title: string;
    description: string;
    tags: string;
    pic: string
  };

function Index():JSX.Element {
    const posts = useSelector((state:RootState)=> state.posts )
    const myposts = posts[0] || [];
    console.log(posts)
    // in the useSelector , a function gives you access to the whole state object, which you can use. the name tally with the one being passed down in the combineReducres  function
    return (
        <div className="w-2/3 h-screen grid grid-cols-3 gap-0  items-center justify-items-center">
            {myposts.map((post:UserSubmitForm, i:any):JSX.Element => (
                <Card key={i} post={post} />    
            ))}
      
        </div>
    )
}

export default Index
