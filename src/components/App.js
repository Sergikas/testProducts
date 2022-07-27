import Product from "./Product.js";
import "./App.css";
//import Data from "../Data.js";
import {useState, useEffect} from "react";

export default function App(){

    const [dataProduct,setDataProduct] = useState([])

    useEffect(()=>{
        async function getData(){
            const res = await fetch("https://polite-sherbet-fd6ad4.netlify.app/api/products")
            const data = await res.json()
            setDataProduct(data)
        }
        getData()
    },[])

    console.log(dataProduct)

    return(
        <div className="app-container">
            {/*<Product data={dataProduct[0]}/>*/}
        </div>
    )
}