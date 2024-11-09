import React from 'react'
import { DiAndroid, DiAngularSimple, DiCisco, DiCss3, DiJava, DiJavascript, DiNodejs, DiPython, DiReact } from "react-icons/di";
const Tech = () => {
  return (
    <div className='my-10'>
<h1 className='text-center text-3xl font-bold mb-5'>Technologies that I use</h1>
       <div className='grid grid-cols-4 place-items-center'>

<DiCss3 size={200}  className='hover:scale-125 ease-in duration-75 hover:text-pink-500 cursor-pointer'/>
<DiPython size={200} color='green'/>
<DiReact size={200} color='blue'/>
<DiNodejs className='animate-bounce' size={200} color='green'/>
<DiJava  className=' hover:scale-125 ease-in duration-100' size={200} color='blue' />
<DiAndroid className='hover:scale-110 ease-in duration-125 hover:text-green-500'size={200} />
<DiCisco size={200} color='purple'/>
<DiAngularSimple size={200} color='red'/>

         </div>
    </div>
  )
}

export default Tech