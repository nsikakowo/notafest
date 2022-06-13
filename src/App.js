import './App.css';
import { About, Register, Schedule, Seats, Slider, Speaker, Tickets } from './components';

function App() {
  return (
    <div className='font-Montserrat'>
       <Slider/>
       <About/>
       <Seats/>
       <Speaker/>
       <Schedule/>
       <Tickets/>
       <Register/>
       <footer className='w-full text-center py-2'>
         &copy; Copyright 2022 - NATOFEST by Nsikak Owo
       </footer>
    </div>
  );
}

export default App;
