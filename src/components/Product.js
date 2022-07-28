import "./Product.css";
import {useState} from "react";
import minus from "../images/icons/icon-minus.svg";
import plus from "../images/icons/icon-plus.svg";
import cart from "../images/icons/icon-cart.svg";

export default function Product(props){

    const [focusImage,setFocusImage] = useState(props.data.images[0]);
    const [amountProduct,setAmountProduct] = useState(0);

    // Display the corrent amount of avalible products (no more than storage either minus of 0)
    function handleAmountProducts(operation){
        operation==="minus" ? 

        setAmountProduct(prevState => {
            if(prevState-1 >= 0){
                return prevState - 1;
            }else{
                return 0;
            }}
        ) : 
        setAmountProduct(prevState =>{
            if(prevState+1 <= props.data.storage){
                return prevState + 1;
            }else{
                alert("No se cuenta con mas stock")
                return prevState
            }
        });
    }
    
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
                        <button className="button-product-1 buttons">
                            <button className="btn-controll btn1" onClick={()=>handleAmountProducts("minus")}>
                                <img src={minus} alt="" />
                            </button>
                            {amountProduct}
                            <button className="btn-controll btn2" onClick={()=>handleAmountProducts("plus")}>
                                <img src={plus} alt="" />
                            </button>
                        </button>
                        <button className="button-product-2 buttons">Add to car</button>
                </div>
            </div>
        </div>
    )
}