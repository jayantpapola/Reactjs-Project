import React , { useState } from 'react'
import './Navbar.css'

  


function Navbar() {

  const [mainMenu, setMainMenu]= useState('Amazon_Menu')
  const [innerMenu, setInnerMenu]= useState(false)
  const [innerMenuText, setInnerMenuText]= useState(false)
  const [innerMenudropdownArrow, setinnerMenudropdownArrow]= useState(false)
  const [sidebar, setSidebar] = useState('menu')
  const [sidebarSlide, setsidebarSlide] = useState('SideMenu')

  function mainMenuShow()
  {
    setMainMenu('Amazon_Menu change')
  }
  
  function mainMenuHide()
  {
    setMainMenu('Amazon_Menu')
  }
  function toggleInnerMenuDropdown()
  {
    innerMenu ? setInnerMenu(false) : setInnerMenu(true);
    innerMenuText ? setInnerMenuText(false) : setInnerMenuText(true);
    innerMenudropdownArrow ? setinnerMenudropdownArrow(false) : setinnerMenudropdownArrow(true);
  }


  function slideOut()
  {
    setSidebar('menu slideOut')
    
    setsidebarSlide('SideMenu tryy')
  }
  // function DeviceSection()
  // {
  //   setsidebarSlide('SideMenu tryy')
  //   setSidebar('menu slideOut')
  // }
  
  function BackToMenu()
  {
    setsidebarSlide('SideMenu')
    setSidebar('menu')
  }
  
  return (
    <div className='Navbar2'>

        <div className={mainMenu} >
          
          <div className="menu_acc" >
            <div className="menu_cross" onClick={mainMenuHide}>X</div>
            <i className="fa-solid fa-circle-user"></i><p id='menu_acc_p'>Hello, Jayant</p>
          </div>
          
          {/* INNER MENU */}


                      {/* SideBarMenu DEVICE SECTION  ECHO & ALEXA*/}
                      <div className={sidebarSlide}>
                        <div className='backToMainMenu' onClick={BackToMenu}>
                          <i className="fa-solid fa-arrow-left"></i>
                          <p>MAIN MENU</p>
                        </div>
                          <div className="menu">
                              <ul id='oneTime'>
                                  <li className='menu_heading'><h3>Echo & Alexa</h3></li>
                                  <li className='menu_list' >All-new Echo Dot(4th Gen)</li>
                                  <li className='menu_list'>Echo Dot (3rd Gen)</li>
                                  <li className='menu_list'> Echo Show 8</li>
                                  <li className='menu_list'>All-new Echo (4th Gen)</li>
                                  <li className='menu_list'>Echo Show 5</li>
                                  <li className='menu_list'> Echo Studio</li>
                                  <li className='menu_list'>All-new Echo Show 10</li>
                                  <li className='menu_list'>See all devices with Alexa</li>
                              </ul>
                              <ul>
                                  <li className='menu_heading'><h3>content & resources</h3></li>
                                  <li className='menu_list' >Meet Alexa</li>
                                  <li className='menu_list'>Alexa Skills</li>
                                  <li className='menu_list'>Alexa App</li>
                                  <li className='menu_list'>Alexa Smart Home</li>
                                  <li className='menu_list'>Amazon Prime Music</li>
                              </ul>
                          </div>
                      </div>
                    
          <div className='main_menu'>
              <div className={sidebar}>
                <ul>
                  <li className='menu_heading'><h3>Trending</h3></li>
                  <li className='menu_list'>Best Sellers</li>
                  <li className='menu_list'>New Releases</li>
                  <li className='menu_list'>Movers and Shakers</li>
                </ul>
              </div>
              <div className={sidebar}>
                <ul>
                  <li className='menu_heading'><h3>Digital Content And Devices</h3></li>
                  <li className='menu_list' onClick={slideOut}>Echo & Alexa<i className="fa-solid fa-angle-right"></i></li>
                      
                  <li className='menu_list' onClick={slideOut}>Fire Tv<i className="fa-solid fa-angle-right"></i></li>
                  <li className='menu_list' onClick={slideOut}>Kindle E-Readers & eBooks<i className="fa-solid fa-angle-right"></i></li>
                  <li className='menu_list' onClick={slideOut}>Audible Audiobooks<i className="fa-solid fa-angle-right"></i></li>
                  <li className='menu_list' onClick={slideOut}>Amazon Prime Video<i className="fa-solid fa-angle-right"></i></li>
                  <li className='menu_list' onClick={slideOut}>Amazon Prime Music<i className="fa-solid fa-angle-right"></i></li>
                </ul>
              </div>
              <div className={sidebar}>
                <ul>
                  <li className='menu_heading'><h3>Shop By Department</h3></li>
                  <li className='menu_list' onClick={slideOut}>Mobiles, Computers<i className="fa-solid fa-angle-right"></i></li>
                  <li className='menu_list' onClick={slideOut}>TV, Appliances, Electronics<i className="fa-solid fa-angle-right"></i></li>
                  <li className='menu_list' onClick={slideOut}>Men's Fashion<i className="fa-solid fa-angle-right"></i></li>
                  <li className='menu_list' onClick={slideOut}>Women's Fashion<i className="fa-solid fa-angle-right"></i></li>
                    <div className={innerMenu ? "inner_menu dropdown" : "inner_menu "}>
                        <ul>
                          <li className='menu_list' onClick={slideOut}>Home, Kitchen, Pets<i className="fa-solid fa-angle-right"></i></li>
                          <li className='menu_list' onClick={slideOut}>Beauty, Healthy, Grocery<i className="fa-solid fa-angle-right"></i></li>
                          <li className='menu_list' onClick={slideOut}>Sports, Fitness, Bags, Luggage<i className="fa-solid fa-angle-right"></i></li>
                          <li className='menu_list' onClick={slideOut}>Toys, Baby Products, Kids's Fashion<i className="fa-solid fa-angle-right"></i></li>
                          <li className='menu_list' onClick={slideOut}>Car, Motorbike, Industrial<i className="fa-solid fa-angle-right"></i></li>
                          <li className='menu_list' onClick={slideOut}>Books<i className="fa-solid fa-angle-right"></i></li>
                          <li className='menu_list' onClick={slideOut}>Movies, Music and Video Games<i className="fa-solid fa-angle-right"></i></li>
                        </ul>
                        </div>
                  <li className='menu_list' id='SeeAll' onClick={toggleInnerMenuDropdown}>{innerMenuText ? "See Less" : "See All"}<i className={innerMenudropdownArrow ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"}></i></li>
                </ul>
                      
              </div>
              <div className={sidebar}>
                <ul>
                  <li className='menu_heading'><h3>Programs & Features</h3></li>
                  <li className='menu_list' onClick={slideOut}>Gift Cards & Mobile Recharge<i className="fa-solid fa-angle-right"></i></li>
                  <li className='menu_list'>Flight Tickets</li>
                  <li className='menu_list'>#FountItOnAmazon</li>
                  <li className='menu_list'>Clearnace Store</li>
                </ul>
              </div>
              <div className={`${sidebar} menu_settings`}>
                <ul>
                  <li className='menu_heading'><h3>Help & Settings</h3></li>
                  <li className='menu_list'>Your Account</li>
                  <li className='menu_list'>Customer Service</li>
                  <li className='menu_list'>Sign In</li>
                </ul>
              </div>
          </div>
          
        </div>

        <div className="navigations">

            <div className="nav_item" id='menuBtn' onClick={mainMenuShow}><b><i className="fa-solid fa-bars"></i> All</b></div>
            <div className="nav_item">Best Sellers</div>
            <div className="nav_item">Mobiles</div>
            <div className="nav_item">Customer Serivces</div>
            <div className="nav_item">Today's Deals</div>
            <div className="nav_item">Electronics</div>
            <div className="nav_item">Fashion</div>
            <div className="nav_item">Prime</div>
            <div className="nav_item">New Releases</div>

        </div>

        <div className="nav_blank"></div>

        <div className="Navbar_ad">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Dune/400x39-SWM_179._CB625522477_.jpg"/>
        </div>
    </div>

    
  )
  
}



export default Navbar