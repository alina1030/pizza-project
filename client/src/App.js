import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import {BrowserRouter, Route, Link, Switch, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Ordersscreen from './screens/Ordersscreen';
import Adminscreen from './screens/Adminscreen';
import Pizzaslist from './screens/Pizzaslist';
import Addpizza from './screens/Addpizza';
import Editpizza from './screens/Editpizza';

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen/>}/>
        <Route path="/cart" element={<Cartscreen/>}/>
        <Route path="/register" element={<Registerscreen/>}/>
        <Route path="/login" element={<Loginscreen/>}/>
        <Route path="/orders" element={<Ordersscreen/>}/>
        <Route path="/admin" element={<Adminscreen/>}/>
        <Route path="/admin/pizzaslist" element={<Pizzaslist/>}/>
        <Route path="/admin/addpizza" element={<Addpizza/>}/>
        <Route path="/admin/editpizza/:pizzaid" element={<Editpizza/>}/>
        
       
      </Routes> 
      </BrowserRouter>
      
    </div>
  );
}

export default App;
