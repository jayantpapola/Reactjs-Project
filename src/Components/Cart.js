import React from 'react'
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import SaleProductContext from '../Context/ProductAPI.js/SaleProductContext'
import './Cart.css'
import AddedItem from './AddedItem'

import basket, { total } from '../reducers/Basket'

export default function Cart() {
  // const SalePro = useContext(SaleProductContext)
  const SellingProduct = useSelector((state)=>state.cartFunction);
  const ProductInCart = SellingProduct.basket
  console.log(SellingProduct)
 
    const Subtotal = ProductInCart.reduce((total, item)=>
    { return parseFloat(item.saleProductPrice) + total}, 0);


  

  function check(val)
  {
    console.log(val)
    return(
      <AddedItem
          id={val.id}
          saleProductInfo ={val.saleProductInfo}
          saleProductImg ={val.saleProductImg}
          saleProductBestSeller ={val.saleProductBestSeller}
          saleProductStock ='In Stock'
          saleProductEligibility ={val.saleProductEligibility}
          saleProductPrice = {val.saleProductPrice}
          saleProductSize  ={val.saleProductSize}
    />
    )
    
    
  }

  return (
    <div className='Cart'>

        <div className="leftComponent">
          <div className="cartProductSection">
                <div className='headSection'>
                    <h1>Shopping Cart</h1>
                    <span>Deselect all items</span>
                </div>
          </div>
          <div className="addedProductArea">
                <p className='priceText'>Price</p>
          {ProductInCart.map(check)}
                <p className='cartTotal'>
                  Subtotal({ProductInCart.length} item): <sup>₹</sup>
                  <span className='price'><b>{Subtotal}</b></span>
                </p>
          </div>
        </div>

        <div className="rightComponent">
          <div className="subTotal">
             <div className="total">
                <p className='info'><i className="fa-solid fa-circle-info"> </i> 
                Add <span>₹8.00</span> of eligible items to your order
                to qualify for FREE Delivery.<span id='detail'>Details</span></p>
                <p className='priceTotal'>
                  Subtotal ({ProductInCart.length} item) : <sup>₹</sup>
                  <span className='price'><b>{Subtotal}</b></span>
                </p>
                <input type='checkbox'/>
             </div>
            
            <button>Proceed to Buy</button>
          </div>
        </div>

    </div>
  )
}
