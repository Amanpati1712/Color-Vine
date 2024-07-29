import React, { useEffect, useState } from 'react'
import  "./Listproduct.css"
import cross_icon from '../../assets/cross_icon.png'
const Listproduct = () => {

const [allproduct,setAllproduct]=useState([])

const fetchproduct=async()=>{
 await fetch('http://localhost:4000/allproduct').then((res)=>res.json()).then((data)=>{setAllproduct(data)});
}

useEffect(()=>{
  fetchproduct();
},[])

const remove_Product=async(id)=>{
  console.log(id)
  await fetch("http://localhost:4000/removeproducts",{
    method: 'POST',
    headers: {
             Accept: "application/json",
             'Content-Type':"application/json",
    },
    body: JSON.stringify({id:id})
  });

  await fetchproduct();
    

}



  return (
    <div className='listproduct'>
     <h1>List-product</h1> 
     <div className="list-product-main">
      <p>Products</p>
      <p>Title</p>
      <p>Old-price</p>
      <p>New-price</p>
      <p>Category</p>
      <p>Remove</p>
     </div>
     <div className="listproduct-allproduct">
      <hr />
      {
        allproduct.map((product,index)=>{
            return <div key={index}     className="list-product-main">
            <img src={product.image} className='listproduct-icon'  alt="" />
            <p>{product.id}</p>
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img  onClick={()=>{remove_Product(product.id)}}  className='listproduct-remove-icon' src={cross_icon} alt="delete" />
            <h1 style={{backgroundColor:"red"}} onClick={()=>{remove_Product(product.id)}}>delete</h1>
            </div>
        })
      }
     </div>
    </div>
  )
}

export default Listproduct
