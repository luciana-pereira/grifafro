import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header.js';
import Home from './Page/Home/Home.js';
import NotFound from './Page/NotFound/NotFound';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="*" exact component={NotFound}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
