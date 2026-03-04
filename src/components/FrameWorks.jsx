import { OrbitingCircles } from "./OrbitingCircles"
import adobe from '../assets/adobe.svg'
import figma from '../assets/figma.svg'
import js from '../assets/js.svg'
import react from '../assets/react.svg'
import typescript from '../assets/typescript.svg'
import tailwind from '../assets/tailwind.svg'
import github from '../assets/github.svg'
import css3 from '../assets/css3.svg'
import python from '../assets/python.svg'


export function Frameworks() {
    const skills = [adobe, figma, js, react, typescript, tailwind, github, css3, python]
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) =>(
            <Icon key={index} src={skill}/>))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) =>(
            <Icon key={index} src={skill}/>))}
      </OrbitingCircles>
    </div>
  )
}

const Icon = ({src}) =>(
    <img src={src} className="rounded-sm hover:scale-110 duration-110" />
)