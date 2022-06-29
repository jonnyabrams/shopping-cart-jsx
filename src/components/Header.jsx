import { Link } from 'react-router-dom'
import { Container, FormControl, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
        <Container>
          <Navbar.Brand>
            <a href="">Shopping Cart</a>
          </Navbar.Brand>
          <Navbar.Text className="search">
            <FormControl style={{ width: 500 }} placeholder="Search for a product..." className="m-auto" />
          </Navbar.Text>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header