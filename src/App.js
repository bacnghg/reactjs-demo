import logo from './logo.svg';
import './App.css';
import TodoFeature from './features/Todo/pages';
import AlbumFeature from './features/Album/pages';
import Counter from './components/Counter';
import ColorBox from './components/ColorBox';
import { Link, NavLink, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  // const name = 'Bac'
  // const age = 20;
  // const isFemale = false;
  // const student = {
  //   name: 'Backend'
  // }
  // const colorList = ['red', 'green', 'blue']

  return (
    <div className="App">
      HomePage 
      Header
      <Header/>

      {/* Sử dụng Link */}
      <p><Link to="/">Home</Link></p>
      <p><Link to="/todos">Todos</Link></p>
      <p><Link to="/album">album</Link></p>

      {/* Sử dụng NavLink, sự khác nhau giữa Link/NavLink với thuộc tính activeClassName */}
      <p><NavLink to="/todos">Todos</NavLink></p>
      <p><NavLink to="/album" activeClassName='active-album'>album</NavLink></p>

      <Route path="/todos" component={TodoFeature} />
      <Route path="/album" component={AlbumFeature} />
      <Footer/>
      {/* <AlbumFeature/>

      <Counter/>
      <ColorBox/> */}
      {/* < TodoFeature /> */}
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
