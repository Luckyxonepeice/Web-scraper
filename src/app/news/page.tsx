/* eslint-disable @next/next/no-img-element */
"use client"
import Link from 'next/link'
import React, { Suspense, useEffect, useState } from 'react'
import { revalidatePath } from 'next/cache'

type newType = {
    title:string,
    url:string,
    detail?:string,
    img_url?:string

}

export default function News() {

    const [newsData , setNewsData] = useState<newType[]>([])

    useEffect(()=>{
        
        (async function () {
            const data = await DataFetcher();
            setNewsData(data)
        })();
    },[])
  return (
    <div>
        <Suspense fallback={<h1>Loading...</h1>}>
            <div>  
                {
                    newsData.map( (checker:newType,index:number)=>{
                        return <Cards key={index} params={checker}></Cards>
                })
                }

            </div>
        
        </Suspense>
        
    </div>
    
    
  )
}


type cardProp =  {
    
    params:{
        title:string,
        url:string,
        detail?:string,
        img_url?:string

    }
    
}

function Cards({params}:cardProp){
    
    return(
        <div>
            <div className='grid grid-cols-2 grid-rows-2 w-6/12 h-4/12 m-auto mt-8'>
                <div className='row-start-1 row-span-2 flex'>
                    <img className='rounded-md items-center justify-center' src={params.img_url} alt="Anime Photo"></img>
                </div>
                <div className='ml-2'>
                    <Link href={`https://www.cbr.com/${params.url}`}>
                        <h1 className='text-center font-bold text-2xl hover:underline hover:cursor-pointer'>{params.title}</h1>
                    </Link>
                </div>
                <div className='ml-2'>
                    <h1 className='text-wrap text-center'>{params.detail}</h1>
                </div>
            </div>
        </div>
    )
}


const DataFetcher =async ()=>{

    const result = await fetch("http://localhost:3000/api/news");

    return result.json();
}