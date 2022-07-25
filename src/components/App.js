import Product from "./Product.js";
import "./App.css";
import Data from "../Data.js";

export default function App(){

    return(
        <div className="app-container">
            <Product data={Data[0]}/>
        </div>
    )
}