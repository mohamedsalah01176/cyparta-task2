"use client"
import Image from "next/image";
import { useState } from "react";
import { RiEyeOffLine } from "react-icons/ri";
import { Alert, Snackbar, useTheme } from '@mui/material'
import { useRouter } from "next/navigation";
import cookies from "js-cookie"


export default function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [messageError,setMessageError]=useState("")

  let baseUrl=String(process.env.NEXT_PUBLIC_REST_BASEURL)

  let route=useRouter()



  async function handelLogin(e:any){
    e.preventDefault()
    let body={
      email,
      password
    }
    try{
      
      let res =await fetch(`${baseUrl}/login/`,{method:"POST",
        headers: {
          'Content-Type': 'application/json',
      },
      body:JSON.stringify(body)
      }
    )
    let data= await res.json()
      if(res.ok){
        setMessageError("")
        cookies.set("token",data.access)
        setTimeout(()=>{
          route.push('/dashboard')
        },1500)
      }
      else{
        setMessageError("Email or Password incorrect ")
  
      }
      handleClick()
    }
    catch(error){
      console.log(error)
    }
  }



  // snackbar from mui to show error for user 

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setOpen(false);
  };
  
  return (
    <div className="min-h-screen flex justify-center items-center gap-10 flex-col px-4">

      <Image src="/image/cypartal logo 1@2x.png" alt="cypartal" width={250} height={250}/>
      <form className=" p-4 max-w-[600px] w-[100%] ">
          <label htmlFor="email" className="text-xl" >Email Adress</label>
          <input id="email"  type="email" placeholder="example@example.com" className="placeholder:text-[#ddd] text-xl p-2 border-2 rounded-lg w-full hover:border-[#000] transition-all duration-300  mb-5 mt-1 focus:border-2 focus:border-black outline-none" onChange={(e)=>setEmail(e.target.value)} />
          <label htmlFor="pass" className="mb-1 text-xl ">Password</label>
          <input id="pass"  type='password' placeholder="********" className="placeholder:text-[#ddd] mt-1 text-xl outline-none flex-grow p-2 border-2 rounded-lg w-full hover:border-[#000] transition-all duration-300 focus:border-2 focus:border-black " onChange={(e)=>setPassword(e.target.value)}  />
        <button type="submit" onClick={handelLogin} className="bg-black py-3 px-4 w-[80%] text-white text-xl font-semibold hover:scale-110 transition-all duration-300  rounded-lg mx-[10%] mt-5 ">Login</button>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical:"top", horizontal:"right" }}>
        <Alert
          onClose={handleClose}
          severity={messageError !== ""?"error": "success"}
          variant="filled"
          sx={{ width: '100%' }}
          
        >
          {messageError !== ""?messageError:"email is correct"}
        </Alert>
      </Snackbar>

    </div>
  );
}
