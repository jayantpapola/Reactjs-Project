import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import './Header.css'
import {  useDispatch, useSelector } from 'react-redux'
// import './Logo.png'



  var linkStyle = 
  {
    textDecoration: 'none',
    color :'white'
  }
export default function Header(head) {
  const [pop, setPop] = useState({display:'none'})
  const [black, setBlack] = useState({display:'none'})

function address()
{
  setPop({
    display:'block',
    display: 'flex'
  })
  setBlack({
    display:'block'
  })
}
function removeBlack()
{
  setPop({
    display:'none'
  })
  setBlack({
    display:'none'
  })
}

const [category, setCategory] = useState('All')




const SellingProduct = useSelector((state)=>state.cartFunction);
        const ProductInCart = SellingProduct.basket

  return (
    
    <div className='NavBar'>

          
            <div className="Logo">
              <Link to={'/'}>
                <img id='logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'></img>
              </Link>
            </div>


           

            {/* ADDRESS POP UP */}
            <div className="addressPopUp" style={pop} >
            <div className="blackTint" style={black} onClick={removeBlack}></div>
              <div className="popUp">
                <div className='popUpHeading'>
                  <p>Choose Your Location</p>
                </div>
                <div className="popContent">
                  <span>Select a delivery location to
                     see product availability and delivery options</span>
                    <div  className='address'>
                    <b>Jayant Papola</b> s-4, B-block AVYU appartment,895-c/26-A, ward no.8 ,
                     Mehrauli, NEW DELHI DELHI 110030
                     <span id='default'>Default address</span>
                     </div>
                  <p>Add an address or pick-up point</p>
                  <p id='or'>or enter an Indian pincode</p>
                  <div className="pincode">
                    <input type="text" name='pincode'/><button>Apply</button>
                  </div>
                </div>
              </div>
            </div>
          
          
          <div className="address" onClick={address}>
            <small id='small_address'>Deliver to Jayant</small>
            <p id='select_address'><i className="fa-solid  fa-location-dot"></i> New Delhi 110030</p>
          </div>

          <div className="searchBar" >
            <div id='search_all_sec'>
                <p><select id='search_select' value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <option>All</option>
                    <option>All</option>
                    <option>All</option>
                    <option>All</option>
                    <option>All</option>
                    <option>All</option>
                    <option>All</option>
                    <option>All</option>
                    <option>All</option>
                    <option>All</option>
                  </select>
                </p>
                
            </div>
            <input type='text' id='searchBar' placeholder='Search Here'/>
            <div id='search_icon'><i className="fa-solid fa-magnifying-glass"></i></div>
          </div>

          <div className="country_region">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1350px-Flag_of_India.svg.png" alt="Indian-flag" />
            <i className="fa-solid fa-caret-down"></i>
            <div className="lang_dropdown">

              <div className="selected_lang">
                <p id='radio_btn'><input type="radio"  name='lang'/>English - EN</p>
              </div>
              <div id="lang_hr"/>
              <div className="lang_options">
                <p id='radio_btn'><input type="radio" name='lang'/>हिन्दी - HI</p>
                <p id='radio_btn'><input type="radio" name='lang'/>हिन्दी - HI</p>
                <p id='radio_btn'><input type="radio" name='lang'/>हिन्दी - HI</p>
                <p id='radio_btn'><input type="radio" name='lang'/>हिन्दी - HI</p>
                <p id='radio_btn'><input type="radio" name='lang'/>हिन्दी - HI</p>
                <p id='radio_btn'><input type="radio" name='lang'/>हिन्दी - HI</p>
                <p id='radio_btn'><input type="radio" name='lang'/>हिन्दी - HI</p>
              </div>
              <div id="lang_hr"/>
              <div className="changeRegion">
              <p ><img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1350px-Flag_of_India.svg.png" alt="Indian-flag" /> 
               You are shopping on Amazon.in </p>
               <a href="#">Change Country/Region</a>
              </div>
              
            </div>
          </div>

          <div className="Account_section">

              <div className="acc_sec sec1" >
                <small id='small_sec'>Hello, Jayant</small>
                <b id='med_sec'>Account & Lists <i className="fa-solid fa-caret-down"></i></b>
                <div className="account_dropdown">
                  <div className="account_dropdown_sec">
                    <ul>
                      <h4>Your Lists</h4>
                      <li id='shopping'>Shopping List</li>
                      <li>Create a Wish List</li>
                      <li>Wish from Any Website</li>
                      <li>Baby Wishlist</li>
                      <li>Discover Your Style</li>
                      <li>Explore Showroom</li>
                    </ul>
                  </div>
                  <div className="account_dropdown_sec sec2">
                  <ul>
                      <h4>Your Account</h4>
                      <li>Your Orders</li>
                      <li>Your Wish List</li>
                      <li>Your Recommendations</li>
                      <li>Your Prime Membership</li>
                      <li>Your Prime Video</li>
                      <li>Your Subscribe & Save Items</li>
                      <li>Membership & Subscription</li>
                      <li>Your Gift Card & Balance</li>
                      <li>Your Business Account</li>
                      <li>Your Seller Account</li>
                      <li id='shopping'>Manage Your Content And Devices</li>
                      <li>Switch Account</li>
                      <li>Sign Out</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="acc_sec sec2">
                <small id='small_sec'>Returns</small>
                <b id='med_sec'>& Orders</b>
              </div>
              
              <div className="acc_sec sec3">
                <Link to={'/Cart'} style={linkStyle}>
                  <i className="fa-solid fa-2x fa-cart-shopping"></i>
                  <span id='itemsInCart'>{ProductInCart.length}</span>
                </Link>
              </div>
              

          </div>

      </div>
  )
}
