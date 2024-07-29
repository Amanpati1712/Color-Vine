import React, { useEffect, useState } from 'react'
import './Newcollection.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'

const Newcollection = () => {

  // const [new_collection,setNew_collection]=useState([])
  // useEffect(()=>{
  //   fetch("http://localhost:4000/Newcollection")
  //   .then((res)=>res.json()).then((data)=>setNew_collection(data))
  // },[])

  
  return (
    <div>
      <div className="New-collection">
        <h1>New-Collection</h1>
        <hr />
        <div className="collection">
            {
                new_collection.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} new_price={item.new_price} old_price={item.old_price} image={item.image} />
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Newcollection
