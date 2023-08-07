import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    return(
        <article key={id}>
            <div className="card">
                <div className="card-img">
                    <figure>
                        <img src={img} alt="imagen-del-producto"/>
                    </figure>
                </div>
                <div className="card-content ">
                    <div className="media-content">
                        <h3 className="title is-4">{name}</h3>
                        <p className="subtitle is-6">{category}</p>
                        <p className="subtitle is-6">{description}</p>
                        <p className="subtitle is-6">Precio: ${price}</p>
                        <p className="subtitle is-6">Stock Disponible: {stock}</p>
                    </div>
                </div>
                <div className="is-flex is-justify-content-center">
                    <button className="mr-3">Ver Detalles</button>
                </div>
                <footer>
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada')}/>
                </footer>
            </div>
    </article>
    )
}

export default ItemDetail;