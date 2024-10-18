import { Navbar, Nav, Container, Badge} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {LinkContainer} from "react-router-bootstrap"
import {useSelector} from 'react-redux'
import { FaShoppingCart, FaUser } from 'react-icons/fa';
const Header = () => {


  const {cartItems} = useSelector((state) => state.cart)
  // console.log(cartItems)//

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
        <Container>
          <LinkContainer to="/">
          <Navbar.Brand>ProShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav' style={{justifyContent:"end"}}>
            <Nav >
             <LinkContainer to="/cart"  style={{color:"white", textDecoration:"none", margin:"5px"}}>
              <Link >
              <FaShoppingCart /> Cart
                {
                  cartItems.length > 0 && (
                    <Badge pill bg='success' style={{marginLeft:'5px'}}>
                      {cartItems.reduce((a, c) => a + c.qty, 0)}
                    </Badge>
                  )
                }
               </Link>
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