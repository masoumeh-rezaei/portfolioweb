import {  useLocation } from "react-router-dom";
import Button from "./Button";

import { useState } from "react";
import ButtonGradient from "../assets/Svg/ButtonGradient";
import { FaFacebookF, FaInstagram,FaLinkedinIn } from "react-icons/fa";

import { HiMiniSquares2X2 } from "react-icons/hi2";
import ResponsiveMenue from "./ResponsiveMenue";
import { IoMdClose } from "react-icons/io";

const Header = () =>{
    const pathname = useLocation();
    const Navigation=[
        {
            id: "0",
            title: "Home",
            url: "#Home",
          },
          {
            id: "1",
            title: "Skills",
            url: "#Skills",
          },
          {
            id: "2",
            title: "Projects",
            url: "#projects",
          },
          {
            id: "3",
            title: "Contact Us",
            url: "#ContactUs",
          },
          {
            id: "4",
            title: "Newsletter",
            url: "#signup",
            onlyMobile: true,
          },
          {
            id: "5",
            title: "Sign in",
            url: "#login",
            onlyMobile: true,
          },
    ]
    const [showMenu, setShowMenu]=useState(false);
    const toggleMenu=()=>{
        setShowMenu(!showMenu)
    }
    return(
        <>
        <div className={`fixed top-0 left-0  w-full z-50  backdrop-blur-sm  text-slate-400  border-b tracking-wide py-4 box-border`}>
            <div className="flex items-center px-5 lg:px-7 xl:px-10  ">
                <a href="#Hero" className="block w-[12rem] xl:mr-8">
                    <div className="flex ole-regular">
                        <p className="text-3xl">MOONEng</p>
                        <small>obzorb</small>
                    </div>
                </a>
                <nav className={` md:flex hidden fixed top-[5rem]   md:static md:mx-auto lg:bg-transparent`}>
                    <div className="relative z-2 flex  items-center m-auto lg:flex-row">
                        {Navigation.map((item)=>(
                            <a href={item.url} key={item.id} 
                            className={`  text-2xl uppercase 
                             hover:text-emerald-100 transition-all duration-200  hover:border-b  py-4   px-5 hover:rounded-lg
                              ${item.onlyMobile ? 'md:hidden': ''} 
                               md:text-xs md:font-semibold 
                              ${item.url === pathname.hash ?
                               'z-2 md:text-emerald-100 border-b border-t  rounded-lg'
                               : 'md:text-slate-400' }
                                md:leading-5 ` }>
                                {item.title}
                            </a>
                        ))}
                        
                        <ButtonGradient/>

                    </div>
                </nav>
                {/*Hamburger menue section*/}
                <div className="md:hidden  absolute right-5 z-50">
                    <button onClick={toggleMenu}>
                        {showMenu ? <IoMdClose className="text-2xl w-10 h-10 p-1 border rounded-full transition-all duration-300"/>
                        : <HiMiniSquares2X2 className="text-2x w-10 h-10 p-2 border rounded-full transition-all duration-300"/>}
                       
                        
                    </button>
                </div>
                <div className="hidden lg:flex space-x-3">
                        <FaInstagram className="p-2 border border-slate-400 h-9 w-9 rounded-full cursor-pointer transition-all duration-300 hover:scale-110 hover:border-white hover:shadow-lg hover:shadow-pink-500/50"/>
                        <FaLinkedinIn className="p-2 border border-slate-400 h-9 w-9 rounded-full cursor-pointer transition-all duration-300 hover:scale-110 hover:border-white hover:shadow-lg hover:shadow-blue-500/50"/>
                        <FaFacebookF className="p-2 border border-slate-400 h-9 w-9 rounded-full cursor-pointer transition-all duration-300 hover:scale-110 hover:border-white hover:shadow-lg hover:shadow-blue-600/50"/>
                    </div>
                <div className="hidden md:flex space-x-2">
                <Button  href={'#login'}>sign in</Button>
                </div>
            </div>
        </div>
        {/*mobile menue section*/}
        <ResponsiveMenue showMenu={showMenu}/>
        </>
    )
}
export default Header;