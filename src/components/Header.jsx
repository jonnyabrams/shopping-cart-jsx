import { Link } from 'react-router-dom'
import { Container, FormControl, Navbar, Dropdown, Nav, Badge } from 'react-bootstrap'
import { FaShoppingCart } from "react-icons/fa"
import { CartState } from '../context/Context'

const Header = () => {

  const { state: { cart } } = CartState()

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl style={{ width: 500 }} placeholder="Search for a product..." className="m-auto" />
        </Navbar.Text>
        <Nav>
          <Dropdown alignright>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              <span style={{ padding: 10 }}>Cart is empty!</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header