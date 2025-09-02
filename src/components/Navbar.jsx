import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full fixed top-0 z-50 text-white">
      <div className="ml-3 flex justify-between items-center h-12 px-4">
        <div className="bg-transparent "><img width={35} src="/logo.svg" alt="" /></div>
        <div className="hidden md:flex gap-5">
          <a  className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-500 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100" href="#Introduction">Introduction</a>
          <a  className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-500 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100" href="#About Me">About Me</a>
          <a  className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-500 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100" href="#Skills">Skills</a>
          <a  className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-500 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100" href="#Projects">Projects</a>
        </div>
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
      </div>
      {open && (
        <div className="flex flex-col items-center gap-4 py-4 md:hidden bg-black bg-opacity-80">
          <a href="#Introduction" onClick={() => setOpen(false)}>Introduction</a>
          <a href="#About Me" onClick={() => setOpen(false)}>About Me</a>
          <a href="#Skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#Projects" onClick={() => setOpen(false)}>Projects</a>
        </div>
      )}
    </div>
  )
}

export default Navbar
