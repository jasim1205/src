import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import About from './components/About/about';
import Classes from './components/Classes/classes';
import Teachers from './components/Teachers/teachers';
import Gallery from './components/Gallery/gallery';
import Contact from './components/Contact/contact';
import BlogGrid from './components/Pages/bloggrid';
import Blogdetail from './components/Pages/blogdetail';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/classes' element={<Classes />} />
        <Route path='/teachers' element={<Teachers />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/bloggrid' element={<BlogGrid />} />
        <Route path='/blogdetail' element={<Blogdetail />} />
      </Routes>
    </div>
  );
}

export default App;
