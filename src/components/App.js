import Product from "./Product.js";
import Header from "./Header.js";
import "./App.css";
import Data from "../Data.js";
//import {useState, useEffect} from "react";

export default function App(){

    /* const [dataProduct,setDataProduct] = useState([])

    useEffect(()=>{
        async function getData(){
            console.log("fetching data")
            const res = await fetch("https://api.jikan.moe/v4/anime")
            const data = await res.json()
            setDataProduct(data.data)
        }
        getData()
    },[]) */

    return(
        <div className="app-container">
            <Header />
            <Product data={Data[0]} key={Data[0].name}/>
        </div>
    )
}