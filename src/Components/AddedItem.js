import React, {useContext, useStater} from 'react'
import { useSelector } from 'react-redux';
import './AddedItem.css'
import { useDispatch } from 'react-redux';
import SaleProductContext from '../Context/ProductAPI.js/SaleProductContext'
import { removeFromBasket } from '../action/addToBasket';


export default function AddedItem({
  id,
  saleProductInfo,
  saleProductImg ,
  saleProductBestSeller ,
  saleProductStock ,
  saleProductEligibility ,
  saleProductPrice ,
  saleProductSize}) {

    const SellingProduct = useSelector((state)=>state.cartFunction);
  const ProductInCart = SellingProduct.basket
    
    
    const dispatch = useDispatch();

        


  // const SalePro = useContext(SaleProductContext)
  return (
    <div className='cartProduct' key={id}>
            <div className="checkbox">
              <input type="checkbox"/>
            </div>
            <img src={saleProductImg} alt="Pendrive"/>
            <div className="cartProductInfo">
                <p className="cartProductName">
                  {saleProductInfo}
                </p>
                <p className={saleProductBestSeller}><span>#1 Bestseller</span> in Computers & Accessories</p>
                <p className='stockAvailability'>{saleProductStock}</p>
                <p className='shippingEligiblity'>{saleProductEligibility}</p>
                <p><img src='https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png' alt="" /></p> 
                <div className="giftCheckbox">
                    <input type="checkbox"/> This will be a gift <span>Learn More</span>
                </div>
                <p className='cartProductSize'>
                  <b>Size: </b><span>{saleProductSize}</span>
                </p>
                <div className='cartProductFooter'>
                  <button className='qtyBtn'>Qty:
                    <select>
                      <option value={1}/>
                      <option value={2}/>
                      <option value={3}/>
                      <option value={4}/>
                      <option value={5}/>
                      <option value={6}/>
                      <option value={7}/>
                      <option value={8}/>
                      <option value={9}/>
                      <hr></hr>
                      <option value={10}/>
                    </select>
                  </button>
                  <div><p onClick={()=>dispatch(removeFromBasket(id))}>Delete</p></div>
                  <div><p>Save for later</p></div>
                  <div><p>See more like this</p></div>
                </div>
               
            </div>
            <div className="addedCartProductPrice">
              <b><sup>₹</sup>{saleProductPrice}</b>
            </div>
    </div>
  )
}
