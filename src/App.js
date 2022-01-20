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


function App() {
  return (
    <div className="App">
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
        <Route path ="*" element={<NotFound/>}></Route>
      </Routes>
       <Footer/>
      </BrowserRouter>
      {/* <Cards></Cards> */}
    </div>
  );
}

export default App;
