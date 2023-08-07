import cart from "./assets/cart.svg"

const CartWidget = () => {



    return (
        <div className="has-text-right pr-1">
            <img src={cart} alt="cart-widget" width="48px" height="48px"/>
        </div>
    )
}

export default CartWidget