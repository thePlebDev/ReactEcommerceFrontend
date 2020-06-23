import React from 'react';
import { Switch,Route } from 'react-router-dom';

import NavBar from '../NavBar';
import About from '../../StyleComponents/About';
import Blog from '../../StyleComponents/Blog';
import Contact from '../../StyleComponents/Contact';
import Portfolio from '../../StyleComponents/Portfolio';

const App = ()=>{
  const navLinks=[
    {
      text: 'Home',
      path:'/'
    },
    {
      text: 'About',
      path:'/about'
    },
    {
      text: 'Blog',
      path:'/blog'
    },
    {
      text: 'Contact',
      path:'/contact'
    },
    {
      text: 'Portfolio',
      path:'/portfolio'
    },
  ]

  return(
    <div>
      <NavBar navLinks={navLinks} />
      <Switch>
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
