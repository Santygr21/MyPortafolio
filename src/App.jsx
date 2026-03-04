import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Purpose from "./sections/Purpose";
import Knolegde from "./components/Knolegde";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";

const App = () =>{
  return(
    <>
    <Navbar />
    <Hero />
    <Purpose />
    <About />
    <Projects />
    <Experiences />
    <section className="relative bg-primary w-full h-[30rem] z-10" />
    </>
  )
}
 
export default App; 