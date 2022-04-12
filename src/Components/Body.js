import React, {useContext} from 'react'
import ProductContext from '../Context/ProductAPI.js/ProductContext'
import SaleProductContext from '../Context/ProductAPI.js/SaleProductContext'
import './Body.css'
import Product from './Product.js'
import SaleProduct from './SaleProduct.js'
import myProduct from './SaleProductData'

export default function Body(props) {

    const pro = useContext(ProductContext)
    const SalePro = useContext(SaleProductContext)

    function allProducts(val)
    {
        return(
            <Product productInfo={val.Name}
                    productImg={val.Image}
                    ProductLink={val.Link}
        />
        )
        
    }
  return (
    <div className='body'>
        <div className="home_container">
            <img className='backgroundImg' src="https://m.media-amazon.com/images/I/71zBGVPtAKL._SX3000_.jpg"/>
            
            <div className="home_row">
                <Product productInfo={pro.Product1.productName}
                         productImg={pro.Product1.productImage}
                         ProductLink={pro.Product1.productLink}
                />
                <Product productInfo={pro.Product2.productName}
                         productImg={pro.Product2.productImage}
                         ProductLink={pro.Product2.productLink}
                />
                <Product productInfo={pro.Product3.productName}
                         productImg={pro.Product3.productImage}
                         ProductLink={pro.Product3.productLink}
                />
                <Product productInfo={pro.Product4.productName}
                         productImg={pro.Product4.productImage}
                         ProductLink={pro.Product4.productLink}
                />
            </div>
            <div className="home_row">
                    {myProduct.map(allProducts)}
            </div>
            <div className="home_row">
                <Product productInfo={pro.Product2.productName}
                         productImg={pro.Product2.productImage}
                         ProductLink={pro.Product2.productLink}
                />
                <Product productInfo={pro.Product4.productName}
                         productImg={pro.Product4.productImage}
                         ProductLink={pro.Product4.productLink}
                />
                <Product productInfo={pro.Product1.productName}
                         productImg={pro.Product1.productImage}
                         ProductLink={pro.Product1.productLink}
                />
            </div>

            <div className="home_row">
                <SaleProduct
                saleProductInfo ={SalePro.Product_1.saleProductName}
                saleProductImg ={SalePro.Product_1.saleProductImg}
                saleProductBestSeller ={SalePro.Product_1.saleProductBestSeller==='BestSeller'?'saleProductBestSeller':'saleProductBestSeller-None'}
                saleProductStock ='In Stock'
                saleProductEligibility ={SalePro.Product_1.saleProductEligibility === 'Eligible' ||SalePro.Product_1sale.ProductEligibility === 'eligible'?'Eligible for FREE Shipping':'Not Eligible for FREE Shipping'}
                saleProductPrice = {SalePro.Product_1.saleProductPrice}
                saleProductSize  ={SalePro.Product_1.saleProductSize}
                />

                <SaleProduct
                saleProductInfo ={SalePro.Product_2.saleProductName}
                saleProductImg ={SalePro.Product_2.saleProductImg}
                saleProductBestSeller ={SalePro.Product_2.saleProductBestSeller==='BestSeller'?'saleProductBestSeller':'saleProductBestSeller-None'}
                saleProductStock ='In Stock'
                saleProductEligibility ={SalePro.Product_2.saleProductEligibility === 'Eligible' ||SalePro.Product_2.saleProductEligibility === 'eligible'?'Eligible for FREE Shipping':'Not Eligible for FREE Shipping'}
                saleProductPrice = {SalePro.Product_2.saleProductPrice}
                saleProductSize  ={SalePro.Product_2.saleProductSize}
                />

                <SaleProduct
                saleProductInfo ={SalePro.Product_3.saleProductName}
                saleProductImg ={SalePro.Product_3.saleProductImg}
                saleProductBestSeller ={SalePro.Product_3.saleProductBestSeller==='BestSeller'?'saleProductBestSeller':'saleProductBestSeller-None'}
                saleProductStock ='In Stock'
                saleProductEligibility ={SalePro.Product_3.saleProductEligibility === 'Eligible' ||SalePro.Product_3.saleProductEligibility === 'eligible'?'Eligible for FREE Shipping':'Not Eligible for FREE Shipping'}
                saleProductPrice = {SalePro.Product_3.saleProductPrice}
                saleProductSize  ={SalePro.Product_3.saleProductSize}
                />

                <SaleProduct
                saleProductInfo ={SalePro.Product_4.saleProductName}
                saleProductImg ={SalePro.Product_4.saleProductImg}
                saleProductBestSeller ={SalePro.Product_4.saleProductBestSeller==='BestSeller'?'saleProductBestSeller':'saleProductBestSeller-None'}
                saleProductStock ='In Stock'
                saleProductEligibility ={SalePro.Product_4.saleProductEligibility === 'Eligible' ||SalePro.Product_4.saleProductEligibility === 'eligible'?'Eligible for FREE Shipping':'Not Eligible for FREE Shipping'}
                saleProductPrice = {SalePro.Product_4.saleProductPrice}
                saleProductSize  ={SalePro.Product_4.saleProductSize}
                />
                <SaleProduct
                saleProductInfo ={SalePro.Product_5.saleProductName}
                saleProductImg ={SalePro.Product_5.saleProductImg}
                saleProductBestSeller ={SalePro.Product_5.saleProductBestSeller==='BestSeller'?'saleProductBestSeller':'saleProductBestSeller-None'}
                saleProductStock ='In Stock'
                saleProductEligibility ={SalePro.Product_5.saleProductEligibility === 'Eligible' ||SalePro.Product_5.saleProductEligibility === 'eligible'?'Eligible for FREE Shipping':'Not Eligible for FREE Shipping'}
                saleProductPrice = {SalePro.Product_5.saleProductPrice}
                saleProductSize  ={SalePro.Product_5.saleProductSize}
                />      
                
            </div>

            <div className="home_row">
                <Product productInfo={pro.Product4.productName}
                         productImg={pro.Product4.productImage}
                         ProductLink={pro.Product4.productLink}
                />
                <Product productInfo={pro.Product2.productName}
                         productImg={pro.Product2.productImage}
                         ProductLink={pro.Product2.productLink}
                />
            </div>
            <div className="home_row">
                <Product productInfo={pro.Product3.productName}
                         productImg={pro.Product3.productImage}
                         ProductLink={pro.Product3.productLink}
                />
            </div>
        </div>
        
    </div>
  )
}
