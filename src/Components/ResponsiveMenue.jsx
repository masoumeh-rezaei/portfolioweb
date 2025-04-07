export default function ResponsiveMenue({ showMenu, closeMenu }) {
    return (
        <>
            <div className={`${showMenu ? 'top-0 opacity-100' : 'top-[-100%] opacity-0 z-50'} 
                h-auto w-full bg-white/40 backdrop-blur-md fixed top-16 z-40 transition-all duration-300 ease-in-out`}>
                <nav className="my-1 text-2xl font-semibold text-center">
                    <ul className="space-y-10">
                        <li>
                            <a href="#Home" className=" hover:text-violet-100">Home</a>
                        </li>
                        <li>
                            <a href="#Skills" className=" hover:text-violet-100">Skills</a>
                        </li>
                        <li>
                            <a href="#projects" className=" hover:text-violet-100">Projects</a>
                        </li>
                        <li>
                            <a href="#ContactUs" className=" hover:text-violet-100">ContactUs</a>
                        </li>
                    </ul>
                </nav>
                {/* دکمه بستن منو برای موبایل */}
                <button 
                    onClick={closeMenu}
                    className="absolute top-4 right-4 text-white text-3xl">
                    
                </button>
            </div>
        </>
    );
}
