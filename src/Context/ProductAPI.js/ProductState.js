
import ProductContext from "./ProductContext";

const ProductState = (props) =>{

    const mainProducts = {
        Product1:
        {'productName':"Immunity boosters & everyday essentials |...",
        'productImage':"https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonLaunchpad/Gateway/May/PC/PC_CC_379x304._SY304_CB668525590_.jpg",
        'productLink':"Explore More Indian Brands"},
        Product2:
        {'productName':"Up to 70% off | Clearance store",
        'productImage':"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg",
        'productLink':"See More"},
        Product3:
        {'productName':"Up to 50% off | Chimneys",
        'productImage':"https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/Chimney_GW_CC_379x304._SY304_CB427965740_.jpg",
        'productLink':"See More"},
        Product4:
        {'productName':"Latest electronics to make your Puthandu...",
        'productImage':"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/RNY22/PC_CC/PC_CC-1_CC2_1x._SY304_CB625886755_.jpg",
        'productLink':"See More"},
    }
    
    return(
        <ProductContext.Provider value={mainProducts}>
            {props.children}
        </ProductContext.Provider>
    )

}
export default ProductState;