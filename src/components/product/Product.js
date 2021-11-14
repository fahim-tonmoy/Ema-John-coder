import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props);
    const { name, img, price, stock, seller, star } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <ProductStyled>
          <div className="product">
            <div>
            <img src={img} alt="" />
            </div>
            <div>
            <h4 className='product-name'>{name}</h4>
            <p><small>By: {seller}</small></p>
            <p>Price: {price}</p>
            <p><small> Only {stock} left in stock - order soon</small></p>
            <Rating
                initialRating={star}
                readonly
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
            ></Rating>
            <br />
            <button 
            onClick={() => props.handleAddToCart(props.product)}
            className='btn-regular'>{cartIcon}  Purchase</button>
            </div>
          </div>
        </ProductStyled>
    );
};

const ProductStyled = styled.div`
.product{
    display: flex;
    border-bottom: 1px solid lightgray;
    margin-right: 5px;
    padding: 10px 0;
    .product-name{
        color: blue;
    }
    .icon-color {
        color: goldenrod;
    }
    .btn-regular{
        background-color: goldenrod;
        width: 150px;
        height: 25px;
        border: 1px solid gray;
        border-radius: 5px;
        cursor: pointer;
    }
}
`;

export default Product;