import React from 'react'
import './InnerProduct.css'

export default function InnerProduct({proImg, proDesc, proRate, proAmt, proPrice, proEtcInfo}) {
  return (
    <div className='InnerProduct'>
        <img src={proImg} alt="productImage" />
        <p className='productDescription'>{proDesc}</p>
        <p className='productRating'>{proRate}<span className='prodcutAmount'>{proAmt}</span></p>
        <p className="productPrice"><sup>₹</sup>{proPrice}</p>
        <p className="extraInfo">{proEtcInfo}</p>
    </div>
  )
}
