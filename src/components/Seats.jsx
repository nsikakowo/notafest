import React from 'react'
import stage from "../asset/slide.jpeg"

const SeatTab =({numb, text})=> {
    return (
        <div className='w-[250px] text-center bg-[#efa5c196] text-[#fff] m-2 py-4'>
            <h4 className='text-10 font-bold'>{numb}</h4>
            <p>{text}</p>
        </div>
    )
}

const Seats = () => {
  return (
    <section className='flex items-center justify-center slider py-6 w-full relative'>
        <div className='absolute -z-[1] h-full w-full'>
            <img src={stage} alt="" className='object-cover w-[100%] h-[100%] object-bottom'/>
        </div>
        <div className='flex items-center flex-wrap justify-center max-w-[1200px]'>

        <SeatTab text={"Seats"} numb ={"120000"} />
        <SeatTab text={"Hours"} numb ={"82"} />
        <SeatTab text={"Speakers"} numb ={"21"} />
        <SeatTab text={"Prizes"} numb ={"30"} />
        </div>
    </section>
  )
}

export default Seats