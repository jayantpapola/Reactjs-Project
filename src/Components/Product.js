import React from 'react'
import './Product.css'

function Product({productInfo, productImg, ProductLink}) 
{
  return (
    <div className='Amazon_Product'>
        <div className="product_info">
            <h2>{productInfo}</h2>
        </div>
        <div className="product_img">
            <img src={productImg} alt="amazon-product" />
        </div>
        <div className="product_link">
            <a href="#">{ProductLink}</a>
        </div>
    </div>
  )
}

export default Product