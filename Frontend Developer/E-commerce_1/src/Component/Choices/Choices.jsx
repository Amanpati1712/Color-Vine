import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import './Choices.css'

const Choices = () => {

const [choices,setChoices]=useState({
  name:"",
})

const [products ,setProducts]=useState([])

const senddata=(e)=>{
  setChoices({...choices,[e.target.name]:e.target.value})
}

const getdata=async(data)=>{
  console.log("aman lala",data)
  
   await fetch(`http://localhost:4000/allproduct/${data}`)
    .then((res)=>res.json()).then((datas)=>{setProducts(datas)
    })
}




  return (
    <div>
      
      
      {/* <h1>{choices.name}</h1> */}
      
      <div className="input">
      <h1>Product title</h1>
      <div className="input-field">
      <input value={choices.name} type="text" name='name' placeholder='type here' onChange={senddata}/>
      <button style={{color:"white", backgroundColor:"black", width:"100px",height:"40px"}} onClick={()=>{
        getdata(choices.name)
      }}>Click here</button>
      </div>
      </div>

       <div className="choices">
       {
          products.map((item,i)=>{
         
              return <Item  key={i} id={item.id} name={item.name} new_price={item.new_price} old_price={item.old_price} image={item.image} />
            
            
          })
        }
       </div>
    </div>
  )
}

export default Choices
