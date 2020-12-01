import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, { useState, useRef } from 'react';

import { useOnClickOutside } from './services/services';

import AboutMePage from './pages/AboutMe/AboutMe'
import CommissionPage from './pages/Commission/Commission'
import ContactMePage from './pages/ContactMe/ContactMe'
import HomePage from './pages/Home/Home'

import Header from './components/Header/Header'
import Burger from './components/Burger/Burger'
import Menu from './components/Menu/Menu'

import './App.css';

function App() {
  const [open, setOpen] = useState(false);

  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));

  const closeMenu = (s) => {
    setOpen(false)
  }

  return (
    <Router>
      <Header/>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen}></Burger>
        <Menu closeMenu={() => closeMenu} open={open} setOpen={setOpen}></Menu>
      </div>
      <Switch>
        <Route path="/AboutMe"> <AboutMePage/> </Route>
        <Route path="/Commissions"> <CommissionPage/> </Route>
        <Route path="/ContactMe"> <ContactMePage/> </Route>
        <Route path="/"> <HomePage/> </Route>
      </Switch>
    </Router>
  );
}

export default App;
