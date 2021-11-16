import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import MainComp from "../components/main";
import Form from "../components/form";
import MainWrapper from "../components/main-wrapper"
import bg from '../assets/img/bg.png'
import { useDispatch } from "react-redux";
import { getPosts } from "../redux/actions/posts";


const Layout = () => {
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getPosts())
    }, [dispatch])
    return (
        <div className="flex w-screen h-auto flex-col" style={{backgroundImage: `url(${bg})`, backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover"}} >
            <Navbar/>
           <MainWrapper>
            <MainComp/>
            <Form/>
            </MainWrapper>
           
        </div>
    );
}

export default Layout;





