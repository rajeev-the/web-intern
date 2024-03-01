import React, { useState } from 'react'
import Rating from './Rating';
import Block from './Block';
import { list } from '../Data';
import Highlight from './Highlight';


const Section = () => {
    const [Data , setData] = useState([list]);
    
  return (
    <>{
        Data[0].product.map((data , index )=>
        <div className='mt-5 git branch -M main' key={index} >
        <Block condition={data.trend} /> 
    <div className='flex items-center justify-center   '>
        <p  className=' rounded-full p-2 border-2 mb-[150px]'>{index+1}</p>
        <div className=' flex items-center justify-between  flex-col  gap-4 p-12 '> <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__" alt="" /> 
        <p>{data.bulider}</p>   </div>
        <div className='text  flex  items-center justify-between flex-col gap-3'>

<div className=''>
   <p>  <a className='font-bold  text-base'>{data.heading}-</a> {data.content}</p>
</div>
       <div  ><h3 className='font-bold   mr-[400px] text-base'>Main highlights</h3></div>
       <div><p className='   ml-[25px] text-base'>{data.high ? <Highlight/> : data.Main }</p></div>
       <p className='text-[#1B88F4]  font-bold mr-[400px]'>Show more</p>
        </div>
        <Rating rating ={data.ranking}/>
      
    </div>
    
    </div>
        
        )
    
    }
    </>
  )
}

export default Section
