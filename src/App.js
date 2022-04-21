import logo from './logo.svg';
import './App.css';
import Cards from './pages/Cards/Cards';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './pages/Nav/Nav';
import AddService from './pages/AddService/AddService';
import NotFound from './pages/NotFound/NotFound';
import Details from './pages/Details/Details';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer/Footer';
import HomePartOne from './pages/HomePartOne/HomePartOne';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Admin from './pages/Admin/Admin';
import MakeAdmin from './pages/MakeAdmin/MakeAdmin';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';


function App() {
  return (
    <div className="App">
      {/* <AuthProvider> */}
        <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<HomePartOne/>}></Route>
          <Route path="/home" element={<HomePartOne/>}></Route>
          {/* <Route path ="/" element={<Cards/>}></Route> */}
          <Route path ="/cards" element={<Cards/>}></Route>
          <Route path ="/details/:_id" element={<Details/>}></Route>
          <Route path ="/addService" element={<AddService/>}></Route>
          <Route path ="/contact" element={<Contact/>}></Route>
          <Route path ="/login" element={<Login/>}></Route>
          <Route path ="/register" element={<Register/>}></Route>
          <Route path ="/admin" element={<Admin/>}></Route>
          <Route path ="/makeadmin" element={<MakeAdmin/>}></Route>
          <Route path ="*" element={<NotFound/>}></Route>
        </Routes>
        <Footer/>
        </BrowserRouter>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
