import { useState } from 'react'
import projImg1 from '../assets/project-img1.png'
import projImg2 from '../assets/project-img2.png'
import projImg3 from '../assets/project-img3.png'
export  default function Project(){
  const [show1,setShow1]=useState(true)

  const showHide1 =()=>{
    setShow1(!show1)
    setShow(false)
    setShow2(false)
  }
  const [show,setShow]=useState(0)

  const showHide =()=>{
    setShow(!show)
    setShow1(false)
    setShow2(false)
  }
  const [show2,setShow2]=useState(0)
  const showHide2=()=>{
    setShow2(!show2)
    setShow(false)
    setShow1(false)
  }
  const[active,setActive]=useState(()=>{
    if(setShow === true || setShow1 === true || setShow2 === true){
      setActive(document.className.add('nav-link'))
    }
  })


    const projects=[
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
          },
        ]
    return(
        <>
        <div className=' bg-black relative z-40 py-5 md:py-8'>
            <div className='container m-auto  -mt-10 pt-10'>
                <div className=' flex flex-col justify-center items-center md:my-10 my-5 '>
                    
                    <div className='w-[70%] items-center text-center'>
                    <h1 className='ole-regular text-7xl bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-violet-600 py-5' id='projects'>Projects</h1>
                    <p className='tracking-wide text-slate-400 text-sm'>Lorem ipsum itate icabo quibusdam sed doloribus mollitia saepe recusandae facere modi totam, iure omnis ipsam, alias ipsa, fugit icaecati, provident adipisci atque tempora ipsa optio modi dolorum qui eos ex architecto cupiditate? Incidunt similique voluptate labore accusamus voluptatibus nostrum sed, fugit, fugiat modi odio porro fuga at amet? Mollitia vostrum.

                    </p>
                    </div>
                </div>
                <div className='flex border border-slate-300 rounded-[50px] justify-evenly items-center  my-10 xl:w-[60%]  m-auto w-[80%] md:w-[70%] text-center '>
                    <p className={`lg:px-20 px-5 py-2 border-r  relative w-full rounded-l-[50px] first ${show1 && 'nav-link'}`} onClick={showHide1} >Tab 1</p>
                    <p className={`lg:px-20 px-5 py-2   relative w-full ${show && 'nav-link'}`}onClick={showHide}>Tab 2</p>
                    <p className={`lg:px-20 px-5  py-2 border-l  relative w-full rounded-r-[50px] last ${show2 && 'nav-link'} `}onClick={showHide2} >Tab 3</p>
                </div>
                <div>
                  
                  {show1 && (<div className='flex col-span-1 sm:col-span-2  flex-wrap lg:col-span-3 justify-evenly gap-4 my-10 md:my-20  '>
                    {
                      projects.map((project)=>(
                        <div key={project.id} className='lg:w-100 sm:w-80 w-[80%] m-auto  relative proj-imgbx overflow-hidden rounded-[20px]'>
                          <img src={project.imgUrl} className='   cursor-pointer   w-[100%]' />
                          <div className=' absolute   text-center  transition-all duration-200  opacity-0 proj-txtx text-white font-semibold'>
                            <h1 className='text-5xl allura-regular font-extrabold'>{project.title}</h1>
                            <p>{project.description}</p>
                          </div>
                        </div>
                      ))
                    }
                  </div>)}
                  {
                      show && (<div className='xl:w-[60%]  m-auto w-[80%] md:w-[70%] text-center'>
                      <p className='tracking-wide text-slate-400 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore mollitia nostrum expedita esse. Modi cupiditate ipsam veritatis enim sint dolores quas at asperiores! Quo amet reprehenderit quisquam, sed inventore ex!

                      </p>
                    </div>)
                    }

{
                      show2 && (<div className='xl:w-[60%]  m-auto w-[80%] md:w-[70%] text-center'>
                      <p className='tracking-wide text-slate-400 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus quis odio quisquam, esse in quos maiores veniam vel recusandae nesciunt tempore consectetur, asperiores impedit soluta corporis molestias sequi molestiae vitae veritatis commodi magni voluptas beatae ipsa et. Exercitationem possimus fuga cupiditate fugit error eos libero nulla doloremque, nesciunt nostrum at suscipit nihil vero, officiis culpa ea deserunt inventore voluptatum quis, molestiae dolores tempore quaerat rem. Exercitationem eaque quo distinctio alias quia deleniti voluptatum veniam tempore provident, vero similique magnam sit!

                      </p>
                    </div>)
                    }
                </div>
            </div>
        </div>
        </>
    )
}