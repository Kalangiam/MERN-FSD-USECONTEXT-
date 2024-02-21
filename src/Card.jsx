import React, { useState } from 'react'
import Proptypes from "prop-types"
import UserContext from './UserContext'
import { useContext } from 'react'


function Card({ card }) {

    const { addtoCart, items, setItems, total, setTotal, quantityfromCart, quantitytoCart } = useContext(UserContext)
    let [buttonClick, setbuttonClick] = useState(false)
    let [Quantity, setQuantity] = useState(1);

    let removefromCart = (card) => {
        let newarr = items.filter((item) => item.title !== card.title)
        setItems(newarr);
        setQuantity(() => {
            if (Quantity > 0) {
                const newQuantity = Quantity - 1;
                setQuantity(newQuantity);
                quantityfromCart({ ...card, Quantity: newQuantity });
                setTotal(total - (card.price) * (Quantity))

                if (Quantity) {
                    const newQuantity = Quantity + 1;
                    setQuantity(newQuantity);
                    quantityfromCart({ ...card, Quantity: newQuantity });
                    setTotal(total - (card.price) * (Quantity))

                }

            }


        })


    }


    Card.proptypes = {
        card: {
            id: Proptypes.number.isRequired,
            title: Proptypes.string.isRequired,
            description: Proptypes.string.isRequired,
            price: Proptypes.string.isRequired,
            rating: Proptypes.number.isRequired,
            brand: Proptypes.string.isRequired,
            discountPercentage: Proptypes.number.isRequired
        }
    }
    return (
        <div className='col-md-4'>
            <div className="card" style={{ width: "16rem" }}>
                <img src={card.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <h6 className='text-light bg-dark'>Brand : {card.brand}</h6>
                    <h6 className='text-danger'>Price : ${card.price}</h6>
                    <h6 className='text-info'>Rating : {card.rating} / 5</h6>
                    <h6 className='text-dark'>Discount : {card.discountPercentage} %</h6>
                    <p className="card-text">{card.description}</p>
                    <div>


                        {!buttonClick && <button onClick={() => { setbuttonClick(!buttonClick); addtoCart(card) }} className="btn add">Add to Cart</button>}

                        {buttonClick && <button onClick={() => { setbuttonClick(!buttonClick); removefromCart(card) }} className='btn remove'>Remove From Cart</button>}
                    </div>




                </div>
            </div>
        </div>

    )
}

export default Card