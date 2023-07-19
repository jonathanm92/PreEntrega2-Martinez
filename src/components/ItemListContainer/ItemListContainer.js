import "bulma/css/bulma.css";

function ItemListContainer ({greeting}){

    return (
        <div>
            <h1 className="has-text-centered title is-3">{greeting}</h1>
        </div>
    )
}

export default ItemListContainer