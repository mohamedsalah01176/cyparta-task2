"use client"
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import cookies from "js-cookie"
import { useRouter } from 'next/navigation';


export default function Nav({token}:{token:string}) {
  let image=cookies.get('image')
  let router=useRouter()


  function clearCookies(){
    cookies.remove('token')
    cookies.remove('image')
    // window.location.href='/'
    router.push('/')
  }
  return (
    <div className='flex justify-end items-center gap-10 py-10 px-20'>
    {token ?
    <>
      <IoIosNotificationsOutline className='text-4xl rounded-md p-1 bg-[#ccc]'/>
      <Link href={"/edieProfile"}>
        <Image src={image?image:'/image/cypartal logo 1@2x.png'} width={70} height={70}  className='w-[50px] h-[50px] rounded-full' alt='image profile'/>
      </Link>
      <button className='px-3 py-2 bg-red-600 text-white text-lg rounded-lg hover:bg-red-800 transition-all duration-300' onClick={()=>clearCookies()}>Logout</button>
    </>
      :
      <button className='px-3 py-2 mx-auto bg-green-600 text-white text-lg rounded-lg hover:bg-green-800 transition-all duration-300' onClick={()=>router.push('/')}>Login</button>
      }
    </div>
  )
}
