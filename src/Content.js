import React from 'react'
import { useState } from 'react';

const Content = () => {
    const [name, setName] = useState('Farhan');
    // const name = "Farhan"; // this is vanilla js use useState instead ^^^

    const [count, setCount] = useState(0);
    const incrementCount = () =>{
        setCount(count+1)
    }
    
    const handleRandomName =() =>{
        const names = ['Bob', 'Kevin', 'Rully', 'Ronny'];
        const int = Math.floor(Math.random()*4);

        setName(names[int]);
        // return names[int]
    }

    const handleClick = () => {
        console.log('You Clicked a Button')
    }

    const handleClick2 = (name) => {
        console.log(`${name} was cliked` )
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText)
    }

    const handleClick4 = () => {
        incrementCount()
        console.log(count)
    }
  return (
    
    <main>
        <p>Hello user <strong>{name}</strong>!</p>
        {/* <p>{[1, 2, 4]}</p> */}
        {/* <p>{"This is a Javascript expression"}</p> */}
        {/* <p>{{React cannot display an Object}}</p> */}
        {/* <p>{true == false}</p> React cannot display boolean value*/}

        <button onClick={handleClick}> Click Me! </button>
        <button onClick={() => handleClick2('Dave')}> Click Me Again! </button>
        <button onClick={(e) => handleClick3(e)}> Click Me Event! </button>
        
        <button onClick={handleRandomName}> Change Name! </button>
        
        <button onClick={handleClick4}> Print Counter </button>
    </main>
  )
}

export default Content