import React from 'react'
import { useState } from 'react';
import { BsTrashFill } from 'react-icons/bs';

const Content = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "One half pound bag of Cocoa Covered Almonds Unsalted"
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        }
    ]);
    const handleCheck = (id) =>{
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
        setItems(listItems)
        localStorage.setItem('shopping list', JSON.stringify(listItems))
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id)
        setItems(listItems)
        localStorage.setItem('shopping list', JSON.stringify(listItems))
    }
    

    const [count, setCount] = useState(0);
    // Check github commit for previously deleted code

  return (
    <main>
        {items.length ? (
            <ul>
                { items.map((item) => (
                    <li className='item' key={item.id}>
                        <input type="checkbox" checked={item.checked} onChange = {() => handleCheck(item.id)}/>
                        <label style={(item.checked) ? {textDecoration: 'line-through'} : null} onDoubleClick={() => handleCheck(item.id)} htmlFor="">{item.item}</label>
                        <BsTrashFill role='button' onClick={ () => handleDelete(item.id)} tabIndex='0'></BsTrashFill> 
                    </li>
                )) }
            </ul>
        ) : (<p style={{marginTop: '2rem'}}>Your list is <strong>empty</strong></p>) }
        
    </main>
  )
}

export default Content