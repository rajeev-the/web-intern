import React,{useState} from 'react'
import { list2 } from '../RealtableList'

const Relatable = () => {
    const [Data , setData] = useState([list2]);
  return (
    <div className='flex-wrap flex  '>
        {
            Data[0].product.map((data , index)=>
            
            <div key={index}  className='Relatble w-[30%] m-3 p-3   flex   gap-3 flex-col items-center justify-around' >   
            <img className='w-[200px]' src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__" alt="" />
            
            <div className='flex mt-[30px]  items-center mr-20  justify-end gap-4'>
               
            <p className='bg-[#F2F4F7] text-[#074786] rounded-md px-2 p-[2px]'>{data.per}% Off</p>
               <p className='bg-[#F2F4F7] p-[2px]  text-[#074786] rounded-md  px-2' > {data.limited? "Limited time": " "} </p>
              
    
            </div>
        <div className=''>
        <h3 className='   text-[#626E79]  font-bold'>Webbuilder 1</h3>
            </div>
               <div className=''>
    
                  <h3 className='text-[#626E79]'>{data.heading}</h3>
            </div>
    
            <div className='price mr-[100px] items-center justify-start flex text-[#5C6874] gap-2 text-xl'>
                <p>${Math.round(data.price-(data.price/100)*data.per)}</p> <div className=' gap-2 flex items-center justify-start'>
                    <p className=' text-sm'>  {data.price} </p> < p className=' text-sm text-[#EF4C5D]'>({data.per}% Off)</p>
                </div>
            </div>
    
            <button className=' w-[95%] p-3  text-white rounded-lg bg-[#1B88F4]'>
                Views Deals
            </button>
    
            </div>
            
            )
        }

       
      
      
    </div>
  )
}

export default Relatable
