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
    <div>
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
  )
}

export default App

// https://daisyui.com/
