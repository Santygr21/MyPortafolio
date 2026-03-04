import {useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { Frameworks } from '../components/Frameworks';

import { OrbitingCircles } from '../components/OrbitingCircles';

import FotoPerfil from '../assets/perfil.svg'
import TechLogos from '../assets/imagenLogos.png'
import Globe from 'react-globe.gl'
import KeyBoardImg from '../assets/keyboard.png'
import Grid4 from '../assets/grid4.png'
import Copy from '../assets/copy.svg'
import Tick from '../assets/tick.svg'
import Button from '../components/Button'
import Cover from '../components/Cover';

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const sectionRef = useRef(null); 

    const { scrollY } = useScroll(); 
    const [sectionTop, setSectionTop] = useState(0);
    useEffect(() => {
        if (sectionRef.current) {
         setSectionTop(sectionRef.current.offsetTop);
        }
    }, []);    

    const titleY = useTransform(scrollY, [sectionTop - 700, sectionTop], [150, 0]);
    const titleOpacity = useTransform(scrollY, [sectionTop - 700, sectionTop - 100], [0, 1]);

    const handleCopy = () =>{
    navigator.clipboard.writeText('santiagogonzalezrami@gmail.com');
    setHasCopied(true);
    setTimeout(() =>{
        setHasCopied(false);
    }, 2000)

}
  return (
    <section
        id='About'
        ref={sectionRef}
        className='relative c-space px-10 py-32 bg-primary overflow-hidden mb-0'
    >
        <motion.h1 
            style={{y: titleY, opacity: titleOpacity}}
            className="
            absolute
            inset-x-0
            top-16
            z-0
            text-center
            text-8xl
            font-bold
            text-white/10

            select-none
        ">
                Who am I <br />
                as a <Cover>Designer</Cover> ?
        </motion.h1>

        <div
            className='relative z-10 grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 px-10 h-full mt-50'
        >
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container grid-5'>
                    <img src={FotoPerfil} className='w-full sm:h-[276px] h-fit object-contain' />
                    <div>
                        <p className='grid-headtext'>Hi, I'm Santiago</p>
                        <p className='grid-subtext'>I’m a Frontend Developer and UI/UX Designer.
                             I combine design and code to create clean, functional interfaces that connect 
                            aesthetics with usability.</p>
                    </div>
                </div>
            </div>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-default-color grid-5'>
                    <div className='absolute md:inset-y-9 w-full h-full start[50%] md:scale-125 mt-50 ml-20'>
                    <Frameworks />
                    </div>
                    <div>
                        <p className='grid-headtext'>Tech Stack</p>
                        <p className='grid-subtext'>I'm focused on building modern, intuitive, and user-centered digital experiences.</p>
                    </div>
                </div>
            </div>
            <div className='col-span-1 xl:row-span-4'>
                <div className='grid-container grid-5'>
                    <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                        <Globe 
                        height={326}
                        width={326}
                        backgroundColor="rgba(0,0,0,0)"
                        backgroundImageOpacity={0.5}
                        showAtmosphere
                        showGraticules
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        />
                    </div>
                    <div>
                        <p className='grid-headtext'>                  
                            I work virtually all over the world
                        </p>
                        <p className='grid-subtext'>                  
                            I'm based in Colombia, with remote work available.
                        </p>
                        <Button name="Contact Me" isBeam containerClass="w-full mt-10" link="https://www.linkedin.com/in/santiagogonzalez21/"/>
                    </div>
                </div>
            </div>
            <div className='xl:col-span-2 xl:row-span-3'>
                <div className='grid-container grid-5'>    
                    <img src={KeyBoardImg} className='w-full sm:h-[266px] h-fit object-contain' />

                    <div>
                        <p className='grid-headtext'>My passion for creating</p>
                        <p className='grid-subtext'>I really love find and create solutions to people's problems - It is my passion</p>
                    </div>
                </div>
            </div>
            <div className='xl:col-span-1 xl:row-span-2'>
                <div className='grid-container grid-5'>
                    <img src={Grid4} className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />
                    <div className='space-y-2'>
                        <p className='grid-subtext text-center'> Contact me</p>
                        <div className='copy-conta' onClick={handleCopy}>
                            <img src={hasCopied ? Tick : Copy} alt="Copy" />
                            <p className='lg:text-xl md:text-xl font-normal text-white'>santiagogonzalezrami@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About