import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from '../assets/meter1.svg';
import img2 from '../assets/meter2.svg';
import img3 from '../assets/meter3.svg';
import color from '../assets/color-sharp.png';  
export default function Skills(){
    const responsive = {
        superLargeDesktop: {
        
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <>
        <div className='relative'>
            <div className=' relative container m-auto z-40'>
                <div className='skill-bx'>
                    <h1 className='ole-regular text-7xl bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-violet-600' id='Skills'>Skills</h1>
                    
                    <Carousel responsive={responsive} infinite={true} className='relative  m-auto w-[80%] pt-20 '>
                        <div className='item flex flex-col justify-center items-center '>
                            <img src={img1} alt="" className='w-[50%] ' />
                            <h1 className='mt-10 allura-regular text-3xl bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-violet-600'>web Developemnet</h1>
                        </div>
                        <div className='item flex flex-col justify-center items-center'>
                            <img src={img2} alt="" className='w-[50%] ' />
                            <h1 className='mt-10 allura-regular text-3xl bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-violet-600'>Logo Designe</h1>
                        </div>
                        <div className='item flex flex-col justify-center items-center'>
                            <img src={img3} alt="" className='w-[50%] ' />
                            <h1 className='mt-10 allura-regular text-3xl bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-violet-600'>UI Designt</h1>
                        </div>
                    </Carousel>
                </div>
            </div>
            <img src={color} alt="" className='absolute top-[100px]' />
        </div>
        
        </>
    )
}