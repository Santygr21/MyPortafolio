import React from 'react'
import HeroText from '../components/HeroText'
import BackgroundAnimation from '../components/Background'
import { Model } from '../components/model'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from "usehooks-ts";
import { Float } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { easing } from "maath";
import { Suspense } from 'react'
import Loader from '../components/Loader'
import ShootingStars from '../components/ShootingStars'
import StarsBackground from '../components/stars'


const Hero = () => {
  const isMobile = useMediaQuery("(max-width: 853px)");

  return (
    <section
      className="
        sticky
        top-0
        h-screen
        z-0
        
        flex
        items-start
        justify-center
        md:items-start
        md:justify-start
        
        overflow-hidden
        c-space
      "
    >
      <BackgroundAnimation />
      <ShootingStars />
      <StarsBackground />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-full flex items-start">

        <HeroText />

      </div>

      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Model
                scale={isMobile && 0.23}
                position={isMobile && [0, -1.5, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig(){
  return useFrame((state, delta) =>{
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    )
  })
}

export default Hero;