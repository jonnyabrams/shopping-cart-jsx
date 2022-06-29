import { useEffect, useState } from "react"
import { Button, Col, ListGroup, Row } from "react-bootstrap"
import { CartState } from "../context/Context"
import Rating from "./Rating"

const Cart = () => {

  const { state: { cart }, dispatch } = CartState()

  const [total, setTotal] = useState()

  useEffect(() => {
    setTotal(cart.reduce((acc, current) => acc + Number(current.price) * current.qty, 0))
  })
  
  return (
    <div className="home">
      <div className="product_container">
        <ListGroup>
          {
            cart.map((prod) => (
              <ListGroup.Item key={prod.id}>
                <Row>
                  <Col md={2}><span>{prod.name}</span></Col>
                  <Col md={2}><span>£{prod.price.split(".")[0]}</span></Col>
                  <Col md={2}><span><Rating rating={prod.ratings} /></span></Col>
                  
                </Row>
              </ListGroup.Item>
            ))
          }
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: £{total}</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to checkout
        </Button>
      </div>
    </div>
  )
}

export default Cart