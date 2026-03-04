import React from 'react'
import { motion } from "framer-motion";

import JSlogo from '../assets/js.svg'
import AdobeLogo from '../assets/adobe.svg'
import FigmaLogo from '../assets/figma.svg'
import TSLogo from '../assets/typescript.svg'
import ReactLogo from '../assets/react.svg'


const items = [
  { logo: ReactLogo, name: "React.js" },
  { logo: TSLogo, name: "TypeScript" },
  { logo: JSlogo, name: "JavaScript" },
  { logo: FigmaLogo, name: "Figma" },
  { logo: AdobeLogo, name: "Adobe Suite" },
];

const Knolegde = () => {
  return (
    <section className="
    w-full
    max-w-5xl
    h-20 md:h-24
    mx-auto
    my-16
    bg-primary
    overflow-hidden
    rounded-xl
    flex
    items-center
    relative
">

      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-primary to-transparent z-10" />

      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-primary to-transparent z-10" />

      <motion.div
        className="flex gap-12 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 whitespace-nowrap ml-5"
          >
            <img
              src={item.logo}
              width={40}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
            <p className="text-2xl text-white/50">
              {item.name}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Knolegde;