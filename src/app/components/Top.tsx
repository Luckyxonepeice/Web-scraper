'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from "../../../public/images/logo.jpg"



const data = {
    images:{
        "image_url":""
    },
    title:"Dragon Ball Z"
}

export default function Top() {

    const [topData, setTopData]= useState([]);
    useEffect(()=>{        
        (
            async function(){
                const data = await fetchData();
                setTopData(data);
            }
        )()

    },[])

    async function fetchData(){

        const result = await fetch('http://localhost:3000/api/details',{cache:'force-cache'});
        return await result.json();
    }
  return (
      <div className='w-3/4 h-full flex flex-row gap-6 overflow-x-auto flex-nowrap flex-none snap-mandatory snap-x mx-auto mt-10'>

        {
            topData.map( (val:any)=>{
                return <Card key={val.mal_id} data={val}/>
            })
        }


      </div>
  )
}

function Card({data}:{data:any}){

    console.log(data);
    return <div className='h-60 min-w-52 bg-black snap-center '>
        <Image src={logo} alt='Anime Front Image'></Image>
        <h1 className='text-white'>{data.title}</h1>
    </div>
}


