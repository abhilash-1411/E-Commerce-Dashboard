import './App.css';
import Nav from './Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Nav/>
        <Routes>
          <Route path="/" element={<h1>Product listing component</h1>} />
          <Route path="/add" element={<h1> Add Product component</h1>} />
          <Route path="/update" element={<h1> Update Product component</h1>} />
          <Route path="/profile" element={<h1> Profile component</h1>} />
          <Route path="/logout" element={<h1> Logout component</h1>} />
          {/* <Route path="/add" element={<AddProduct />} />
          <Route path="/update" element={<UpdateProduct />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
