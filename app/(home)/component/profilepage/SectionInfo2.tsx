"use client"
import { FaUser } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsUniversalAccess } from "react-icons/bs";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { useState ,useEffect } from 'react';
import InfoUser from './InfoUser';
import ProfisionalInfomation from './ProfisionalInfomation';
import DocumentSection from './DocumentSection';
import AcountSection from './AcountSection';
import HeaderInfoUser from "../HeaderInfoUser";
import cookies from "js-cookie"

interface props{
    infoData:{
      name:string,
      first_name:string,
      last_name:string,
      phone:string,
      email:string,
      image:string,

    }
  }


export default function SectionInfo({ infoData }: props) {
    const [mainSection,setMainSection]=useState("Personal Information")
        cookies.set("image",infoData?.image)

    return(
        <div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 '>
            <HeaderInfoUser title="Personal Information" icon={<FaUser className='text-2xl '/>} mainSection={setMainSection}/>
            <HeaderInfoUser title="Profitional Information" icon={<PiSuitcaseSimpleBold className='text-2xl '/>} mainSection={setMainSection} />
            <HeaderInfoUser title="Documents" icon={<IoDocumentTextOutline className='text-2xl '/> } mainSection={setMainSection} />
            <HeaderInfoUser title="Acount Access" icon={<BsUniversalAccess className='text-2xl '/> } mainSection={setMainSection} />
            </div>
            <div>
                {mainSection === "Personal Information"?
                    <InfoUser infoData={infoData}/>
                :mainSection === "Profitional Information"?
                    <ProfisionalInfomation/>
                :mainSection === "Documents"?
                    <DocumentSection/>
                :mainSection === "Acount Access"?
                    <AcountSection/>
                :null
                }
            </div>
        </div>
    )
}