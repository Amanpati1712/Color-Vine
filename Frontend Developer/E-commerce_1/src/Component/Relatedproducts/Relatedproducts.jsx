import React from 'react'
import './Relatedproducts.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const Relatedproducts = () => {
  return (
    <div>
        <div className="Related-products">
            <h3>Related Products</h3>
            <hr />
            <div className="products">
                {
                    data_product.map((item,i)=>{
                        return <Item key={i} id={item.id} name={item.name} new_price={item.new_price} old_price={item.old_price} image={item.image}  />
                    })
                }
            </div>
        </div>
      
    </div>
  )
}

export default Relatedproducts
