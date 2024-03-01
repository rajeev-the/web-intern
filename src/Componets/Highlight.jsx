import React from 'react'

const Highlight = () => {
  return (
    <div className='mr-[100px]  flex items-center justify-start flex-col '>
        <div className='bg-[#FFF4ED] p-3  rounded-lg w-[400px]'>
            <ul className=''>
                <li className=' flex items-center justify-start gap-3 '><div className='p-[2px] bg-white rounded-md'>9.9</div>building responsive</li>
                <li className='flex items-center justify-start gap-3'><div className='p-[2px] bg-white rounded-md'>8.9</div>Cool</li>
                <li className='flex items-center justify-start gap-3'><div className='p-[2px] bg-white rounded-md'>8.9</div>Docs</li>
            </ul>
           </div>

           <div  className='mr-[280px]'>
            <h3 className=' font-bold'>Why we love it</h3>
            <ul>
                <li>Documentation</li>
                <li>Easy Use</li>
                <li>Out of box</li>
            </ul>
           </div>

      
    </div>
  )
}

export default Highlight
