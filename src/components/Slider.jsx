import React, {useState} from 'react'
import { MdLocationPin } from "react-icons/md";
import { FaRegCalendar } from "react-icons/fa";
import slide from "../asset/stage.jpeg"
import Header from './Header';
import { useTimer } from 'react-timer-hook';


// const DateHolder = ({_figure, _writeup, backgd}) => {
//     return(
//         <div className={`flex flex-col mx-2 md:mx-2 w-[150px] md:w-[75px] md:p-2 justify-center items-center 
//         border-[3px] ${backgd} p-4 rounded-full`}>
//             <p className='text-6 md:text-3'>{_figure}</p>
//             <p className='md:text-2' >{_writeup}</p>
//         </div>
//     )
// }

const Slider = () => {
    const [live, setlive] = useState(false)


    function MyTimer({ expiryTimestamp }) {
        const {
          seconds,
          minutes,
          hours,
          days,
        } = useTimer({ expiryTimestamp, onExpire: () => setlive(true) }); // callback function onExpire should go here
        return (
            <section className='flex items-center'>
           
            <div className={`flex flex-col mx-2 md:mx-2 w-[150px] md:w-[75px] md:p-2 justify-center items-center 
            border-[3px] border-[#feae51ff]  p-4 rounded-full`}>
                <p className='text-6 md:text-3'>{days}</p>
                <p className='md:text-2' >Days</p>
            </div>
            <div className={`flex flex-col mx-2 md:mx-2 w-[150px] md:w-[75px] md:p-2 justify-center items-center 
            border-[3px] border-[#c5299bff]  p-4 rounded-full`}>
                <p className='text-6 md:text-3'>{hours}</p>
                <p className='md:text-2' >Hours</p>
            </div>
            <div className={`flex flex-col mx-2 md:mx-2 w-[150px] md:w-[75px] md:p-2 justify-center items-center 
            border-[3px] border-[#ff6f61ff] p-4 rounded-full`}>
                <p className='text-6 md:text-3'>{minutes}</p>
                <p className='md:text-2' >Minutes</p>
            </div>
            <div className={`flex flex-col mx-2 md:mx-2 w-[150px] md:w-[75px] md:p-2 justify-center items-center 
            border-[3px] border-[#963cbdff] p-4 rounded-full`}>
                <p className='text-6 md:text-3'>{seconds}</p>
                <p className='md:text-2' >Seconds</p>
            </div>
            {live}
            </section>
          );
    }    

    const time = new Date();
    time.setSeconds(time.getSeconds() + 950400); // 10 minutes timer

  return (
    <main className='w-full h-[100vh] slider text-[#fff] flex flex-col justify-center items-center'>
        <div className='absolute -z-[1] h-[100vh]  w-full'>
            <img src={slide} alt=""  className='object-cover w-[100%] h-[100%]'/>
        </div>
        <div className='absolute w-full top-[1px] py-5 px-6 md:px-3 md:py-2'>
        <Header/>

        </div>
        <h1 className='text-[50px] md:text-[40px] md:-mt-[100px] text-center font-bold'>The Biggest Notary Event in Africa</h1>
        <div className='flex justify-center items-center font-bold mt-3 mb-4'>
            <p className='mr-4  md:mr-1 flex items-center'>
                <span className='mr-3 text-[#f4a266]'>
                    <FaRegCalendar/>
                </span>
                July, 17th - 21st
            </p>
            <p className='mr-4 md:mr-1 flex items-center'>
                <span className='mr-3 text-[#f4a266]'>
                    <MdLocationPin/>
                </span>
                Lekki-Lagos Nigeria
            </p>
        </div>
        
        <MyTimer expiryTimestamp={time} />
        <div className='mt-7'>
            <button className='bg-[#f4a299] font-bold rounded-[8px] p-3 hover:bg-[#f4a266]'>Make A Reservation</button>

        </div>
    </main>
  )
}

export default Slider