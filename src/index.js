import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import ScrollToTop from './components/scrolltotop/ScrollToTop';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Switch>
      <Route path="/projects">
          <Projects/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path={["/home", "/"]}>
          <Home/>
        </Route>
      </Switch>
    </Router>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);