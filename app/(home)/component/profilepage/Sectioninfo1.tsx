"use client"
import Image from 'next/image';
import Link from 'next/link'
import { LiaEditSolid } from 'react-icons/lia';
import { MdOutlineMailOutline } from "react-icons/md";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import EditeInfoPage from './EditeInfoPage';
import {  useState } from 'react';

interface props{
    infoData:{
        name:string,
        email:string,
        image:string,
    }
  }

export default function Sectioninfo1({infoData}:props) {
    const [openEditeSection,setOpenEditeSection]=useState(false)
  return (
    <div className='flex flex-col  justify-end items-center sm:items-end sm:flex-row  sm:justify-between relative mb-7'>
          <div className='flex flex-col md:flex-row gap-3 items-center '>
              <Image src={infoData.image?infoData.image:"/image/cypartal logo 1@2x.png"} className='rounded-md' alt="cypartal" width={130} height={130} />
            <div>
              <h2 className='text-lg lg:text-2xl font-bold'>{infoData.name}</h2>
              <p className=' my-1 flex gap-2 items-center'><PiSuitcaseSimpleBold className='text-lg lg:text-2xl'/>Not Found</p>
              <p className=' my-1 flex gap-2 items-center'><MdOutlineMailOutline className='text-lg lg:text-2xl'/>{infoData.email}</p>
            </div> 
          </div>
          <button onClick={()=>setOpenEditeSection(!openEditeSection)} className='bg-black w-fit text-end py-2 px-3 text-white rounded-lg   hover:bg-slate-700 transition-all duration-300 flex items-center mt-5 mr-[0%] sm:mr-[10%]'><LiaEditSolid className='text-lg lg:text-3xl'/><p>Edit Profile</p></button>
          {openEditeSection?
            <EditeInfoPage openEditeSection={openEditeSection} setOpenEditeSection={setOpenEditeSection} infoData={infoData}/>
            :
            null
          }
          
        </div>
  )
}
