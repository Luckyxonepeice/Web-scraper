"use client"

import React from 'react'
import { FaSearch } from "react-icons/fa";

export default function Searchbar() {

  const handleClick = (e:any)=>{

  }
  
  return (
    <div>
      <input className=' h-8 w-3xl pl-2 rounded-md outline-none shadow-sm shadow-white' placeholder='SearhAnime...'></input>
      <button className='text-white ml-1' onClick={handleClick}><FaSearch></FaSearch></button>
    </div>
  )
}
