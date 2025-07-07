import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';


function App() {
  return (
 
      <div className='App'>
           <BrowserRouter>
        <Nav/>
        <Routes>
          <Route element={<PrivateComponent />}>
          <Route path="/" element={<h1>Product listing component</h1>} />
          <Route path="/add" element={<h1> Add Product component</h1>} />
          <Route path="/update" element={<h1> Update Product component</h1>} />
          <Route path="/profile" element={<h1> Profile component</h1>} />
          <Route path="/logout" element={<h1> Logout component</h1>} />

          </Route>
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/add" element={<AddProduct />} />
          <Route path="/update" element={<UpdateProduct />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<Profile />} /> */}
        </Routes>
           </BrowserRouter>
               <Footer/>
      </div>
      
 

  );
}

export default App;
