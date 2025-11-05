// import { } from "lucide-react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
// import Access from './components/Access';




function App() {
  return (
    // <div className="md:h-full md:w-48 ">
    <div className="sm-640 md-768 lg-1024 xl-1280 2xl-1536">
      <div className="md:h-full md:w-48 ">
       <div className="p-5 md:px-[15%]">
        <Navbar />
        <Home />
      </div>

      <About />

      <div className="p-5 md:px-[15%]">
       <Experiences />  
       <Projects />
      
      </div>
       <div>
        {/* <Access /> */}
       </div>
        <Footer /> 
        </div>
    </div>
     
      
    // </div>
  )
}

export default App

// https://daisyui.com/ 
