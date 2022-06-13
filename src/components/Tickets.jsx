import React from 'react'
import stage from "../asset/slide.jpeg"
import { FiCheck } from "react-icons/fi";

const TicketDeeds =({text})=>{
    return (
        <div className='flex items-center border-b-[1px] border-[#efa5c196] w-[100%] my-3 p-[5px]'>
            <p className='mr-3 text-[#f5a199]'><FiCheck/> </p>
            <p className='font-bold text-2'>{text}</p>
        </div>
    )
}

const Ticket =({children, title, price, recommeded})=> {
    return (
        <div className='slider flex flex-col overflow-hidden text-[#fff] mx-3 w-[350px]  rounded-[4px]  my-4 relative'>
            {/* <p className='bg-[#feae51ff] py-1 font-bold text-[12px] absolute -rotate-[35deg] w-[250px] -left-[75px] top-[20px]'>{recommeded}</p> */}
             <div className='absolute -z-[1] h-full w-full'>
            <img src={stage} alt="" className='object-cover w-[100%] h-[100%] object-bottom'/>
        </div>
            <h2 className='my-4 text-10 font-bold'>{title}</h2>
            <div className='flex justify-center '>

            <p className='my-1 bg-[#efa5c130] flex items-start justify-center rounded-[4px] py-2 w-[80%] text-6 font-bold'>
                <span className='font-normal py-2 mr-1 text-5'>₦</span> {price}
            </p>
            </div>
            <div className='px-5'>
                {children}
            </div>
            <div className='flex justify-center mt-4'>

            <button className='bg-[transparent] border-[2px] w-[200px] text-center my-5 rounded-full p-1 hover:bg-[#f5a199]'>Select</button>
            </div>
        </div>
    )
}

const Tickets = () => {
  return (
    <section className='flex flex-col items-center mx-auto text-center py-7 max-w-[1200px]'>
    <h2 className='text-10 font-bold text-[#574a66]'>Tickets</h2>
    <p> <hr className='w-[100px] h-[3px] bg-[#f5a199] my-2'/> </p>
    <p className='w-[60%] md:w-[90%] mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis adipisci provident 
        dignissimos minus esse nostrum. Quos accusamus atque reprehenderit perspiciatis, 
        maxime ad, adipisci commodi vitae incidunt dicta vel doloribus illo hic. </p>

      <div className='flex flex-wrap items-center justify-center w-full mt-3'>
          <Ticket title={"Early Bird"} price={"500"}>
              <TicketDeeds text={"1 Conference Day"} />
              <TicketDeeds text={"1 Workshop Day"} />
              <TicketDeeds text={"Regular Seat"} />
              <TicketDeeds text={"Free Coffee/Lunch"} />
              <TicketDeeds text={"One Certificate"} />
          </Ticket>
          <Ticket title={"Regular"} price={"2000"}>
              <TicketDeeds text={"2 Conference Days"} />
              <TicketDeeds text={"2 Workshop Days"} />
              <TicketDeeds text={"Regular Seat"} />
              <TicketDeeds text={"Free Coffee/Lunch"} />
              <TicketDeeds text={"Two Certificate"} />
          </Ticket>
          <Ticket title={"Exclusive"} price={"5000"}>
              <TicketDeeds text={"Full Conference Day"} />
              <TicketDeeds text={"Full Workshop Day"} />
              <TicketDeeds text={"VIP Seat"} />
              <TicketDeeds text={"Free Coffee/Lunch"} />
              <TicketDeeds text={"Three Certificate"} />
          </Ticket>
          
      </div>
</section>
  )
}

export default Tickets