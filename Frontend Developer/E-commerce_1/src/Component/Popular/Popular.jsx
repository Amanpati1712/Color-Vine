import React, { useEffect, useState } from 'react'
import './Popular.css'

import  data_product from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
  // const [data_product ,setData_product]=useState([]);

// useEffect(()=>{
//   fetch("http://localhost:4000/popularinwomen")
//   .then((res)=>res.json()).then((data)=>setData_product(data))
// },[])


  return (
    <div>
      <div className="popular">
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="Popular-item">
           {
            data_product.map((item,i)=>{

                return <Item key={i}  id={item.id} name={item.name} new_price={item.new_price} old_price={item.old_price} image={item.image}/>

            })
           }
        </div>
      </div>
    </div>
  )
}

export default Popular
