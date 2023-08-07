import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom"

function NavBar( ){

    return (
        <nav>
            <section className="hero is-link">
                <div className="hero-body has-text-centered">
                <Link to="/"><h1 className="title">Jonas Hardware Store</h1></Link>
                </div>
            </section>
            <div className="is-flex is-justify-content-center pt-3">
                <Link to="/category/tarjetas"><button className="button is-primary mr-2 has-text-black-bis">Tarjetas de Video</button></Link>
                <Link to="/category/procesadores"><button className="button is-primary mr-2 has-text-black-bis">Procesadores</button></Link>
                <Link to="/category/motherboards"><button className="button is-primary mr-2 has-text-black-bis">Motherboards</button></Link>
                <Link to="/category/memorias"><button className="button is-primary mr-2 has-text-black-bis">RAM</button></Link>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;