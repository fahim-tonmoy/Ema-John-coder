import React from 'react';
import styled from 'styled-components';

const Cart = (props) => {
    const {cart} = props;
    // console.log(cart);
    let total = 0;
    let totalQuantity = 0;
    for (const product of cart) {
        if(!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = 15;
    const tax = (( total + shipping ) * 5 / 100);
    const grandTotal = total + shipping + tax;
    return (
        <CartStyled>
            <h3>Order Summery</h3>
            <h4>Items Ordered: {totalQuantity}</h4>
            <br />
            <p>Total: {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)} (5%)</p>
            <p>GrandTotal: {grandTotal.toFixed(2)}</p>

        </CartStyled>
    );
};


const CartStyled = styled.div`

`;

export default Cart;