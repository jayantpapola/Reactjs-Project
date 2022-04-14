import React, {useState} from 'react'
import './SaleProduct.css'
import {  useDispatch } from 'react-redux'
import { addToBasket } from '../action/addToBasket';

export default function SaleProduct(
    { 
     saleProductInfo,
     saleProductImg, 
     saleProductBestSeller, 
     saleProductStock,
     saleProductEligibility,
     saleProductPrice,
     saleProductSize
    }) {

        

        const [ addPopUp, setAddPopUp] = useState({})

        const dispatch = useDispatch();

        const AddingProduct = () =>
            {dispatch(
                addToBasket({
                    id: Math.random(),
                    saleProductInfo : saleProductInfo,
                    saleProductImg : saleProductImg, 
                    saleProductBestSeller : saleProductBestSeller, 
                    saleProductStock : saleProductStock,
                    saleProductEligibility : saleProductEligibility,
                    saleProductPrice : saleProductPrice,
                    saleProductSize : saleProductSize
                })
            ) 
            setAddPopUp({
                animationName:'showw'
            })
            setTimeout(()=>{
                setAddPopUp({})
            },600)
        }     
         
        

  return (
    <div className='SaleProduct' >
        <div className="addedPopUp" style={addPopUp}>
            <p>item added</p>
            </div>
        <div className="saleProductInfo">
            <h2>{saleProductInfo}</h2>
        </div>
        <div className="saleProductImg">
            <img src={saleProductImg} alt="amazon-product" />
        </div>
        <div className={saleProductBestSeller}>
            <span>#1 BestSeller</span>
        </div>
        <div className="saleProductStock">
            <p>{saleProductStock}</p>
        </div>
        <div className="saleProductEligibility">
            <p>{saleProductEligibility}</p>
        </div>
        <div className="saleProductPrice">
            <p><sup>₹</sup> <b>{saleProductPrice}</b></p>
        </div>
        <div className="saleProductSize">
            <p><b>Size: </b>{saleProductSize}</p>
        </div>
        <center>
            <button className='addToCartBtn' onClick={AddingProduct}>Add to cart</button>
        </center>
    </div>
  )
}
