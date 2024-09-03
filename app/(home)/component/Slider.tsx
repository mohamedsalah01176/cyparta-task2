"use client"
import Image from 'next/image'
import { LuLayoutDashboard } from "react-icons/lu";
import { PiUsersThreeLight } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { ImCoinDollar } from "react-icons/im";
import { MdHolidayVillage } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
interface props{
    openSlider:any,
    setOpenSlider:any
}
export default function Slider({openSlider,setOpenSlider}:props) {
    const [open,setOpen]=useState<boolean>(false)

  return (
    <div className={`fixed bottom-0 ${openSlider ?'left-0 lg:left-[20px]':'left-[-160px] lg:-left-[320px]'} transition-all duration-500 h-[89vh]  md:h-[93vh] rounded-t-3xl bg-white shadowSlider max-w-[160px] md:max-w-[200px] lg:max-w-[320px] w-full flex flex-col items-center`}>
        <div className='absolute top-7 -right-[30px] bg-inherit p-2 group cursor-pointer' onClick={()=>setOpenSlider(!openSlider)} >
            <IoMdSettings className='text-2xl  group-hover:rotate-180 transition-all duration-500' />
        </div>
      <Image src="/image/cypartal logo 1@2x.png" alt="cypartal" width={150} height={150} className='mt-5 w-[120px] lg:w-[150px]'/>
      <ul className='list-none mt-5 text-center w-full overflow-hidden flex flex-col gap-2 lg:gap-4' >
        <Link href={"/dashboard"} className='flex items-center gap-1 cursor-pointer pl-5 md:pl-10 lg:pl-20 hover:bg-[#ec35352c]  hover:border-l-8  border-red-500  py-3 transition-all duration-300  group rounded-r-3xl'>
            <LuLayoutDashboard className='text-2xl lg:text-3xl transition-all duration-300 group-hover:text-red-600'/>
            <h2 className='text-lg lg:text-xl font-semibold group-hover:scale-90 transition-all duration-300  group-hover:text-red-600'>Dashboard</h2>
        </Link>
        <li className='flex items-center  cursor-pointer pl-5 md:pl-10 lg:pl-20 gap-2 hover:bg-[#ec35352c] py-3 transition-all duration-300  hover:border-l-8  border-red-500   group rounded-r-3xl' onClick={()=>setOpen(!open)} >
            <PiUsersThreeLight className='text-3xl transition-all duration-300  group-hover:text-red-600'/>
            <h2 className='lg:text-lg font-semibold group-hover:scale-90 transition-all duration-300  group-hover:text-red-600 '>Employee</h2>
            <IoIosArrowDown className={`text-2xl  transition-all duration-300  group-hover:text-red-600 ${open? 'opacity-1':"opacity-0"}`}/>
            <MdOutlineKeyboardArrowRight className={`text-2xl  transition-all duration-300  group-hover:text-red-600 ${!open ?'opacity-1':"opacity-0"}`} />
        </li>
        <li className={`${open?"block":"hidden"}` }>
            <ul className=' ml-6 '>
                <Link href={"/employee/profile"}  className='flex items-center gap-2 cursor-pointer pl-3 md:pl-10 lg:pl-20 hover:bg-[#ec35352c] py-1 transition-all duration-300 group rounded-r-3xl'> 
                    <FaRegUser className='text-xl lg:text-2xl group-hover:scale-90 transition-all duration-300  group-hover:text-red-600'/>
                    <h2 className='group-hover:scale-90 transition-all duration-300  group-hover:text-red-600'>Profile</h2>
                </Link>
                <Link href={"/employee/attendace"}  className='flex items-center gap-2 cursor-pointer pl-3 md:pl-10 lg:pl-20 hover:bg-[#ec35352c] my-1 py-2 transition-all duration-300 group rounded-r-3xl'>
                    <HiOutlineClipboardDocumentList className='text-xl lg:text-2xl group-hover:scale-90 transition-all duration-300  group-hover:text-red-600'/>
                    <h2 className='group-hover:scale-90 transition-all duration-300  group-hover:text-red-600'>Attendance</h2>
                </Link>
                <Link href={"/employee/tasks"}  className='flex items-center gap-2 cursor-pointer pl-3 md:pl-10 lg:pl-20 hover:bg-[#ec35352c] py-1 transition-all duration-300 group rounded-r-3xl'>
                    <BiTask className='text-xl lg:text-2xl group-hover:scale-90 transition-all duration-300  group-hover:text-red-600'/>
                    <h2 className='group-hover:scale-90 transition-all duration-300  group-hover:text-red-600'>Tasks</h2>
                </Link>
            </ul>
        </li>
        <Link href={"/payroll"}  className='flex items-center gap-1 cursor-pointer pl-5 md:pl-10 lg:pl-20 hover:bg-[#ec35352c]  hover:border-l-8  border-red-500  py-3 transition-all duration-300  group rounded-r-3xl'>
            <ImCoinDollar className='text-2xl lg:text-3xl transition-all duration-300 group-hover:text-red-600'/>
            <h2 className='text-lg lg:text-xl font-semibold group-hover:scale-90 transition-all duration-300  group-hover:text-red-600'>Payroll</h2>
        </Link>
        <Link href={"/haliday"}  className='flex items-center gap-1 cursor-pointer pl-5 md:pl-10 lg:pl-20 hover:bg-[#ec35352c]  hover:border-l-8  border-red-500  py-3 transition-all duration-300  group rounded-r-3xl'>
            <MdHolidayVillage className='text-2xl lg:text-3xl transition-all duration-300 group-hover:text-red-600'/>
            <h2 className='text-lg lg:text-xl font-semibold group-hover:scale-90 transition-all duration-300  group-hover:text-red-600'>Holidays</h2>
        </Link>
        <Link href={"/advnced"}  className='flex items-center cursor-pointer px-5 hover:bg-[#ec35352c]  hover:border-l-8  border-red-500  py-3 transition-all duration-300  group rounded-r-3xl'>
            <MdPayment className='text-3xl transition-all duration-300 group-hover:text-red-600'/>
            <h2 className=' lg:text-xl font-semibold group-hover:scale-90 transition-all duration-300  group-hover:text-red-600 w-full'>Advanced Payment</h2>
        </Link>
        

      </ul>
    </div>
  )
}
