import Item from '../Item/Item'

const ItemList = ({products}) => {
    return (
        <div className="is-flex" key={products.id}>
            {products.map(prod =><Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList;