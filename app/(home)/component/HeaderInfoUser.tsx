"use client"

interface props{
  title:string,
  icon:any,
  mainSection:any
}

export default function HeaderInfoUser({icon,title,mainSection}:props) {
  return (
    <button className='flex gap-1 items-center hover:text-red-600 transition-all duration-500 p-3 relative overflow-hidden group' onClick={()=>mainSection(title)} >
             {icon} 
              <p className=' lg:text-lg font-semibold'>{title}</p>
              <div className='absolute w-full h-1 bg-red-600 bottom-[-0px] left-[-100%] rounded-lg group-hover:left-0 ransition-all duration-500 '></div>
    </button>
  )
}
 