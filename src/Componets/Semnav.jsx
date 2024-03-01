import React from 'react'
import { MdDone } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { MdDoNotDisturb } from "react-icons/md";


const Semnav = () => {
  return (
    <div className='text-[#4B5665] Main flex items-center justify-start gap-[400px]  max-[400px]:gap-[20px] border-t-2 border-b-2 mt-5 p-2'>
    <div className='max-[400px]:text-[10px] flex justify-center items-center gap-16'>
        <div className='  flex items-center justify-center gap-1'> 
        <MdDone  className=' rounded-full border-2'/>
        <h3 className='' >Last Updated - February 22,2020 </h3>
        </div>
        <div className=' flex items-center justify-center gap-1'>
        <MdDoNotDisturb /> <h3>Advertising Disclosure</h3>
        </div>   
    </div>
    <div className='max-[400px]:text-[10px] text-[#4B5665] flex items-center justify-center gap-3'>
        Top Relevant <FaAngleDown aria-hidden />
    </div>
    </div>
  )
}

export default Semnav
