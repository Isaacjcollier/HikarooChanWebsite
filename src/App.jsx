import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import AboutMePage from './pages/AboutMe/AboutMe'
import CommissionPage from './pages/Commission/Commission'
import ContactMePage from './pages/ContactMe/ContactMe'
import HomePage from './pages/Home/Home'

import Header from './components/Header/Header'

import './App.css';

function App() {
  return (
    <Router>
      <Header/>

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
