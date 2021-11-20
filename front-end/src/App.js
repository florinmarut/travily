import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import HeroSection from './components/HeroSection';
import Login from './components/pages/Login';
import Feed from './components/pages/Feed';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<SignUp/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/posts' element={<Feed/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;