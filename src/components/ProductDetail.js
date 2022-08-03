import "./ProductDetail.css";
import {useState} from "react";
import minus from "../images/icons/icon-minus.svg";
import plus from "../images/icons/icon-plus.svg";

export default function ProductDetail(props){

    // eslint-disable-next-line no-unused-vars
    const [focusImage,setFocusImage] = useState(props.data?.image);
    const [amountProduct,setAmountProduct] = useState(1);

    // Display the corrent amount of avalible productDetails (with the limits)
    function handleAmountProducts(operation){
        operation==="minus" ? 

        setAmountProduct(prevState => {
            if(prevState-1 > 0){
                return prevState - 1;
            }else{
                return 1;
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
    
    /* function handleFocusImage(image){
        setFocusImage(image);
    } */

    return(
        <div className="productDetail-container">
            <div className="productDetail-images">
                <img className="focus-image" 
                    src={focusImage} 
                    alt="" />
                <div className="all-images">
                    {/*Here we load all the images of the product on a img label*/}
                    {/*props.data.images.map(image => 
                        <img className="side-image" src={image} alt={image} onClick={()=>handleFocusImage(image)}/>)*/}
                </div>
            </div>
            <div className="productDetail-description">
                <p className="company-label"> SNEAKER COMPANY</p>
                <p className="productDetail-name">{props.data?.name}</p>
                <p className="productDetail-detail">{props.data?.description}</p>
                <h2 className="productDetail-price">${props.data?.price}</h2>
                <div className="productDetail-buttons">
                        <button className="button-productDetail-1 buttons">
                            <button className="btn-controll btn1" onClick={()=>handleAmountProducts("minus")}>
                                <img src={minus} alt="" />
                            </button>
                            {amountProduct}
                            <button className="btn-controll btn2" onClick={()=>handleAmountProducts("plus")}>
                                <img src={plus} alt="" />
                            </button>
                        </button>
                        <button className="button-productDetail-2 buttons" onClick={()=>props.addCart(props.data?.id,amountProduct)}>Add to car</button>
                </div>
            </div>
        </div>
    )
}