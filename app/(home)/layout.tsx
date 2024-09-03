"use client"
import React, { useEffect, useState } from 'react'
import Slider from './component/Slider'
import { usePathname, useRouter } from 'next/navigation'
import NavSection from './component/NavSection'
import Nav from './component/Nav'
import  Cookie  from 'js-cookie'



export default function Layout({children}:any) {
  let path=usePathname()
  const[openSlider,setOpenSlider]=useState(true)
  const[token,setToken]=useState('')
  useEffect(()=>{
      if (typeof window !== undefined) {
        let cookie=Cookie.get('token')
        setToken(cookie?cookie:'')
        }
  },[token])
  let router=useRouter()
    return (
      <>
        <Nav token={token}/>
          <Slider setOpenSlider={setOpenSlider} openSlider={openSlider}/>
        <div className={` ${openSlider?'ml-[170px] md:ml-[200px] lg:ml-[370px]':'ml-10'} transition-all duration-500 mt-[10px] mb-20 lg:pr-20`}>
          {path.includes("edieProfile")?
          null:
          <NavSection path={path.slice(1,)} />
          }
          {children}
        </div>
      </>

    )
  }