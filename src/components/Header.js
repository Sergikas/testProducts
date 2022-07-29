import "./Header.css";
import {useState} from "react";
import Logo from "../images/icons/logo.svg";
import cart from "../images/icons/icon-cart.svg";

export default function Header(){

    const [itemsVisibility,setItemsVisibility] = useState(false);
    const [itemsAddedCart,setItemsAddedCart] = useState([]);

    function handdleCartItems(listVisibility){
        listVisibility ? 
        document.getElementById("card-items").style.display = "none" :
        document.getElementById("card-items").style.display = "block";

        setItemsVisibility(prevVisibility => !prevVisibility);
    }

    return(
        <div className="header-container">
            <img className="icon" src={Logo} alt=""/>
            <div className="header-cart">
                <img className="icon-cart" 
                    src={cart} 
                    onClick={()=>handdleCartItems(itemsVisibility)}
                    alt="" />
                <div id="card-items" className="card-items">
                    <p>Cart</p>
                    {itemsAddedCart.length > 0 ? <p>Items avalibles</p> : <p className="card-empty">Your cart is empty.</p>}
                </div>
            </div>
        </div>
    )
}