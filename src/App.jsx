import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/menu';
import {dishes} from './shared/dishes.json';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes
    };
  }

  render(){
    return (
      <div>
        <Navbar dark color='dark'>
          <div className='container'>
            <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu platos={this.state.dishes} />
      </div>
    );
  }
}

export default App;