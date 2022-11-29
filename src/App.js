import logo from './logo.svg';
import './App.css';
import TodoFeature from './features/Todo/pages';
import AlbumFeature from './features/Album/pages';
import Counter from './components/Counter';
import ColorBox from './components/ColorBox';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect } from 'react';
import productApi from './api/productApi';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      }
      const productList = await productApi.getAll(params);
      console.log(productList);
    };

    const getP1 = async () => {
      const product1 = await productApi.get(13761499);
      console.log(product1.name);
    }

    fetchProducts();
    getP1();
  }, [])

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
      <p><Link to="/">Home</Link></p>
      <p>
        product1.name
      </p>

      {/* Sử dụng Link */}
      {/* <p><Link to="/">Home</Link></p>
      <p><Link to="/todos">Todos</Link></p>
      <p><Link to="/album">album</Link></p> */}

      {/* Sử dụng NavLink, sự khác nhau giữa Link/NavLink với thuộc tính activeClassName */}
      <p><NavLink to="/todos">Todos</NavLink></p>
      <p><NavLink to="/album" activeClassName='active-album'>album</NavLink></p>

      {/* Sự khác nhau giữa route và switch
      route sẽ match với tất cả, thằng nào khai báo cũng hiển thị
      sưitch thì sẽ match và hiển thị thằng đầu tiên, bỏ qua những thằng còn lại phía sau */}
      <Switch>
        <Route path="/todos" component={TodoFeature} />
        <Route path="/album" component={AlbumFeature} />
      </Switch>
{/* 
      <Route path="/todos" component={TodoFeature} />
      <Route path="/album" component={AlbumFeature} /> */}
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
