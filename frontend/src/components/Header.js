import { Navbar, Nav, Container, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {LinkContainer} from "react-router-bootstrap"
import { FaShoppingCart, FaUser } from 'react-icons/fa';
const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
        <Container>
          <LinkContainer to="/">
          <Navbar.Brand>ProShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
             <LinkContainer to="/cart"  style={{color:"white", textDecoration:"none", margin:"5px"}}>
              <Link >
              <FaShoppingCart /> Cart </Link>
              </LinkContainer>
             <LinkContainer to="/login"  style={{color:"white", textDecoration:"none", margin:"5px"}} >
              <Link>
               <FaUser /> Sign In </Link>
               </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;