import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';


function App() {
  return (
 
      <div className='App'>
           <BrowserRouter>
        <Nav/>
        <Routes>
          <Route element={<PrivateComponent />}>
          <Route path="/" element={<ProductList/>} />
          <Route path="/add" element={<AddProduct /> } />
          <Route path="/update/:id" element={<UpdateProduct />} />
          <Route path="/profile" element={<h1> Profile component</h1>} />
          <Route path="/logout" element={<Login/>} />
            
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} /> 
        </Routes>
           </BrowserRouter>
               <Footer/>
      </div>
      
 

  );
}

export default App;
