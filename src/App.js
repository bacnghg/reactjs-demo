import logo from './logo.svg';
import './App.css';

function App() {

  const name = 'Bac'
  const age = 20;
  const isFemale = false;
  const student = {
    name: 'Backend'
  }
  const colorList = ['red', 'green', 'blue']

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bac Ng
        </p>
        <p>Xin chao {name} - {age} - {isFemale ? 'Male' : 'Female'}</p>
        {isFemale ? <p>Male</p> : <p>Female</p>}
        <p>{student.name}</p>

        <ul>
          {colorList.map(color => (
            <li key={color} style={{ color }}>{color}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
