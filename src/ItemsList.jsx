import React from 'react'
import Items from './Items'
import UserContext from './UserContext'
import { useContext } from 'react'

function ItemsList() {


  const { items, total } = useContext(UserContext)




  return (
    <>
      <h3 className='bg-dark text-light text-center'>Cart</h3>
      <br></br>
      {
        items.length == 0 ? <p className='text-center'>There is no item in the Cart</p> :
          items.map((item, index) => {
            return <Items key={index} item={item}  />
          })
      }
      <h4 className='text-center'>Total: $ {total}</h4>

    </>
  )
}

export default ItemsList