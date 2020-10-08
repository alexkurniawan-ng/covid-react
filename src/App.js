import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavbarComp from './component/navbar';
import Home from './pages/homePages'
import Province from './pages/provincePages';
import NotFound from './pages/404NotFound';
import Countries from './pages/countryPages';
import CountriesDetail from './pages/countriesDetail';
import FooterComp from './component/footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <NavbarComp />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/province" component={Province} />
          <Route path="/countries" component={Countries} />
          {/* Menerapkan parameter pada path route */}
          <Route path="/countries-detail/:countries/:iso" component={CountriesDetail} />
          <Route path="*" component={NotFound} />
        </Switch>
        <FooterComp />
      </div>
     );
  }
}
 
export default App;
