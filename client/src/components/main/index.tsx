import React from 'react'
import Card from '../card'
import {useSelector} from 'react-redux'
function Index():JSX.Element {
   // const posts = useSelector((state)=>(state.posts ))
    // in the useSelector , a function gives you access to the whole state object, which you can use. the name tally with the one being passed down in the combineReducres  function
    return (
        <div className="w-2/3 h-screen grid grid-cols-3 gap-0  items-center justify-items-center">
        <Card/>    
        <Card/> 
        <Card/> 
        <Card/> 
        <Card/> 
        <Card/> 
        </div>
    )
}

export default Index
