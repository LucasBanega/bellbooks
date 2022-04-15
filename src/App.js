import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Home from './pages';
import Nosotros from './pages/about';
import Libros from './pages/services';
import Contacto from './pages/contact';
import Registrarse from './pages/signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={<Home/>} />
        <Route path='/about' component={Nosotros} />
        <Route path='/libros' component={Libros} />
        <Route path='/contact-us' component={Contacto} />
        <Route path='/sign-up' component={Registrarse} />
      </Routes>
    </Router>
  );
}

export default App;