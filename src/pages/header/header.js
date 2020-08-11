import React from 'react';

import { Navbar, Nav, NavItem, FormControl, Button } from 'react-bootstrap';
import { isAuth } from '../../helpers/auth';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './header.css';

const styles = {
  container: {
    width: "80%",
    margin: "0 auto",
  },
 navText: {
   color: 'white'
 }
};
const Header = ({login, cartItems, history}) => {


return(
    <React.Fragment>
          <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Soal Store</Navbar.Brand>
    <Nav className="mr-auto">

      <NavLink to="/user/dashboard" className="text-white">
          Home
      </NavLink>
      </Nav>
      <Nav>
      
      <NavLink to="/login" className="text-white">
          {login && login.length>0 ? 'Sign Out' : 'Sign In'}
      </NavLink>

      {login && login.length>0 ? 
      <NavLink to="/checkout" className="text-white">

          Cart: {cartItems.cartItems.length}
      </NavLink> : null}
        
    </Nav>
  </Navbar>
    </React.Fragment>
)

}

const mapStateToProps = state => ({
  login: state.login,
  cartItems: state.cart
});


export default connect(mapStateToProps, null)(Header);
