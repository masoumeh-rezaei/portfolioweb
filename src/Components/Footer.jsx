import { useEffect, useState } from "react";
import imgbg from "../assets/color-sharp2.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 300);
    }, []);

    return (
        <div
            className={`py-10 text-white transition-all duration-1000 ease-in-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{
                backgroundImage: `url(${imgbg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
                {/* Logo Section */}
                <div className="text-center lg:text-left mb-6 lg:mb-0">
                <div className="flex ole-regular">
                        <p className="text-3xl">MOONEng</p>
                        <small>obzorb</small>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex flex-col items-center lg:items-end">
                <div className="flex space-x-3 mb-4">
    <div className="group">
        <FaInstagram className="p-2 rounded-full border border-slate-400 h-9 w-9 cursor-pointer 
        transition-transform duration-300 hover:scale-110 hover:rotate-6 hover:border-pink-500 
        group-hover:shadow-lg group-hover:shadow-pink-500/50" />
    </div>
    
    <div className="group">
        <FaLinkedinIn className="p-2 rounded-full border border-slate-400 h-9 w-9 cursor-pointer 
        transition-transform duration-300 hover:scale-110 hover:rotate-6 hover:border-blue-500 
        group-hover:shadow-lg group-hover:shadow-blue-500/50" />
    </div>
    
    <div className="group">
        <FaFacebookF className="p-2 rounded-full border border-slate-400 h-9 w-9 cursor-pointer 
        transition-transform duration-300 hover:scale-110 hover:rotate-6 hover:border-blue-600 
        group-hover:shadow-lg group-hover:shadow-blue-600/50" />
    </div>
</div>

                    <p className="text-slate-400 text-sm text-center lg:text-right">
                        © 2025 All Rights Reserved By Masoumeh
                    </p>
                </div>
            </div>
        </div>
    );
}
