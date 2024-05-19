import Link from 'next/link'
import React from 'react'
import { IoHomeSharp } from "react-icons/io5";
import logo from "../../../public/images/logo.jpg"
import Image from 'next/image';
import Searchbar from './Searchbar';
import { FaNewspaper } from "react-icons/fa6";


export default function Navbar() {
  return (
    <nav className='h-16 w-screen bg-slate-800'>
        <div className=' w-full h-full flex flex-col md:flex-row justify-around items-center'>
            <Image className= "w-20 rounded-lg" src={logo} alt="logo"></Image>
            <Link className="text-white text-center" href="/"><IoHomeSharp/> Home</Link>
            <Link className="text-white text-center" href="/news"><FaNewspaper/> News</Link>
            <Searchbar></Searchbar>
        </div>
    </nav>
  )
}
