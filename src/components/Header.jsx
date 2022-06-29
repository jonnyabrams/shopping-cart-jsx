import { Link } from 'react-router-dom'
import { Container, FormControl, Navbar, Dropdown, Nav, Badge, Button } from 'react-bootstrap'
import { FaShoppingCart } from "react-icons/fa"
import { AiFillDelete } from "react-icons/ai"
import { CartState } from '../context/Context'

const Header = () => {

  const { state: { cart }, dispatch, filterDispatch } = CartState()

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl 
            style={{ width: 500 }} 
            placeholder="Search for a product..." 
            className="m-auto" 
            onChange={(e) => {
              filterDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value
              })
            }}
          />
        </Navbar.Text>
        <Nav>
          <Dropdown alignright>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
 
              { cart.length > 0 ? (
                <>
                  {
                    cart.map((prod) => (
                      <span className="cart_item" key={prod.id}>
                        <img src={prod.image} className="cart_item_img" alt={prod.name} />
                        <div className="cart_item_detail">
                          <span>{prod.name}</span>
                          <span>£{prod.price.split(".")[0]}</span>
                        </div>
                        <AiFillDelete 
                          fontSize="20px" 
                          style={{ cursor: "pointer" }} 
                          onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: prod })}
                        />
                      </span>
                    ))
                  }
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go to cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is empty!</span>
              ) }

            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header