import React from 'react';
import { Switch,Route } from 'react-router-dom';

import NavBar from '../NavBar';
import Contact from '../../StyleComponents/Contact';
import Home from '../../StyleComponents/Home';
import Cart from '../../StyleComponents/Cart';

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
      path:'/cart',
      text:'Cart',
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
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/cart'>
              <Cart />
            </Route>

          </Switch>
      </div>

    </div>
  )
}

export default App
