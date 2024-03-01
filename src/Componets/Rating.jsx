import React from 'react'
import { MdOutlineStar } from "react-icons/md";

const Rating = ({rating}) => {
  let star;
  let message ;
    if (  rating <= 2 ){
       star = 1
       message = "bad"
    }
    else if (  rating <= 4 ){
        star = 2
        message = "wrost"
     }
     else if (  rating <= 6){
        message = "Very Good"
        star = 3
     }
     else if ( rating <= 8 ){
        message ="Excellent"
        star = 4
     }
     else if ( rating <= 10 ){
        message = "Exceptional"
        star = 5
     }

    const RepeatElement = ({ element, repeatCount }) => {
        return (
          <div className='flex'>
            {[...Array(repeatCount)].map((_, index) => (
              <div key={index}>{element}</div>
            ))}
          </div>
        );
      };

  return (
    <div className='rateing flex   justify-evenly gap-20 items-center flex-col   p-3'  >
            <div className='box flex    gap-2 items-center flex-col bg-[#F3F9FF] px-8 py-4'>
                <h3 className=' text-4xl' >{rating}</h3>
                <p>{message}</p>
                <div className=''> <RepeatElement element={<MdOutlineStar/>} repeatCount={star} /></div>
            </div>
            
            <button className='w-[232px] h-[43px] text-white bg-[#1B88F4] rounded-md'>View</button>
            
              </div>
  )
}

export default Rating
