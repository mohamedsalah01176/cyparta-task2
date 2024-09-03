"use client"
import { Alert, Snackbar, useTheme } from '@mui/material'
import  cookies  from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useState } from "react"

export default  function EditeInfoPage({openEditeSection,setOpenEditeSection,infoData}:any){
    const [email,setEmail]=useState<string>(infoData.email)
    const [fristName,setFristName]=useState<string>(infoData.first_name)
    const [lastName,setLastName]=useState<string>(infoData.last_name )
    const [messageError,setMessageError]=useState<string>("") 
   
    
    let baseUrl=String(process.env.NEXT_PUBLIC_REST_BASEURL)
    let token=cookies.get('token')
    
    let router=useRouter()
    let regExpretionEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    function vaildEmail(){
        return regExpretionEmail.test(email)
    }


    async function handleUpdate(e:any){
    e.preventDefault()
    let body={
        first_name:fristName,
        last_name:lastName,
        email,
        phone:null, 
        bio:null
    }
    try{
        
        let res = await fetch(`${baseUrl}/profile/`,{method:"PATCH",
        headers: {
            'Authorization':`Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(body)
        }
    )
    let data=await res.json()
    if( vaildEmail() === true && lastName.length >= 3 && lastName.length >=3 ){
        setTimeout(()=>{
            // setOpenEditeSection(!openEditeSection)
            window.location.reload()
        },1500)
    }
    else{
        if(  fristName.length <3 || lastName.length <3){
            setMessageError("Please enter first name or last name  ")
        }
        else if(vaildEmail()=== false){
            setMessageError("Please enter valid email")
        }
    }
    handleClick()
    }
    catch(error){
        console.log(error)
    }
}


    const [openSnackBar, setOpenSnackBar] = useState(false);

    const handleClick = () => {
        setOpenSnackBar(true);
    };
    
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
        return;
    }
        setOpenSnackBar(false);
    };
    
    return(

        <div className="w-full h-full bg-[#cccccc6f] fixed  top-[50%] left-[50%]  -translate-x-[50%] -translate-y-[50%] z-30 flex justify-center items-center">
            <div className=' bg-white py-10 px-7 max-w-[600px] w-[100%]  grid grid-cols-1 md:grid-cols-2 gap-3 rounded-lg relative'>
                <button onClick={()=>setOpenEditeSection(!openEditeSection)} className="absolute top-4 right-4 font-semibold text-2xl cursor-pointer hover:text-red-600 hover:rotate-180 transition-all duration-500  ">X</button>
                <div>
                    <label htmlFor="frist" className="text-xl" >Frist Name </label>
                    <input id="frist" value={fristName}  type="text" placeholder="your frist Name" className="placeholder:text-[#ddd] text-xl p-2 border-2 rounded-lg w-full hover:border-[#000] transition-all duration-300  mb-2 mt-1 focus:border-2 focus:border-black outline-none" onChange={(e)=>setFristName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="last" className="mb-1 text-xl ">Last Name</label>
                    <input id="last" value={lastName}  type='text' placeholder='your LastName' className="placeholder:text-[#ddd] mt-1 text-xl outline-none flex-grow p-2 border-2 rounded-lg w-full hover:border-[#000] transition-all duration-300 focus:border-2 focus:border-black " onChange={(e)=>setLastName(e.target.value)}  />
                </div>
                <div>
                    <label htmlFor="email" className="text-xl" >Email </label>
                    <input id="email" value={email}  type="email" placeholder="example@example.com" className="placeholder:text-[#ddd] text-xl p-2 border-2 rounded-lg w-full hover:border-[#000] transition-all duration-300  mb-2 mt-1 focus:border-2 focus:border-black outline-none" onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <button type="submit" onClick={handleUpdate} className="bg-black py-3 px-7  text-white text-xl font-semibold hover:scale-110 transition-all duration-300  rounded-lg col-span-2 w-fit  mt-5 mx-auto ">Update</button>
            </div>
            <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical:"top", horizontal:"right" }}>
        <Alert
          onClose={handleClose}
          severity={messageError !== ""?"error": "success"}
          variant="filled"
          sx={{ width: '100%' }}
          
        >
          {messageError !== ""?messageError:"update email"}
        </Alert>
      </Snackbar>
        </div>


    )
}