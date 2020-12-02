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

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <Router>
      <Header/>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen}></Burger>
        <Menu closeMenu={() => closeMenu} open={open} setOpen={setOpen}></Menu>
      </div>
      <div className={"content"}>
      <Switch>
          <Route path="/AboutMe" render={() => (<AboutMePage/>)} />
          <Route path="/Commissions" render={() => (<CommissionPage/>)} />
          <Route path="/ContactMe" render={() => (<ContactMePage/>)} />
          <Route path="/" render={() => (<HomePage/>)} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
