import LampContainer from '../components/Lamp'
import { motion } from "framer-motion";
import Knolegde from '../components/Knolegde';

const Purpose = () => {
  return (
  <section className="
  relative
  z-10
  min-h-screen
  bg-primary
  
  flex
  flex-col
  items-center
  justify-center
  
  px-6
  md:px-12
  lg:px-20
  
  py-24
">
  
  <div className="w-full flex items-center justify-center">
    
    <LampContainer className="w-full flex items-center justify-center">
      
      <motion.p
        className="
          text-white
          text-center
          font-normal
          
          max-w-4xl
          w-full
          
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-7xl
        "
        initial={{ opacity: 0, x: -100, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 1,
          ease: "easeInOut"
        }}
      >
        Creating is a Science <br />
        where logic meets <br />
        <strong className="font-semibold opacity-100">
          imagination
        </strong>
      </motion.p>

    </LampContainer>

  </div>

  <Knolegde />

</section>
  )
}

export default Purpose;