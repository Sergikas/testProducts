import Product from "./Product";
import ProductDetail from "./ProductDetail";
import {useState} from "react";
import "./Main.css";

export default function Main(props){

    const [productIndex,setProductIndex] = useState()

    const productList = props.data.map(element =>{
        return (
        <Product 
            data={element} 
            setUserLocation={props.setUserLocation}
            setProductIndex={setProductIndex}
        />
        )
    })

    if(props.userLocation === "productDetail"){
        return(
            <ProductDetail 
                data={props.data[productIndex]}
                key={props.data[productIndex]?.id} 
                addCart={props.addCart}
            /> 
        )
    }

    return(
        <div className="container-listProducts">
            {productList}
        </div>
    )
}