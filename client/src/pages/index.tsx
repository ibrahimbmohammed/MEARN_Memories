import React, { useState } from "react";
import Navbar from "../components/navbar";
import MainComp from "../components/main";
import Form from "../components/form";
import MainWrapper from "../components/main-wrapper"
import bg from '../assets/img/bg.png'


const Layout = () => {
    const [openMenu, setOpenMenu] = useState(false);
     //const dispatch = useDispatch(function)
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





