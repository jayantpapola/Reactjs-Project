import React , {useState}  from 'react'
import './Footer.css'
import InnerProduct from './InnerProduct'
import { Scrollbars } from 'react-custom-scrollbars-2'



export default function Footer(props) {
    
    const [page,setPage] = useState('1')
    const [move, setMove] = useState({
        transform:'translateX(0%)'
    })

    function slideMove()
    {
       
        setMove({
            transform:'translateX(-100%)'
        })
       
        setPage('2')
        
    }
    function slideMoveBacwards()
    {
        
        setMove({
            transform:'translateX(0%)'
        })
        setPage('1')
    }

  return (
    <div className='Footer'>

        <div className="browsingHistoryProducts">
            <div className="browsingHistoryProductsHeading"><h1>Inspired by your browsing history</h1>Page {page} of 2</div>
            <div className="productSlider">
                <button className="prevBtn" onClick={slideMoveBacwards}><i className="fa-solid fa-angle-left"></i></button>
                
                {/* <Scrollbars style={{height:'500px',overflowX:'scroll',overflowX:'hidden',overflowY:'hidden'}} > */}
                <div className="slideShow" >
                    <div className='slideSection' style={move}>
                    <InnerProduct 
                    proImg='https://images-eu.ssl-images-amazon.com/images/I/81lTPWJ+QZL._AC_UL160_SR160,160_.jpg' 
                    proDesc='XPG ADATA GAMMIX D30 DDR4 8GB 
                    (1x8GB) 3200MHz U-DIMM Desktop 
                    Memory -AX4U320038G16A-SR30' 
                    proRate='⭐⭐⭐⭐' 
                    proAmt='1,463' 
                    proPrice='3,099.00' 
                    proEtcInfo='Get it by Sunday, April 3
                    FREE Delivery over ₹499. 
                    Fulfilled by Amazon.'
                    />

                    <InnerProduct 
                    proImg='https://images-eu.ssl-images-amazon.com/images/I/61yZLAaNbwL._AC_UL160_SR160,160_.jpg' 
                    proDesc='Corsair CV550, CV Series, 80 Plus Bronze Certified, 550 Watt Non-Modular Power Supply - Black' 
                    proRate='⭐⭐⭐⭐' 
                    proAmt='2,450' 
                    proPrice='3,813.00' 
                    proEtcInfo='Get it by Friday, April 8
                    FREE Delivery over ₹499. Fulfilled by Amazon.'
                    />

                    <InnerProduct 
                    proImg='https://images-eu.ssl-images-amazon.com/images/I/51qXHU7XItL._AC_UL160_SR160,160_.jpg' 
                    proDesc='Corsair Vengeance LPX 8GB (1x8GB) DDR4 3200MHZ C16 Desktop RAM (Black)' 
                    proRate='⭐⭐⭐⭐' 
                    proAmt='1,314' 
                    proPrice='3,069.00 ' 
                    proEtcInfo='FREE Delivery
                    Usually dispatched in 4 to 5 days.'
                    />

                    <InnerProduct 
                    proImg='https://images-eu.ssl-images-amazon.com/images/I/61ulVH4cRwL._AC_UL160_SR160,160_.jpg' 
                    proDesc='DEEPCOOL RF120 FS 120mm Case Fan 3-in-1 Pack - (DP-FLED3-RF120FS-3P)' 
                    proRate='⭐⭐⭐⭐' 
                    proAmt='760' 
                    proPrice='1,416.00' 
                    proEtcInfo='Get it by Sunday, April 3
                    FREE Delivery over ₹499. Fulfilled by Amazon.'
                    />

                    <InnerProduct 
                    proImg='https://images-eu.ssl-images-amazon.com/images/I/A1IbPGy732L._AC_UL160_SR160,160_.jpg' 
                    proDesc='Asus GeForce GT 710 2GB GDDR5 HDMI VGA DVI Graphics Card Graphic Cards GT710-SL-2GD5-CSM' 
                    proRate='⭐⭐⭐⭐' 
                    proAmt='3,271' 
                    proPrice='4,998.00' 
                    proEtcInfo='Get it by Friday, April 8
                    FREE Delivery over ₹499. Fulfilled by Amazon.'
                    />

                    <InnerProduct 
                    proImg='https://images-eu.ssl-images-amazon.com/images/I/81zTChlbPHL._AC_UL160_SR160,160_.jpg' 
                    proDesc='Cooler Master MWE 550 Bronze V2 230v, 80 Plus Bronze Certified, Non-Modular Power Supply – Black' 
                    proRate='⭐⭐⭐⭐' 
                    proAmt='1,019' 
                    proPrice='3,999.00' 
                    proEtcInfo='Get it by Sunday, April 3
                    FREE Delivery over ₹499. Fulfilled by Amazon.'
                    />
                    </div>
                    <div className='slideSection' style={move}>
                    <InnerProduct 
                    proImg='https://images-eu.ssl-images-amazon.com/images/I/51eBmm2WniL._AC_UL160_SR160,160_.jpg' 
                    proDesc='Corsair Vengeance LPX 16GB (1x16GB) DDR4 3200MHZ UDIMM C16 Desktop RAM Memory Module' 
                    proRate='⭐⭐⭐⭐' 
                    proAmt='600' 
                    proPrice='5,990.00' 
                    proEtcInfo='Get it by Tuesday, April 5
                    FREE Delivery over ₹499. Fulfilled by Amazon.'
                    />

                    <InnerProduct 
                    proImg='https://images-eu.ssl-images-amazon.com/images/I/91sPs0ELPnL._AC_UL160_SR160,160_.jpg' 
                    proDesc='ASUS Cerberus GeForce GTX 1050 Ti 4GB OC Edition GDDR5 Gaming Graphics Card (Cerberus-GTX1050Ti-O4G)' 
                    proRate='⭐⭐⭐⭐' 
                    proAmt='743' 
                    proPrice='21,999.00' 
                    proEtcInfo='Get it by Sunday, April 3
                    FREE Delivery over ₹499. Fulfilled by Amazon.'
                    />

                    <InnerProduct 
                    proImg='https://images-eu.ssl-images-amazon.com/images/I/71wEPb+eKOL._AC_UL160_SR160,160_.jpg' 
                    proDesc='Corsair CV650, CV Series, 80 Plus Bronze Certified, 650 Watt Non-Modular Power Supply - Black' 
                    proRate='⭐⭐⭐⭐' 
                    proAmt='2,452' 
                    proPrice='5,139.00' 
                    proEtcInfo='Get it by Monday, April 4
                    FREE Delivery over ₹499. Fulfilled by Amazon.'
                    />

                    <InnerProduct 
                    proImg='https://images-eu.ssl-images-amazon.com/images/I/71WDpMvEHTL._AC_UL160_SR160,160_.jpg' 
                    proDesc='Seagate BarraCuda 1 TB Internal Hard Drive HDD – 8.89 cm (3.5 Inch) SATA 6 Gb/s 7200 RPM 64 MB Cache for Computer Desktop PC (ST1000DM010)' 
                    proRate='⭐⭐⭐⭐' 
                    proAmt='28,406' 
                    proPrice='2,989.00' 
                    proEtcInfo='FREE Delivery over ₹499. Fulfilled by Amazon.
                    Only 1 left in stock.'
                    />

                    <InnerProduct 
                    proImg='https://images-eu.ssl-images-amazon.com/images/I/71m2so+l1-L._AC_UL160_SR160,160_.jpg' 
                    proDesc='GIGABYTE GP-P650B 650W Power Supply' 
                    proRate='⭐⭐⭐⭐' 
                    proAmt='2,601' 
                    proPrice='4,399.00' 
                    proEtcInfo='Get it by Monday, April 4
                    FREE Delivery over ₹499. Fulfilled by Amazon.'
                    />

                    <InnerProduct 
                    proImg='https://images-eu.ssl-images-amazon.com/images/I/61fiQSb2-hS._AC_UL160_SR160,160_.jpg' 
                    proDesc='Western Digital WD10EZEX 1TB Internal Hard Drive for Desktop (Blue)' 
                    proRate='⭐⭐⭐⭐' 
                    proAmt='2,660' 
                    proPrice='3,179.00 ' 
                    proEtcInfo='FREE Delivery
                    Only 2 left in stock.'
                    />
                    </div>
                    </div>
                    {/* </Scrollbars> */}
                    
                <button className="nextBtn" onClick={slideMove}><i className="fa-solid fa-angle-right"></i></button>
            </div>
                
        </div>

        <div className="BackToTop">
            <p>Back To Top</p>
        </div>

        <div className="footerContactSection">
            
            <div className="innerSections">
                <h4>Get to Know Us</h4>
                <p>About Us</p>
                <p>Careers</p>
                <p>Press Releases</p>
                <p>Amazon Cares</p>
                <p>Gift a Smile</p>
                <p>Amazon Science</p>
            </div>
            <div className="innerSections">
                <h4>Connect with Us</h4>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
            <div className="innerSections">
                <h4>Make Money with Us</h4>
                <p>Sell on Amazon</p>
                <p>Sell under Amazon Accelerator</p>
                <p>Amazon Global Selling</p>
                <p>Become an Affiliate</p>
                <p>Fulfilment by Amazon</p>
                <p>Advertise Your Products</p>
                <p>Amazon Pay on Merchants</p>
            </div>
            <div className="innerSections">
                <h4>Let Us Help You</h4>
                <p>COVID-19 and Amazon</p>
                <p>Your Account</p>
                <p>Returns Centre</p>
                <p>100% Purchase Protection</p>
                <p>Amazon App Download</p>
                <p>Amazon Assistant Download</p>
                <p>Help</p>
            </div>
        </div>

        <div className="footerRegionSection">

            <div className="regioninnerSection1">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon-Logo" />
                <div className="langSelector"><i className="fa-solid fa-globe"></i>English<i className="fa-solid fa-sort"></i></div>
            </div>
            <div className="regioninnerSection2">
            <p>Australia</p>
            <p>Brazil</p>
            <p>Canada</p>
            <p>China</p>
            <p>France</p>
            <p>Germany</p>
            <p>Italy</p>
            <p>Japan</p>
            <p>Mexico</p>
            <p>Netherlands</p>
            <p>Poland</p>
            <p>Singapore</p>
            <p>Spain</p>
            <p>Turkey</p>
            <p>United Arab Emirates</p>
            <p>United Kingdom</p>
            <p>United States</p>
            </div>

        </div>
        
        <div className="footerEndSection">

            <div className="small_content_container">
                <div className="small_content">
                    <b>AbeBooks</b>
                    <p>Books,art & collectibles</p>
                </div>
                <div className="small_content">
                    <b>Amazon Web Services</b>
                    <p>Scalable Cloud Computing Services</p>
                </div>
                <div className="small_content">
                    <b>	Audible</b>
                    <p>Download Audio Books</p>
                </div>
                <div className="small_content">
                    <b>DPReview</b>
                    <p>DigitalPhotography</p>
                </div>
                <div className="small_content">
                    <b>	IMDb</b>
                    <p>Movies, TV & Celebrities</p>
                </div>
                <div className="small_content">
                    <b>Shopbop</b>
                    <p>Designer Fashion Brands</p>
                </div>
                <div className="small_content">
                    <b>Amazon Business</b>
                    <p>Everything For Your Business</p>
                </div>
                <div className="small_content">
                    <b>Prime Now</b>
                    <p>2-Hour Delivery on Everyday Items</p>
                </div>
                <div className="small_content">
                    <b>	Amazon Prime Music</b>
                    <p>90 million songs, ad-free Over 15 million podcast episodes</p>
                </div>
            </div>
            
            <div className="thats_it">
                <pre>Conditions of Use & Sale     Privacy Notice  Interest-Based Ads     © 1996-2022, Amazon.com, Inc. or its affiliates</pre>
            </div>
        </div>

    </div>
    
  )
}
