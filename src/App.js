import logo from './logo.svg';
import './App.css';
import Cards from './pages/Cards/Cards';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddService from './pages/AddService/AddService';
import NotFound from './pages/NotFound/NotFound';
import Details from './pages/Details/Details';
import Contact from './pages/Contact/Contact';
import HomePartOne from './pages/HomePartOne/HomePartOne';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Admin from './pages/Admin/Admin';
import Booking from './pages/Booking/Booking';
import Review from './pages/Review/Review';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Pay from './pages/Pay/Pay';
import Book from './pages/Book/Book';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        {/* <Nav></Nav> */}
        <Routes>
        {/* <Route path="/" element={<App />}> */}
          <Route path="/" element={<HomePartOne/>}></Route>
          <Route path="/home" element={<HomePartOne/>}></Route>
          <Route path ="/cards" element={<Cards/>}></Route>
          <Route path ="/details/:_id" element={<Details/>}></Route>
          <Route path ="/contact" element={<Contact/>}></Route>
          <Route path ="/login" element={<Login/>}></Route>
          <Route path ="/register" element={<Register/>}></Route>
          <Route path ="/admin" element={<PrivateRoute><Admin/></PrivateRoute>}></Route>
          <Route path ={`/admin/admin/booking`} element={<PrivateRoute><Booking/></PrivateRoute>}></Route>
          <Route path ={`/admin/admin/book`} element={<PrivateRoute><Book/></PrivateRoute>}></Route>
          <Route path ={`/admin/admin/review`} element={<PrivateRoute><Review/></PrivateRoute>}></Route>
          <Route path ={"/admin/admin/addService"} element={<PrivateRoute><AddService/></PrivateRoute>}></Route>
          <Route path ={"/admin/admin/pay/:_id"} element={<PrivateRoute><Pay/></PrivateRoute>}></Route>
       

          <Route path ="*" element={<NotFound/>}></Route>
        </Routes>
        {/* <Footer/> */}
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
