'use client'

import React, { useEffect, useState } from 'react'

const data = {
    images:{
        "image_url":""
    },
    title:"Dragon Ball Z"
}

export default function Top({url}:{url:any}) {

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
        const result = await fetch(url);
        const val = await result.json();
        return val['data'];
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

    const img_loc = data["images"]["jpg"]["image_url"];
    return <div className='h-60 min-w-52 bg-black snap-center mb-0 hover:drop-shadow-md'>
            <img className="h-3/4 w-full" src={img_loc} alt='Anime Front Image'></img>
            <h1 className='text-white text-center text-sm'>{data.title}</h1>
    </div>
}


