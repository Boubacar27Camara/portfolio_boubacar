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



    <div className="w-full min-h-screen bg-black text-gray-900">
      {/* Barre de navigation et section d'accueil */}
      <div className="px-4 sm:px-8 md:px-[10%] lg:px-[15%] py-6">
        <Navbar />
        <Home />
      </div>

      {/* Section "À propos" */}
      <section className="px-4 sm:px-8 md:px-[10%] lg:px-[15%] py-8">
        <About />
      </section>

      {/* Expériences et projets */}
      <section className="px-4 sm:px-8 md:px-[10%] lg:px-[15%] py-8">
        <Experiences />
        <Projects />
      </section>

      {/* Section optionnelle */}
      {/* <section className="px-4 sm:px-8 md:px-[10%] lg:px-[15%] py-8">
    <Access />
  </section> */}

      {/* Pied de page */}
      <footer className="px-4 sm:px-8 md:px-[10%] lg:px-[15%] py-6 bg-gray-100">
        <Footer />
      </footer>
    </div>


    // <div className="md:h-full md:w-48 ">
    // <div className="sm-640 md-768 lg-1024 xl-1280 2xl-1536">
    //   <div className="md:h-full md:w-48 ">
    //    <div className="p-5 md:px-[15%]">
    //     <Navbar />
    //     <Home />
    //   </div>

    //   <About />

    //   <div className="p-5 md:px-[15%]">
    //    <Experiences />  
    //    <Projects />

    //   </div>
    //    <div>
    //     {/* <Access /> */}
    //    </div>
    //     <Footer /> 
    //     </div>
    // </div>


    // </div>
  )
}

export default App

// https://daisyui.com/ 
