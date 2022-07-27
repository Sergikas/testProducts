import "./Product.css";
import {useState} from "react";

export default function Product(props){

    const [focusImage,setFocusImage] = useState(props.data.images[0])
    
    function handleFocusImage(image){
        setFocusImage(image);
    }

    return(
        <div className="product-container">
            <div className="product-images">
                <img className="focus-image" 
                    src={focusImage} 
                    alt="" />
                <div className="all-images">
                    {/*Here we load all the images of the product on a img label*/}
                    {props.data.images.map(image => 
                        <img className="side-image" src={image} alt={image} onClick={()=>handleFocusImage(image)}/>)}
                </div>
            </div>
            <div className="product-description">
                <p className="company-label"> SNEAKER COMPANY</p>
                <p className="product-name">{props.data.name}</p>
                <p className="product-detail">{props.data.description}</p>
                <h2 className="product-price">${props.data.price}</h2>
                <div className="product-buttons">
                        <button className="button-product-1 buttons"></button>
                        <button className="button-product-2 buttons">Add to car</button>
                </div>
            </div>
        </div>
    )
}