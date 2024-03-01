import React from 'react'
import Nav from '../Componets/Nav'
import Semnav from '../Componets/Semnav'
import Locnav from '../Componets/Locnav'
import Thirdloc from '../Componets/Thirdloc'
import Section from '../Componets/Section'
import Relatable from '../Componets/Relatable'
import Sign from '../Componets/Sign'
import Footer from '../Componets/Footer'
import "../Responsive.css"


const Home = () => {
  return (
    <>
    <div className='w-[100%] flex items-center justify-center flex-col '>
      <Nav/>
      <div className='  w-[70%] mt-10'>
      <h1 className=' max-[400px]:text-2xl text-5xl'>Best Website builders in the US</h1>
       <Semnav/>
       <Thirdloc/>
       <Locnav/>
       <Section/>
       <h1 className=' text-4xl m-6 mt-8'>Related deals you might like for</h1>
       <Relatable  />
      </div>
      <Sign/>
  
    </div>
    <Footer/>
    </>
  )
}

export default Home
