import FieldUserInfo from "./FieldUserInfo";


interface props{
  infoData:{
    first_name:string,
    last_name:string,
    phone:string,
    email:string,  
  }
}
export default function InfoUser({infoData}:props) {
  return (
    <div >
        <FieldUserInfo title1="Frist Name" val1={infoData?.first_name} title2='last Name' val2={infoData?.last_name}/>
        <FieldUserInfo title1="Number Phone" val1={infoData?.phone} title2="Email Address" val2={infoData?.email}/>
        <FieldUserInfo title1="Date Of Birth" val1="No Found" title2="Matiral Status" val2="No Found"/>
        <FieldUserInfo title1="Gender" val1="No Found" title2="Nationality" val2="No Found"/>
        <FieldUserInfo title1="Addess" val1="No Found" title2="City" val2="No Found"/>
        <FieldUserInfo title1="State" val1="No Found" title2="Zip Code" val2="No Found"/>
        <div className=" relative" >
            <FieldUserInfo title1="Work's hours " val1="No Found" title2="Salary/Hour" val2="No Found"/>
            <div className="absolute top-4 right-0 md:right-[15%]">
                <h2 className="text-[#ccc] text-lg">Totale Salary</h2>
                <p className="text-lg mt-1">No Found</p>
            </div>
        </div>
 





    </div>
    
  )
}
