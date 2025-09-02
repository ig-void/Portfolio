import React from 'react'
import Lottie from "lottie-react";
import yoga from "../assets/yoga.json";
const YogaChar = () => {
  return (
     <div className="flex flex-col justify-center items-center mt-7 ">
      <Lottie
        animationData={yoga}
        loop
        autoplay
        style={{ width: 100, height:100}}
        
      />
        <h2 className='bg-gradient-to-br from-red-600 to-black bg-clip-text text-3xl md:text-4xl text-transparent '>Thank you</h2>
    </div>
  )
}

export default YogaChar
