
import NavBar from "./components/NavBar/NavBar";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import CPUImg from "./Img/ryzen5800x.jpg";
import GPUImg from "./Img/nvidiartx4080.jpg";
import RAMImg from "./Img/corsairram32gb.jpg";
import BOARDImg from "./Img/asusrogx570.jpg";

import "bulma/css/bulma.css";


function App(){

    return (
        <div>
            <section className="hero is-link">
                <div className="hero-body has-text-centered">
                    <h1 className="title"><a href="../public/index.html">Jonas Hardware Store</a></h1>
                </div>
            </section>
            <NavBar/>
            <ItemListContainer greeting={'Bienvenidos al eCommerce de Jonas'}/>
            <h1 className="has-text-centered pt-3">Piezas en Venta</h1>
            <div className="container">
                <div className="section">
                    <div className="columns is-justify-content-center is-align-items-flex-end ">
                        <div className="column is-3">
                            <ProfileCard titulo="Nvidia RTX 4080" descripcion="Tarjeta de video con el chipset de nvidia 4080 por ASUS" img={GPUImg}/>
                        </div>
                        <div className="column is-3 is-offset-1">
                            <ProfileCard titulo="Ryzen 5800x" descripcion="CPU de 4ta generacion creado por AMD " img={CPUImg}/>
                        </div>
                        <div className="column is-3 is-offset-1">
                            <ProfileCard titulo="Asus ROG Strix X570" descripcion="Motherboard AM4 para instalar las piezas" img={BOARDImg}/>
                        </div>
                        <div className="column is-3 is-offset-1">
                            <ProfileCard titulo="Corsair VENGEANCE DDR4 32GB" descripcion="Memoria RAM para utilizar junto con el motherboard" img={RAMImg}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default App;