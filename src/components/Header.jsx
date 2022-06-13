import React, {useState} from 'react'
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [isOpen, setisOpen] = useState(false)


  return (
    <header className='flex justify-between bg-transparent'>
        <div className='font-bold text-5 text-[#f4a266]'>NOTA-FEST</div>
        <ul  className='nav flex justify-between font-bold'>
            <li className='mx-2'>Home</li>
            <li className='mx-2'>About</li>
            <li className='mx-2'>Speakers</li>
            <li className='mx-2'>Tickets</li>
            <li className='mx-2'>Register</li>
         </ul>
         <div onClick={()=> setisOpen(true)}  className='mob-nav text-[35px]  cursor-pointer'>
           <HiOutlineMenuAlt1/>
         </div>
         {
           isOpen && 
           <>
            <div className='qrBg'></div>
         <ul  className='mob-fly'>
           <p onClick={()=> setisOpen(false)} ><GrClose/></p>
            <li className='mx-2'>Home</li>
            <li className='mx-2'>About</li>
            <li className='mx-2'>Speakers</li>
            <li className='mx-2'>Tickets</li>
            <li className='mx-2'>Register</li>
         </ul>
           </>
         }
         
    </header>
  )
}

export default Header