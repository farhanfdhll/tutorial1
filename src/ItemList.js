import React from 'react'
import LineItem from './LineItem';

const ItemList = ({items, handleCheck, handleDelete}) => {
  return (
    <ul>
        { items.map((item) => (
            <LineItem handleCheck={handleCheck} handleDelete={handleDelete} item={item} key={item.id}/>
        ))}
    </ul>
  )
}

export default ItemList