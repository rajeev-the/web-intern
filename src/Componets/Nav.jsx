import React from 'react'
import { CiSearch } from "react-icons/ci";
import "../Responsive.css"

const Nav = () => {
  return (
    <div className='nav1 w-[100%] h-[64px]  flex items-center justify-center bg-[#212731] gap-10 '>
        <div className='searching w-[258px] h-[37px] bg-white rounded-[8px] flex items-center justify-start  '>
        <CiSearch size={28} />
        </div>
        <div className= 'text-white flex items-center gap-12  heading1'>
        <h3>Categories</h3>
        <h3>Website Builders</h3>
        <h3>Today's deals</h3>
      
        </div>
       
    </div>
  )
}

export default Nav
