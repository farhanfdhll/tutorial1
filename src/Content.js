import React from 'react'
import { useState } from 'react';
import ItemList from './ItemList';

const Content = ({items, handleCheck, handleDelete}) => {
    const [count, setCount] = useState(0);
    // Check github commit for previously deleted code

  return (
    <main>
        {items.length ? (
            <ItemList items ={items} handleCheck ={handleCheck} handleDelete={handleDelete}/>
        ) : (<p style={{marginTop: '2rem'}}>Your list is <strong>empty</strong></p>)}
    </main>
  )
}

export default Content