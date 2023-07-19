import CartWidget from "../CartWidget/CartWidget"
import "bulma/css/bulma.css";


function NavBar(){

    return (
        <nav>
            <div className="is-flex is-justify-content-center pt-3">
                <button className="button is-primary mr-2 has-text-black-bis">Tarjetas de Video</button>
                <button className="button is-primary mr-2 has-text-black-bis">CPU</button>
                <button className="button is-primary mr-2 has-text-black-bis">Motherboards</button>
                <button className="button is-primary mr-2 has-text-black-bis">RAM</button>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;