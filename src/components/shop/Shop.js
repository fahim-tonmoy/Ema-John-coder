import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';

const Shop = () => {
    const [ products, setProducts ] = useState([]);
    const [ cart, setCart ] = useState([]);
    const [ displaySearchProd, setdisplaySearchProd ] = useState([]);
    
    
    // fetching data 
    useEffect(()=> {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setdisplaySearchProd(data)
        })
    }, [])
    
    // fetching existing item form local storage
    useEffect(() => {
        // console.log(savedCart);
        // console.log(key);
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
                for(const key in savedCart) {
                    const savedProduct = products.find( product => product.key === key )
                    if(savedProduct) {
                        const quantity = savedCart[key];
                        savedProduct.quantity = quantity;
                        storedCart.push(savedProduct);
                    }
                }
                setCart(storedCart);
            }
    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        // saving to local storage
        addToDb(product.key);
    }

    // Seach event 
    const handleSearch = event => {
        // console.log(event.target.value);
        const searchText = event.target.value;
        const searchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setdisplaySearchProd(searchedProduct);
        console.log(searchedProduct);
    }

    return (
        <>
            <SerachContainer className="serach-container">
                <input 
                type="text" 
                placeholder='Search Product'
                onChange={handleSearch}
                />
            </SerachContainer>
            <ShopStyled>
                <div className="shop-container">
                    <div className="product-container">
                        <h3>Products: {products.length}</h3>
                    {
                            displaySearchProd.map( product => <Product 
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                            />)
                        }
                    </div>
                    <div className="cart-container">
                        <Cart 
                        cart={cart}
                        />
                    </div>
                </div>
            </ShopStyled>
        </>
    );
};

const SerachContainer = styled.div`
    background-color: #000000ea;
    text-align: center;
    line-height: 40px;
    input {
        width: 75%;
    }
`;


const ShopStyled = styled.div`
margin:0px 60px;
padding: 0 30px;
    
    .shop-container {
        display: grid;
        grid-template-columns: 3fr 1fr;
        .product-container {
            border-right: 1px solid lightgray;
        }
        .cart-container {
            margin-left: 40px;
            h3, h4 {
                text-align: center;
            }
        }
    }
`;

export default Shop;