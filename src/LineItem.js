import React from 'react'
import { BsTrashFill } from 'react-icons/bs';

const LineItem = ({handleCheck, handleDelete, item}) => {
  return (
    <li className='item' key={item.id}>
        <input type="checkbox" checked={item.checked} onChange = {() => handleCheck(item.id)}/>
        <label style={(item.checked) ? {textDecoration: 'line-through'} : null} onDoubleClick={() => handleCheck(item.id)} htmlFor="">{item.item}</label>
        <BsTrashFill role='button' onClick={ () => handleDelete(item.id)} tabIndex='0' aria-label={`Delete ${item.item}`}></BsTrashFill> 
        {/* https://react-icons.github.io/react-icons */}
    </li>
  )
}

export default LineItem