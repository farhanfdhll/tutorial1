import React from 'react'

const Footer = ({items_length}) => {
    const today = new Date();
  return (
    <footer>
        <small><p>Total {items_length === 1 ? "Item" : "Items"} <u><strong className='item-len-text'>{items_length}</strong></u></p></small>
        <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer