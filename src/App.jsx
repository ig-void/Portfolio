import "./index.css"
import { FaInstagram } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedCharacter from "./components/AnimatedCharacter.jsx";
import YogaChar from "./components/YogaChar.jsx";
function App() {
  const settings={
    dots:false,
    infinite:true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1
  };
   

  return (
    <div className="flex flex-col">
      {/* Navbar */}
      
    {/* Introduction */}
    <div id="Introduction" className="flex flex-col md:flex-row min-h-screen bg-neutral-950 justify-evenly items-center px-6 md:px-12 ">
      <div className="w-full md:w-1/2 text-left mb-6 pt-10 md:mb-0">
      <h1 className="text-white text-3xl md:text-4xl leading-snug"><span>Hi,</span> I am <span  className="bg-gradient-to-br from-red-600 to-red-400 bg-clip-text text-transparent">Anubhav Srivastava</span></h1>
      <p className="text-white mt-3 text-sm md:text-base">Full Stack Web Developer | Passionate Problem-Solver
       Crafting dynamic web experiences and tackling challenging technical problems with modern technologies.</p>
       <div className="border border-gray-400 w-[120px] mt-5 rounded-xl text-white flex justify-center items-center hover:bg-gradient-to-br from-red-600 to-black">
        <a href="#contact">Let's Connect</a>
       </div>
      </div>
      <div className="rounded-2xl bg-gradient-to-br from-red-600 to-black  w-60 h-60 md:w-80 md:h-80 flex justify-center items-center">
        <img className="w-60 h-60 md:w-80 md:h-80 rounded-md object-cover " src="MyPhoto.png" alt="Profile" />
      </div>
    </div>
    {/* About ME */}
    <div id="About Me" className="flex flex-col md:flex-row justify-evenly min-h-screen bg-neutral-900 items-center px-6 md:px-12">
       <img className="w-60 h-60 md:w-80 md:h-80 rounded-md object-cover shadow-3xl bg-gradient-to-br from-red-600 to-black" src="Coding1.jpg" alt="Profile" />
    <div className="flex flex-col w-full md:w-1/2 justify-center mt-6 md:mt-0">
      <h1 className="bg-gradient-to-br from-red-600 to-black bg-clip-text text-3xl md:text-4xl text-transparent">About Me!</h1>
      <p className="text-white text-sm md:text-base mt-3">Motivated developer specializing in full stack and frontend web project, currently pursuing a B.Tech in Couputer Science & Engineering at KCC Institure of Technology and Management. With hands-on experience at CodexInter, I am skilled at building interactive and efficient web Solutions. My approach blends creativity and technical expertise,always aiming for impactful user experiences and clean, maintainable code. I thrive on collaboration, continous learning, and translating ideas into functional products.</p>
    </div>
    </div>
    {/* Skills */}
    <div id="Skills" className="flex flex-col bg-zinc-900 justify-center items-center py-16 gap-y-10 px-6 md:px-12">
      <h1 className="text-white text-3xl md:text-4xl">Skills</h1>
      <div className="flex flex-wrap gap-8 mt-4 items-center justify-center">
        <FaHtml5 color="yellow" size={50} className=" hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.7)] animate-bounce [animation-duration:1s]"/>
        <RiTailwindCssFill color="skyblue" size={50} className="hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.7)] animate-bounce [animation-duration:2.5s]"/>
        <RiJavascriptFill color="Yellow" size={50} className="hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.7)] animate-bounce [animation-duration:2s]"/>
        <RiReactjsLine size={50} color="royalblue" className="hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.7)] animate-bounce [animation-duration:1s]"/>
        <DiNodejs size={50} color="green" className="hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.7)] animate-bounce [animation-duration:2.5s]"/>
        <FaPython size={50} color="blue" className="hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.7)] animate-bounce [animation-duration:2s]"/>
        <SiExpress size={50} color="yellow" className="hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.7)] animate-bounce [animation-duration:2s]"/>
        <SiMongodb size={50} color="green" className="hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.7)] animate-bounce [animation-duration:1s]"/>
        <SiPostman size={50} color="orange" className="hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.7)] animate-bounce [animation-duration:2s]"/>
        <DiJava size={50} color="royalblue" className="hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.7)] animate-bounce [animation-duration:2.5s]"/>
        <SiMysql size={50} color="skyblue" className="hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.7)] animate-bounce [animation-duration:1s]"/>  
            </div>
    </div>
    {/* Projects */}
    <div id="Projects" className="bg-neutral-950  flex justify-center items-center min-h-screen flex-col px-6 md:px-12">
      <h1 className="text-white mt-5 text-3xl md:text-4xl">Projects</h1>
      <div className="w-full md:w-1/2 m-auto mt-8">
      <div className="">
        <Slider {...settings}>
        {projects.map((d)=>(
          <div className="rounded-xl flex flex-col justify-center bg-zinc-900 text-white p-6">
            <div className="h-40 md:h-56 mt-4 rounded-t-xl flex justify-center items-center">
              <img className="w-32 h-32 md:w-50 md:h-50   object-cover" src={d.image} alt="Image" />
            </div>
            <div className="text-white flex flex-col items-center justify-center text-center mt-4">
              <h3 className="bg-gradient-to-br from-red-600 to-red-500 bg-clip-text text-2xl md:text-4xl text-transparent mb-3">{d.title}</h3>
              <p className="text-sm md:text-base">{d.description}</p>
              <p className="text-sm md:text-base break-all"><span className="font-bold">Link: </span><a target="_blank" rel="noopener noreferrer" href={d.liveLink}>{d.liveLink}</a></p>
              <p className="text-sm md:text-base break-all"><span className="font-bold">Repo: </span><a target="_blank" rel="noopener noreferrer" href="{d.repoLink}">{d.repoLink}</a></p>
            </div>
          </div>
        ))}
        </Slider>
      </div>
      
      </div>
    </div>
    {/* Certificates */}
    {/* <div id="Certificates" className=" bg-neutral-900 flex justify-center min-h-screen flex-col px-6 md:px-12">
      <h1 className="text-white mt-5 text-3xl md:text-4xl">Certificates</h1>

      <div className=" flex flex-wrap justify-center items-center border mt-5 border-white h-[320px]"> 
        <div className=" bg-gradient-to-br rounded-md from-red-600 to-red-400 p-[1px] h-[200px] grid place-items-center" >
         <div className="grid place-items-center bg-black rounded-md h-[198px]  p-4">
          <h1 className="text-white">THis is div</h1>
         </div>
        </div>
      </div>
    </div> */}
    {/* Contact me */}
    <div id="contact" className="flex min-h-screen flex-col px-6 md:px-12 bg-neutral-900 items-center ">
  <h1 className="text-white mt-9 text-3xl md:text-4xl">Contacts</h1>
  <div className="mt-8 w-full md:w-3/4 bg-gray-900 text-white flex rounded-4xl flex-col justify-center items-center h-full pb-6">
    <AnimatedCharacter />
    <div className=" flex flex-col md:flex-row w-full justify-center items-center gap-3 px-4">
      <div className="rounded-md bg-gradient-to-br from-blue-300 to-black p-[2px] w-full md:w-auto hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-400">
        <div className="rounded-md flex flex-row items-center justify-center gap-x-2 bg-gray-900 p-2">
          <a className="flex flex-row items-center gap-x-2" href="https://www.instagram.com/a_n_u_b_h_a._v?igsh=ZWxzanYyb3B2MzVx"><FaInstagram size={25}/>Instagram</a>
        </div>
      </div>
      <div className="rounded-md bg-gradient-to-br from-blue-300 to-black p-[2px] w-full md:w-auto hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-400">
        <div className="rounded-md flex flex-row items-center justify-center gap-x-2 bg-gray-900 p-2">
          <a className="flex flex-row items-center gap-x-2" href="https://github.com/ig-void"><FaGithub size={25}/>Git Hub</a>
        </div>
      </div>
      <div className="rounded-md bg-gradient-to-br from-blue-300 to-black p-[2px] w-full md:w-auto hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-400">
        <div className="rounded-md flex flex-row items-center justify-center gap-x-2 bg-gray-900 p-2">
          <a className="flex flex-row items-center gap-x-2" href="https://www.linkedin.com/in/anubhav-srivastava-507327268/"><CiLinkedin size={25}/>Linkedin</a>
        </div>
      </div>
      <div className="rounded-md bg-gradient-to-br from-blue-300 to-black p-[2px] w-full md:w-auto hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-400">
        <div className="rounded-md flex flex-row items-center justify-center gap-x-2 bg-gray-900 p-2">
          <a className="flex flex-row items-center gap-x-2" href="https://leetcode.com/u/ig-void/"><SiLeetcode size={25}/>Leetcode</a>
        </div>
      </div>
      
    </div>
   
  </div>
   <YogaChar />
</div>
   </div>
  )
}
const projects=[
      {
    title: "Portfolio",
    description: "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and experience in web development.",
    image: "logo.svg",
    liveLink: "https://portfolio-theta-three-88.vercel.app/",
    repoLink: "https://github.com/ig-void/Portfolio.git"
  },
    {
    title: "NoteNest",
    description: "Note-taking app with full CRUD operation and authentication.",
    image: "3131619.png",
    liveLink: "https://note-nest-roan.vercel.app/",
    repoLink: "https://github.com/ig-void/NoteNest.git"
  },
      {
    title: "MyExcel",
    description: "Excel Analytics platform which allows user to generate 2-d and 3-d charts also user can view their previosly generated charts.",
    image:"excel.webp",
    liveLink: "https://my-excel-rho.vercel.app/",
    repoLink: "https://github.com/ig-void/MyExcel.git"
  },
  //   {
  //   title: "Blog",
  //   description: "Blogging site where users can create, like, comment & follow.",
  //   image: "images.png",
  // },


  {
    title: "SayItAll",
    description: "SayItAll is a platform where user can convert any text in English to any other language.",
    image: "translate.png",
    repoLink: "https://github.com/ig-void/SayItAll-.git"
  }
];


export default App
