import "./CartItem.css";

export default function CartItem(props){
    return(
        <div className="cart-item-container">
            <img src={props.data.images[0]} alt="" />
            <p>{props.data.name}</p>
            <p>{props.amountProduct}</p>
        </div>
    )
}