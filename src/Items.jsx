import React from 'react'
import { useState } from 'react'
import UserContext from './UserContext';
import { useContext } from 'react';

function Items({ item }) {
    const { quantityfromCart, quantitytoCart, items, setItems, total, setTotal } = useContext(UserContext);
    let [Quantity, setQuantity] = useState(1);



    let removefromCart = (card) => {
        let newarr = items.filter((item) => item.title !== card.title)
        setItems(newarr);

        setTotal(total - item.price * Quantity)


    }

    let addition = () => {
        const newQuantity = Quantity + 1;
        setQuantity(newQuantity);

        quantitytoCart({ ...item, quantity: newQuantity });


    }

    let subtraction = () => {
        if (Quantity > 0) {
            const newQuantity = Quantity - 1;
            setQuantity(newQuantity);

            quantityfromCart({ ...item, quantity: newQuantity });

        }

    }

    return (

        <div className='container '>
            <ul className="list-group">
                <li className="list-group-item align-items-center">
                    <div className='d-flex justify-content-between'>
                        <b>Name : {item.title}</b>
                        {/* <button className="badge bg-danger badge-pill" onClick={() => removefromCart(item)}>Remove</button> */}
                    </div>
                    <div>quantity : <button className='btn btn-secondary' onClick={subtraction}> - </button > {Quantity} <button className='btn btn-secondary' onClick={addition}> + </button ></div>
                    <div className="text-danger">
                        <b>Price: $ {item.price * Quantity}</b>
                    </div>

                </li>
            </ul>

        </div>

    )
}

export default Items