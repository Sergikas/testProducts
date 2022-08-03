import Main from "./Main.js";
import Header from "./Header.js";
import CartItem from "./CartItem.js";
import "./App.css";
import {useState, useEffect} from "react";

export default function App(){

    const [dataProduct,setDataProduct] = useState([])

    //fecth data from the db
    useEffect(()=>{
        async function getData(){
            const res = await fetch("http://localhost:8080/api/products")
            const data = await res.json()
            setDataProduct(data)
        }
        getData()
    },[]) 


    const [itemsCart,setItemsCart] = useState([]); //actual items in the cart list

    //add items to the itemsCart
    function addCart(id,amountProduct){
        setItemsCart(prevItems =>{
            return[...prevItems,<CartItem 
                    data={dataProduct[id-1]}
                    amountProduct={amountProduct}
                />]
        })     
    }

    //State record the actual position in the viwes of the page
    const[userLocation,setUserLocation] = useState("main")


    return(
        <div className="app-container">
            <Header 
                itemsCart={itemsCart}
                setUserLocation={setUserLocation}
            />
            <Main
                data={dataProduct}
                userLocation={userLocation}
                setUserLocation={setUserLocation}
                addCart={addCart}
            />
            
        </div>
    )
}