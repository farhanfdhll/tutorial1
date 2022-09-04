import logo from './logo.svg';
import './App.css';

function App() {

  const name = "Farhan";
  const handleRandomName =() =>{
    const names = ['Bob', 'Kevin', 'Farhan', 'Ronny'];
    const int = Math.floor(Math.random()*3);

    return names[int]
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     
        <p>My name is <strong>{name}</strong></p>
        {/* <p>{[1, 2, 4]}</p> */}
        {/* <p>{"This is a Javascript expression"}</p> */}
        {/* <p>{{React cannot display an Object}}</p> */}
        {/* <p>{true == false}</p> React cannot display boolean value*/}

        <p>Today's random name is <strong>{handleRandomName()}</strong></p>
      </header>
      
    </div>
  );
}

export default App;
