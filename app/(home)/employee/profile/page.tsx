
import Sectioninfo1 from '../../component/profilepage/Sectioninfo1';
import SectionInfo2 from '../../component/profilepage/SectionInfo2';
import { cookies } from 'next/headers';


interface infoData{
  name:string,
  first_name:string,
  last_name:string,
  phone:string,
  email:string,
  image:string,

}


export default async function Profile() {
  let baseUrl=String(process.env.NEXT_PUBLIC_REST_BASEURL)


  let token:any=cookies().get('token')

  let res=await fetch(`${baseUrl}/profile/`,{method:"GET",
      headers:{
        'Authorization':`Bearer ${token?.value}`,
        'Content-Type': 'application/json' 
    },
    } 
    )
    let data:infoData=await res.json()
    
    


  return ( 
    <div className="">
        <Sectioninfo1 infoData={data}/>
        <div>
          <SectionInfo2 infoData={data} />
        </div>
    </div>
  )
}
