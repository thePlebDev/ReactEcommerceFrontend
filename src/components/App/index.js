import React from 'react';
import { Switch,Route } from 'react-router-dom';

import NavBar from '../NavBar';
import About from '../../StyleComponents/About';
import Blog from '../../StyleComponents/Blog';
import Contact from '../../StyleComponents/Contact';
import Portfolio from '../../StyleComponents/Portfolio';
import Home from '../../StyleComponents/Home';

const App = ()=>{
  const navLinks = [
    {
      path:'/',
      text:'Home',
      icon:"fas fa-home"
    },
    {
      path:'/contact',
      text:'Contact',
      icon:'far fa-address-book'
    },

    {
      path:'/checkout',
      text:'Checkout',
      icon:"fas fa-shopping-cart"
    }

  ]


  return(
    <div>
      <NavBar navLinks={navLinks}/>
      <div className="main-app-container">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/blog'>
              <Blog />
            </Route>
            <Route path='/portfolio'>
              <Portfolio />
            </Route>
          </Switch>
      </div>

    </div>
  )
}

export default App
