import {Link} from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';

const Item = ({id, name, img, price, stock}) => {
    return (
        <article key={id}>
            <div className="card">
                <div className="card-img is-centered">
                    <figure>
                        <img src={img} alt="imagen-del-producto"/>
                    </figure>
                </div>
                <div className="card-content ">
                    <div className="media-content">
                        <h3 className="title is-4">{name}</h3>
                        <p className="subtitle is-6">Precio: ${price}</p>
                        <p className="subtitle is-6">Stock Disponible: {stock}</p>
                    </div>
                </div>
                <div>
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada')}/>
                </div>
                <div className="has-text-centered">
                    <Link to={`/item/${id}`}><button className="button is-link is-rounded mr-3">Ver Detalles</button></Link>
                </div>
        </div>
        </article>
    )
}

export default Item;