import React from 'react'
import owo from '../asset/aaaa.jpeg'
import owo1 from '../asset/2.JPG'
import owo2 from '../asset/3.JPG'
import owo3 from '../asset/4.JPG'

const speakerItem = [
    {
        id:1,
        image:owo,
        name:"Nsikak Owo",
        title:"Frontend Dev"
    },
    {
        id:2,
        image:owo1,
        name:"Max Mark",
        title:"Artist"
    },
    {
        id:3,
        image:owo2,
        name:"Esty John",
        title:"Project Manager"
    },
    {
        id:4,
        image:owo3,
        name:"Cindy Paul",
        title:"Devops Engineer"
    },
]

const Speaker = ({pic, name, post})=> {
    return (
        <div className='w-[250px] m-2 text-[#574a66]'>
            <div className='w-full h-[250px] relative overflow-hidden  cursor-pointer'>
            {/* <div className='absolute overlay h-full w-full'> </div> */}
                <img src={pic} alt=""  className='object-cover object-top w-[100%] h-[100%] duration-[2000ms] hover:scale-[1.1] ' />
            </div>
            <h4 className='text-4 mt-2 font-bold'>{name}</h4>
            <p className='text-2 text-[#f5a199] font-bold'>{post}</p>
        </div>
    )
}

const Speakers = () => {
  return (
    <section  className='flex flex-col items-center mx-auto text-center py-7 max-w-[1200px]'>
        <h2 className='text-10 font-bold text-[#574a66]'>Meet The Speakers</h2>
        <p> <hr className='w-[100px] h-[3px] bg-[#f5a199] my-2'/> </p>
        <p className='w-[60%] md:w-[90%] mt-2 mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis adipisci provident 
            dignissimos minus esse nostrum. </p>

            <div className='flex flex-wrap items-center justify-center'>
                {speakerItem.map((speaker)=>(
                    <Speaker key={speaker.id} pic={speaker.image} name={speaker.name} post={speaker.title} />
                ))}
            </div>
    </section>
  )
}

export default Speakers