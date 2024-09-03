import FeaturePage from '@/app/(home)/component/FeaturePage'
import { cookies } from 'next/headers'
import React from 'react'

export default function page() {
  let token:any=cookies().get('token')
  return (
    <>
    {token?.value?
      <div><FeaturePage/></div>
      :
      <>
      <p className='flex justify-center items-center text-3xl text-red-600 font-semibold h-screen'>NOT Found page you shoud go to login</p>
      </>
    }
    </>
  )
}
