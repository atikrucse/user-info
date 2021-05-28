import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalSalary = cart.reduce((x, y) => (x + y.salary), 0);
    return (
        <div className="user-cart">
            <h1>Adding Summary: </h1>
            <p>People Added: {cart.length}</p>
            <p>Total Salary: {totalSalary}</p>
        </div>
    );
};

export default Cart;