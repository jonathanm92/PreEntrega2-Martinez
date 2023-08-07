
const products = [
    {
        id: '1',
        name: 'ASUS TUF Gaming GeForce RTX 4080',
        price: 1200,
        category: 'Tarjetas',
        img:"https://m.media-amazon.com/images/I/71vQnBuZ3yL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        stock: 25,
        description: 'descripcion de iPhone 12'
    },
    {
        id: '2',
        name: 'AMD Ryzen™ 7 5800X3D',
        price: 323,
        category: 'Procesadores',
        img:'https://m.media-amazon.com/images/I/61Kq99IRdcL._AC_SX466_.jpg',
        stock: 25,
        description: 'El procesador de escritorio para juegos más rápido del mundo y el primer procesador para juegos con tecnología de apilamiento 3D'
    },
    {
        id: '3',
        name: 'ASUS TUF Gaming X670E',
        price: 281,
        category: 'Motherboards',
        img:'https://m.media-amazon.com/images/I/71Dq8+22SwL._AC_SX466_.jpg',
        stock: 25,
        description: 'Zócalo AMD AM5: Listo para procesadores de escritorio AMD Ryzen serie 7000'
    },
    {
        id: '4',
        name: 'CORSAIR VENGEANCE DDR5 RAM 32 GB (2 x 16 GB) 6000 MHz',
        price: 95,
        category: 'Memorias',
        img:'https://m.media-amazon.com/images/I/71AV5PQu1yL._AC_SX679_.jpg',
        stock: 25,
        description: 'Bienvenido a la vanguardia del rendimiento: empuja los límites de tu sistema como nunca antes con la memoria DDR5, desbloqueando frecuencias aún más rápidas, mayores capacidades y mejor rendimiento que las generaciones anteriores.'
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId));
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category.toLowerCase() === categoryId.toLowerCase()))
        }, 500)
    })

};