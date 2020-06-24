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
      path:'/blog',
      text:'Blog',
      icon:'fas fa-blog'
    },
    {
      path:'/contact',
      text:'Contact',
      icon:'far fa-address-book'
    },
    {
      path:'/portfolio',
      text:'Portfolio',
      icon:"fas fa-portrait"
    },
    {
      path:'/about',
      text:'About',
      icon:"fas fa-address-card"
    },
  ]


  return(
    <div>
      <NavBar navLinks={navLinks}/>
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
  )
}

export default App
