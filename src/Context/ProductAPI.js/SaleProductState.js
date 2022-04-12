import SaleProductContext from "./SaleProductContext";

const SaleProductState = (props) =>{
    const SaleProducts ={
            
        Product_1:{
            'saleProductName':'HP v236w 64GB USB 2.0 Pen Drive',
            'saleProductImg':'https://m.media-amazon.com/images/I/61xNG4wjOuL._AC_AA180_.jpg',
            'saleProductPrice':'491.00',
            'saleProductSize':'64GB',
            'saleProductBestSeller':'BestSeller',
            'saleProductEligibility':'Eligible'
        },
        Product_2:{
            'saleProductName':'2020 Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver',
            'saleProductImg':'https://m.media-amazon.com/images/I/71TPda7cwUL._AC_AA180_.jpg',
            'saleProductPrice':'92900.00',
            'saleProductSize':'256GB',
            'saleProductBestSeller':'',
            'saleProductEligibility':'Eligible'
        },
        Product_3:{
            'saleProductName':'Apple iPhone 13 (256GB) - Midnight',
            'saleProductImg':'https://m.media-amazon.com/images/I/61VuVU94RnL._SX569_.jpg',
            'saleProductPrice':'83900.00',
            'saleProductSize':'256GB',
            'saleProductBestSeller':'BestSeller',
            'saleProductEligibility':'Eligible'
        },
        Product_4:{
            'saleProductName':'Intel Core i9-10920X Desktop Processor 12 Cores up to 4.8GHz Unlocked LGA2066 X299 Series 165W',
            'saleProductImg':'https://m.media-amazon.com/images/I/61v5KY43BmL._AC_UY218_.jpg',
            'saleProductPrice':'84999',
            'saleProductSize':'i9',
            'saleProductBestSeller':'',
            'saleProductEligibility':''
        },
        Product_5:{
            'saleProductName':'Samsung 216 cm (85 inch) 8K Smart Neo QLED TV QA85QN800AKXXL (Steel) (2021 Model)',
            'saleProductImg':'https://m.media-amazon.com/images/I/91RMUYY13VS._SX466_.jpg',
            'saleProductPrice':'1349990.00',
            'saleProductSize':'85 Inches',
            'saleProductBestSeller':'',
            'saleProductEligibility':'Eligible'
        }
    } 
    return(
        <SaleProductContext.Provider value={SaleProducts}>
            {props.children}
        </SaleProductContext.Provider>
    )
}
export default SaleProductState;