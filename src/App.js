
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import FavProducts from './components/FavProducts'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/favProducts' element={<FavProducts />}></Route>
        </Routes> 
      
    </>
  );
}

export default App;
