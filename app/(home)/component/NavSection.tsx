import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface props{
    path:string
}

export default function NavSection({path}:props) {
    return (
        <>
            {!path.includes("employee")?
                <div className='lg:text-xl mb-4'>{path}</div>
                :
                <div className='lg:text-xl flex items-center gap-2 mb-4 '>{path.slice(0,7)} <MdOutlineKeyboardArrowRight className='text-4xl'/> {path.slice(9,)}</div>
            }
        </>
  )
}
