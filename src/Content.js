import React from 'react'

const Content = () => {
    const name = "Farhan";
    const handleRandomName =() =>{
        const names = ['Bob', 'Kevin', 'Rully', 'Ronny'];
        const int = Math.floor(Math.random()*4);

        return names[int]
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
  return (
    
    <main>
        <p>Hello user <strong>{name}</strong>!</p>
        {/* <p>{[1, 2, 4]}</p> */}
        {/* <p>{"This is a Javascript expression"}</p> */}
        {/* <p>{{React cannot display an Object}}</p> */}
        {/* <p>{true == false}</p> React cannot display boolean value*/}

        <p>Today's random companion name is <strong>{handleRandomName()}</strong></p>
        <button onClick={handleClick}> Click Me! </button>
        <button onClick={() => handleClick2('Dave')}> Click Me Again! </button>
        <button onClick={(e) => handleClick3(e)}> Click Me Event! </button>
    </main>
  )
}

export default Content