import  Button  from "../Components/Button";
import spaceSvg from '../assets/header-img.svg';
import { useState, useEffect } from "react";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export default function Banner(){
    const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

    return(
        <>
        <section className="banner">
            <div className=" flex justify-center items-center   col-span-1 container m-auto md:text-left text-center  md:flex-nowrap flex-wrap " id="Home">
                {/*content section*/}
                <TrackVisibility className="order-2 md:order-1">
                    {({isVisible})=>
                    <div className=" col-span-1 space-y-4 md:mr-30 order-2 md:order-1  md:justify-start md:text-left" >
                    <Button >
                        Welcome to my portfilo 
                    </Button>
                    <h1 className="allura-regular text-5xl bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-violet-500">{'I am Masoumeh Reazei'}  <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                    <p className="text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatibus aspernatur quas magnam illum dicta, animi fugit aliquid maxime sapiente.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error quis porro vel in dolore sint est fugiat ut exercitationem.

                    </p>
                </div>
                    
                    }
                </TrackVisibility>
                {/*img section*/}
                <div className="md:w-full w-[60%] order-1 md:order-2 -mt-20 md:mt-0 mb-15 animate-pulse">
                    <img src={spaceSvg} alt="" />
                </div>
            </div>
        </section>
        </>
    )
}