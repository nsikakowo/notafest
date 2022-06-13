import React,{useState} from 'react'
import stage from "../asset/slide.jpeg"
import { useForm } from "react-hook-form";
import QRCode from "react-qr-code";
import { BsPinMap,BsTelephoneForward, BsMailbox } from "react-icons/bs";

const RegTabs = ({topic, text, icon})=>{
  return(
    <div className='w-[300px] my-3 flex justify-center flex-col items-center text-center'>
      <p className='text-[#feae51ff] text-6 md:text-5'>{icon}</p>
      <h5 className='my-2 font-bold'>{topic}</h5>
      <p className='text-[14px]'>{text}</p>
    </div>
  )
}

const Register = () => {
  const [submitted, setsubmitted] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    window.scrollTo(0, 0);
    setsubmitted(true)
  }

  return (
    <>
    <section className='flex flex-col items-center justify-center text-[#fff] slider mb-5 py-6 w-full relative'>
        <div className='absolute -z-[1] h-full w-full'>
            <img src={stage} alt="" className='object-cover w-[100%] h-[100%] object-bottom'/>
        </div>

        <h2 className='text-10 font-bold text-[#fff] mb-5'>Register for NATO-FEST</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-[600px] md:w-[90%] bg-[#f1f1f1] rounded-[8px] py-5 text-[#574a66]'>
            <label htmlFor="" className='flex w-[80%] mx-auto font-bold'>Full Name:</label>
            <input type="text" placeholder='Your FullName'   className='inputField' {...register("fullname", {required:true})}/>
            {errors.fullname?.type === 'required' && <p className='error'>Full name is required</p>}

            <label htmlFor="" className='flex w-[80%] mx-auto font-bold'>Email:</label>
            <input type="email" name="" placeholder='Your Email' id=""  className='inputField' {...register("email", {required:true})}/>
            {errors.email?.type === 'required' && <p className='error'>Email is required</p>}

            <label htmlFor="" className='flex w-[80%] mx-auto font-bold'>Phone Number:</label>
            <input type="tel" name="" placeholder='Your Phone Number' id=""  className='inputField' {...register("phone", {required:true})}/>
            {errors.phone?.type === 'required' && <p className='error'>Phone Number is required</p>}

            <label htmlFor="" className='flex w-[80%] mx-auto font-bold'>Gender:</label>
            <select className='inputField date' {...register("gender", {required:true})}>
                <option disabled selected value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Custom">Custom</option>
                <option value="Rather not say">Rather not say</option>
            </select>
            {errors.gender?.type === 'required' && <p className='error'>Gender is required</p>}
            

            <label htmlFor="" className='flex w-[80%] mx-auto font-bold'>Ticket Type:</label>
            <select className='inputField date' {...register("ticketType", {required:true})}>
                <option disabled selected value="">Ticket</option>
                <option value="Early Bird">Early Bird</option>
                <option value="Regular">Regular</option>
                <option value="Exclusive">Exclusive</option>
            </select>
            {errors.ticketType?.type === 'required' && <p className='error'>Type of Ticket is required</p>}


            <label htmlFor="" className='flex w-[80%] mx-auto font-bold'>Date of Birth:</label>
            <input type="text" 
                   name="" id=""   className='inputField date' {...register("dob", {required:true})}/>
            {errors.dob?.type === 'required' && <p className='error'>Date of Birth is required</p>}

            <div className='flex justify-center mt-4'>

            <button type="submit" className='bg-[#f4a299] w-[200px] text-center font-bold rounded-[8px] p-3 hover:bg-[#f4a266]'>Make A Reservation</button>
            </div>
        </form>
        <div className='flex items-center justify-center mt-6 max-w-[1200px] flex-wrap'>
          <RegTabs text={"26 Owo Street, Owo Estate Lekki"}  topic={"Address"} icon={<BsPinMap/>}/>
          <RegTabs text={"+234 703 6474 864"}  topic={"Call"} icon={<BsTelephoneForward/>}/>
          <RegTabs text={"Owonsikak@gmail.com"}  topic={"Email"} icon={<BsMailbox/>}/>
        </div>
    </section>
        {
          submitted && 
          <>
          <div className='qrBg'></div>
          <div className='qr'>
            <p className='text-[green] text-5 mt-5 font-bold'>Registration Successful</p>
            <p className='my-1 mb-5 w-[80%] text-center'>Please present this code to the front desk at the conference venue</p>
               <QRCode value="https://nsikakowo.xyz" />
               <p className='font-bold text-5 my-4'>{watch('fullname')}</p>
               <button onClick={()=> {
                 setsubmitted(false) ;
                 window.print();
               }} className='font-bold slider border-[2px] w-[200px] text-center text-[#fff] my-5 rounded-full p-1 '>Print</button>
          </div>
          </>
        }
    </>
  )
}

export default Register