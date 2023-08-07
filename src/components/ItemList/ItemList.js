import Item from '../Item/Item'

const ItemList = ({products}) => {
    return (
        <div className="is-flex">
            {products.map(prod =><Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList;