
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import img from '../assets/logonew.png';


function Header() {
  return (
    <header className='bg-amber-950 shadow-md'>
         <div className='flex justify-between items-center max-width-6xl mx-auto p-3'>
    <Link to='/'>
    <img src={img} alt="logo" className='flex flex-wrap h-16
    w-20' />
    </Link>
    <ul className='flex gap-4'>
    <Link to='/'><li className='hidden sm:inline text-zinc-50 hover:underline'>OVERVIEW</li></Link>
    <Link to='/amenities'><li className='hidden sm:inline text-zinc-50 hover:underline'>AMENITIES</li></Link>
    <Link to='/gallery'><li className='hidden sm:inline text-zinc-50 hover:underline'>GALLERY</li></Link>
    <Link to='/floor-plan'><li className='hidden sm:inline text-zinc-50 hover:underline'>FLOOR PLAN</li></Link>
    <Link to='/location'><li className='hidden sm:inline text-zinc-50 hover:underline'>LOCATION</li></Link>
    <Link to='/contact'><li className='sm:inline text-zinc-50 hover:underline'>CONTACT</li></Link>
    </ul>

    <div className='p-3 rounded-lg flex items-center'>
    <FaWhatsapp className='text-green-800' />
    <h3 className='text-zinc-50'>+918790878787</h3>
    </div>
    </div>
    </header>
  )
}

export default Header