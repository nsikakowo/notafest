import React from 'react'
import { MdOutlineMoreTime, MdLockOutline } from "react-icons/md";
import { TbSignature } from "react-icons/tb";

const AboutList =({icon, title, text, color})=>{
    return(
        <div className='flex flex-col items-center w-[33%] md:w-[90%] mt-7 text-[#574a66]'>
            <div className={`text-[100px] mb-2 ${color}`}>
                {icon}
            </div>
            <h3 className='my-3 font-bold text-4'>{title}</h3>
            <p> <hr className='w-[100px] h-[3px] bg-[#f5a199] mb-4'/> </p>
            <p>{text} </p>
        </div>
    )
}

const About = () => {
  return (
    <section className='flex flex-col items-center mx-auto text-center py-7 max-w-[1200px]'>
        <h2 className='text-10 font-bold text-[#574a66]'>What you stand to benefit from the festival</h2>
        <p> <hr className='w-[100px] h-[3px] bg-[#f5a199] my-2'/> </p>
        <p className='w-[60%] md:w-[90%] mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis adipisci provident 
            dignissimos minus esse nostrum. Quos accusamus atque reprehenderit perspiciatis, 
            maxime ad, adipisci commodi vitae incidunt dicta vel doloribus illo hic. </p>

            <div className='flex items-center md:flex-col'>
                <AboutList color={'text-[#feae51ff]'} icon={<MdOutlineMoreTime/>} title={"Learn To Save Time & Money"} text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam asperiores porro fugit excepturi aliquid at voluptate ea."}/>
                <AboutList color={'text-[#c5299bff]'} icon={<MdLockOutline/>} title={"Get Encrypted"} text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam asperiores porro fugit excepturi aliquid at voluptate ea."}/>
                <AboutList color={'text-[#ff6f61ff]'} icon={<TbSignature/>} title={"Understand Virtual Notarization"} text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam asperiores porro fugit excepturi aliquid at voluptate ea."}/>
                
            </div>
    </section>
  )
}

export default About