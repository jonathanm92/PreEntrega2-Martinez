import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';



function ItemListContainer ({greeting}){

    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts;


        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div>
            <h1 className="has-text-centered title is-3">{greeting}</h1>
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column">
                            <ItemList products={products}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer