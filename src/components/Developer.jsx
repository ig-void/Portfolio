import React from 'react'
import Lottie from "lottie-react";
import developer from "../assets/work from home.json"
const Developer = () => {
  return (
    <div className="flex justify-center items-center ">
      <Lottie
        animationData={developer}
        loop
        autoplay
        style={{ width:500, height: 500}}
      />
    </div>
  )
}

export default Developer
