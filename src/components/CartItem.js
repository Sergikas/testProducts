import "./CartItem.css";

export default function CartItem(props){
    return(
        <div className="cart-item-container">
            <img src={props.data.image} alt="" />
            <p>{props.data.name}</p>
            <p>{props.amountProduct}</p>
        </div>
    )
}