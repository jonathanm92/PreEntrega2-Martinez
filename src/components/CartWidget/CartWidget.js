import cart from "./assets/cart.svg"
import "bulma/css/bulma.css";


const CartWidget = () => {
    return (
        <div className="has-text-right pr-1">
            <img src={cart} alt="cart-widget" width="48px" height="48px"/>
            0
        </div>
    )
}

export default CartWidget