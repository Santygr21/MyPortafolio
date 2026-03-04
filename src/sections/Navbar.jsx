import { useState } from "react";
import { motion } from "framer-motion";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import Naruto from '../assets/naruto.jpg'

function Navigation(){
    return(
        <ul className="nav-ul">
            <li className="nav-li">
               <a className="nav-link" href="#">Home</a> 
            </li>
            <li className="nav-li">
               <a className="nav-link" href="#About">About</a> 
            </li>
            <li className="nav-li">
               <a className="nav-link" href="#Projects">Projects</a> 
            </li>
            <li className="nav-li">
               <a className="nav-link" href="#Experiences">Experience</a> 
            </li>
        </ul>
    )
}
const Navbar =  () =>{
    const [showLogo, setShowLogo] = useState(false)
    const[isOpen, setIsOpen] = useState(false);
    return(
        <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
            <div className="mx-auto c-space max-w-7xl">
                <div className="flex items-center justify-between py-2 sm:py-0">
                    <motion.div onClick={() =>{
                        setShowLogo(!showLogo)
                    }}
                    key={showLogo ? "logo" : "text"}
                    initial={{opacity:0, scale:0.9}}
                    animate={{opacity:1, scale:1}}
                    transition={{duration:0.1}}
                    className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
                    >
                    {showLogo ? (
                        <img
                            src={Naruto}
                            className="w-10 h-10 object-contain"
                        />
                    ):(
                        "Santiago"
                    )}
                    </motion.div>
                    <button 
                        onClick={()=> setIsOpen(!isOpen)}
                        className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
                    >
                    <img 
                    src={isOpen ? close : menu} 
                    className="w-6 h-6" 
                    alt="toggle"
                    />
                    </button>
                    <nav className="hidden sm:flex">
                        <Navigation />
                    </nav>
                </div>
            </div>
            {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
        </div>
    )
}
 
export default Navbar; 