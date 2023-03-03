import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './modules/layout/Header';
import Owner from './modules/owners/Owner';
import Products from './modules/owners/Products';

function App() {
  return (
    <div className="App">
      <div className="row">
        <Header className="col-md-12" />
      </div>
        <Routes>
          <Route path='/' element={<Owner />}></Route>
          <Route path='/products' element={<Products />}></Route>
        </Routes>
    </div>
  );
}

export default App;
