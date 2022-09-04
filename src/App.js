import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {

  const name = "Farhan";
  const handleRandomName =() =>{
    const names = ['Bob', 'Kevin', 'Farhan', 'Ronny'];
    const int = Math.floor(Math.random()*3);

    return names[int]
  }

  return (
    <div className="App">
      <Header></Header>
      
    </div>
  );
}

export default App;
