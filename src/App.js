import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

import Items from './components/DisplayItems';


function App() {
  return (
    <div >
      <Navbar dark color="primary">
        <NavbarBrand href="/">RajiSS</NavbarBrand>
      </Navbar>
      <Items />
    </div>
   
  );
}

export default App;
