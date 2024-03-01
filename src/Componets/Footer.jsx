import React from 'react'
import { FaAngleDown } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='mt-[80px] bg-[#212731] w-[100%] p-[200px] flex items-center justify-evenly h-4'>
      <div className='1'>
        <h2 className='text-bolder text-xl uppercase  tranfo text-white'>Categories</h2>
        <ul className=' text-[#B6BDC4] '>
            <li className='pt-5'> Web Builder</li>
            <li className='pt-5' >Data Center</li>
             <li  className='pt-5'>Hosting</li>
             <li className='pt-5' >Robotic-Automation</li>
            
        </ul>

      </div>
      <div className='2'>
        <h2 className='text-bolder text-xl uppercase  tranfo text-white'>Contact</h2>
        <ul  className=' text-[#B6BDC4] '>
            <li className='pt-5'>Contact</li>
            <li className='pt-5'>Privacy Policy</li>
             <li className='pt-5'>Terms Of Service</li>
             <li className='pt-5'>Categories</li>
            
        </ul>

      </div>
      <div className=' mb-20 3 flex gap-2 items-center justify-between'>
        <h3 className='text-[#B6BDC4]'>United States </h3>
        <FaAngleDown color='white' />

      </div>
    </div>
  )
}

export default Footer
