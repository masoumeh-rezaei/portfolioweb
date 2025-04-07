

import './App.css'
import Header from './Components/Header'
import ButtonGradient from './assets/Svg/ButtonGradient'
import Banner from './Components/Baner'
import Skills from './Components/Skills'
import Project from './Components/Project'
import Contact from './Components/Contact'
import NewsLetter from './Components/NewsLetter'
import Footer from './Components/Footer'


const App=()=> {
 
  return (
    <>
     
     <div className=  'pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
     <ButtonGradient/>
      
     <Header/>
     <Banner/>
     <Skills/>
     <Project/>
     <Contact/>
     <NewsLetter/>
     <Footer/>
     </div>
    
    </>
  )
}

export default App
