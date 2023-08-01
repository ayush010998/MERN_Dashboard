
import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import Product from './components/Product';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes> 

        <Route element={<PrivateComponent/>}>
        <Route path='/' element={<Product/>}/>
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/update/:id' element={<UpdateProduct/>}/>
        <Route path='/logout' element={<h1>Logout Components</h1>}/>
        <Route path='/profile' element={<h1>Profile components</h1>}/>
        
        </Route>
        
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}></Route>
        
      </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}

export default App;
