import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';


import Home from './pages/Home';
import Cozinha from './pages/Cozinha';



const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact/>
      <Route component={Cozinha} path="/cozinha" exact/>

    </BrowserRouter>
  )
}

export default Routes;