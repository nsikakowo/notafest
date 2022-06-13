import React, {useState} from 'react'
import { day1List, day2List, day3List, day4List, day5List } from '../info/schedulelist'

const DailySchedule = ({start, end, image, name, post, topic}) => {
    return (
        <div className='schedule'>
        <p className='mx-6 md:mx-auto'>{start} - {end}</p>
        <div className='speaker mr-7 md:mx-auto' >
            <img src={image} alt="" />
        </div>
        <p className='flex md:w-[90%] flex-col mr-7 md:mx-auto'>{name} <span>{post} </span> </p>
        <h4>{topic}</h4>
    </div>
    )
}


const Schedule = () => {
    const [activeDay, setactiveDay] = useState("day1");


  return (
    <section className='flex flex-col items-center justify-center text-[#fff] slider mb-5 py-6 w-full md:w-[100%] relative'>
        <div className='absolute -z-[1] h-full w-full'>
            <img src="https://image.cnbcfm.com/api/v1/image/105451687-1536937126244gettyimages-713835137.jpeg?v=1536937152" alt="" className='object-cover w-[100%] h-[100%] object-bottom'/>
        </div>
        <h2 className='text-10 font-bold text-[#fff]'>Schedule</h2>
        <p> <hr className='w-[100px]  bg-[#f5a199] my-2'/> </p>
        <p className='w-[60%] max-w-[700px] md:w-[90%] text-center mt-3 mb-6'>Lorem, ipsum dolor sit amet consectetur 
        adipisicing elit. Perspiciatis adipisci provident 
        dignissimos minus esse nostrum. Quos accusamus atque reprehenderit perspiciatis. </p>

        <div className='border-[1px] border-[#92118a7a] w-[1200px] md:w-[100%] max-w-[1200px] main-schedule'>
            <div>
                <div className='flex flex-wrap items-center days w-full'>
                    <p onClick={()=> setactiveDay('day1') }  className={`  ${activeDay === "day1" && 'bg-[#ff6f61ff]'}`}> Day 01 <span>17th July</span> </p>
                    <p onClick={()=> setactiveDay('day2') }  className={`  ${activeDay === "day2" && 'bg-[#feae51ff]'}`}> Day 02 <span>18th July</span> </p>
                    <p onClick={()=> setactiveDay('day3') }  className={`  ${activeDay === "day3" && 'bg-[#c5299bff]'}`}> Day 03 <span>19th July</span> </p>
                    <p onClick={()=> setactiveDay('day4') }  className={`  ${activeDay === "day4" && 'bg-[#963cbdff]'}`}> Day 04 <span>20th July</span> </p>
                    <p onClick={()=> setactiveDay('day5') }  className={`  ${activeDay === "day5" && 'bg-[#feae51ff]'}`}> Day 05 <span>21st July</span> </p>
                    
                </div>
                {activeDay === "day1" && <>
                    {
                        day1List.map(item => (
                            <DailySchedule 
                            start={item.start}  
                            end = {item.end}
                            image={item.image}
                            name={item.name}
                            post={item.post}
                            topic={item.topic}
                        />
                        ))
                    }
                    
                   
                </>}
                {activeDay === "day2" && <>
                    {
                        day2List.map(item => (
                            <DailySchedule  
                            start={item.start}  
                            end = {item.end}
                            image={item.image}
                            name={item.name}
                            post={item.post}
                            topic={item.topic}
                        />
                        ))
                    }
                    
                   
                </>}
                {activeDay === "day3" && <>
                    {
                        day3List.map(item => (
                            <DailySchedule 
                            start={item.start}  
                            end = {item.end}
                            image={item.image}
                            name={item.name}
                            post={item.post}
                            topic={item.topic}
                        />
                        ))
                    }
                    
                   
                </>}
                {activeDay === "day4" && <>
                    {
                        day4List.map(item => (
                            <DailySchedule 
                            start={item.start}  
                            end = {item.end}
                            image={item.image}
                            name={item.name}
                            post={item.post}
                            topic={item.topic}
                        />
                        ))
                    }
                    
                   
                </>}
                {activeDay === "day5" && <>
                    {
                        day5List.map(item => (
                            <DailySchedule 
                            start={item.start}  
                            end = {item.end}
                            image={item.image}
                            name={item.name}
                            post={item.post}
                            topic={item.topic}
                        />
                        ))
                    }
                    
                   
                </>}
            </div>
           
        </div>

    </section>
  )
}

export default Schedule