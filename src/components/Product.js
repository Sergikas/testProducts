import "./Product.css";

export default function Product(props){

    function handleProductDetail(){
        props.setUserLocation("productDetail");
        props.setProductIndex(props.data.id-1);
    }

    return(
        <div className="product-container" onClick={handleProductDetail}>
            <img className="product-image"
                src={props.data.image} 
                alt="ProductDetails" />
            <p>{props.data.name}</p>      
        </div>
    )
}
