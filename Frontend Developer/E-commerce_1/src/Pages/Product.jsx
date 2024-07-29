import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../Component/breadcrumb/Breadcrumb'
import Productdisplay from '../Component/ProductDisplay/Productdisplay'
import Description from '../Component/Description/Description'
import Relatedproducts from '../Component/Relatedproducts/Relatedproducts'

const Product = () => {
const {all_product}=useContext(ShopContext)
const {productId}=useParams()   //Get the user id from the all_product from url

const product=all_product.find((e)=>e.id===Number(productId))
 return (
    <div>

      <h1>
        <Breadcrumb product={product} />
        <Productdisplay product={product} />
        <Description/>
        <Relatedproducts/>
      </h1>
      
    </div>
  )
}

export default Product
