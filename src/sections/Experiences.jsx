import React from 'react'
import { Timeline } from '../components/Timeline'
import {experiences} from "../constants"

const Experiences = () => {
  return (
    <div 
    id='Experiences'
    className='w-full bg-primary z-10 relative mt-0 py-10'>
        <Timeline data={experiences}/>
    </div>
  )
}

export default Experiences;