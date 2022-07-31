import Product from "./Product.js";
import Header from "./Header.js";
import CartItem from "./CartItem";
import "./App.css";
import Data from "../Data.js";
import {useState} from "react";

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

    const [itemsCart,setItemsCart] = useState([]); //cart items 

    function addCart(id,amountProduct){
        setItemsCart(prevItems =>{
            return[...prevItems,<CartItem 
                    data={Data[id-1]}
                    amountProduct={amountProduct}
                />]
        })
        
    }

    return(
        <div className="app-container">
            <Header 
                itemsCart={itemsCart}
            />
            <Product 
                data={Data[0]} 
                key={Data[0].id}
                addCart={addCart}
            />
        </div>
    )
}