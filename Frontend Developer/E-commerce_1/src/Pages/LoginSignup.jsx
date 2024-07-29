import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import { useNavigate } from 'react-router-dom'
const LoginSignup = () => {

const [state,setState]=useState("login")
const [formdata,setformdata]=useState({
  username:"",
  email:"",
  password:""
})
const takeuserinput=(e)=>{
  setformdata({
    ...formdata,[e.target.name]:e.target.value
  })
  // console.log(formdata)
}

const navigate = useNavigate();







const signup=async()=>{
  console.log(formdata)
  const {email,password,username}=formdata
  if(email==="" && username==="" && password===""){
       navigate("/login")
  }
 else{
  // console.log("signup success",formdata)
  let resp;
  await fetch("http://localhost:4000/signup",{
    method:"POST",
    headers: {
      Accept: "application/form-data",
      'Content-Type':"application/json"
  },
  body: JSON.stringify({email,username,password})
  }).then((res)=>res.json()).then((data)=>{resp=data})
  console.log(resp)
  if(resp.success == "true"){
    localStorage.setItem("auth-token",resp.token)
    // navigate("/")
    setState('login')
  }
  else{
    alert("error is here")
  }
 }
}



const login = async () => {
  console.log("signup success", formdata);
  
  try {
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formdata)
    });
    
    const data = await response.json();
    console.log(data);
    
    if (data.success === "true") {
      localStorage.setItem("auth-token", data.token);
      navigate("/");
    } else {
      alert(data.error || "An error occurred");
    }
  } catch (error) {
    console.error("Error during fetch:", error);
    alert("An error occurred during login");
  }
};

//  update the   data for API request...


  




return (
    <div>
      <div 

      
      
      
      className="Login">
       
       <div data-aos="zoom-in"
       data-aos-delay="20"
    data-aos-duration="900"
    data-aos-easing="ease-in-out" className="Login-container">
         <h1>{state}</h1>
       <div className="inputs">
        {state==="signup"?<input required value={formdata.username} onChange={takeuserinput} type="text" placeholder='Enter your name' name='username'/>:<></>}  
          <input required value={formdata.email}  onChange={takeuserinput} type="email" name="email"  placeholder='Enter your Email' />
          <input required value={formdata.password}  onChange={takeuserinput} type="password" name="password"  placeholder='Enter your password' />
          
          <div className="continue">
            <button onClick={()=>{state==="login"?login():signup()}}>Continue</button>
          </div>
          {
            state==="signup"?<p>Already have an account ? <span onClick={()=>{setState("login")}} style={{color:"red"}}>Login here</span>
            </p>:<p>Create an new account ? <span onClick={()=>{setState("signup")}} style={{color:"red"}}>create</span>
            </p>
          }
           <div className="input-chek">
            <input type="checkbox" name="" id="" />
            <p>By continuing , i agree to the term of use & privacy policy.</p>

           </div>
          </div>
        
       </div>
      </div>
    </div>
  )
}


export default LoginSignup;
