import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div>
      <div className="item">
       <Link to={`/Product/${props.id}`}  ><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
        <p>{props.name}</p>
        <div className="item-price">
            <div className="item-price-new">
                ${props.new_price}
            </div>
            <div className="item-price-old">

                 $ <del>{props.old_price}</del>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Item
