import React, { useContext } from 'react'
import Card from './Card'
import UserContext from './UserContext'


function CardList() {

    const { Products } = useContext(UserContext)


    

    return (
        <div className='container'>
            <div className='row'>
                {
                    Products.map((card) => {
                        return <Card key={card.id} card={card} />
                    })
                }
            </div>
        </div>
    )
}

export default CardList