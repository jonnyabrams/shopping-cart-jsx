import { useEffect, useState } from "react"
import { Button, ListGroup } from "react-bootstrap"
import { CartState } from "../context/Context"

const Cart = () => {

  const { state: { cart }, dispatch } = CartState()

  const [total, setTotal] = useState()

  useEffect(() => {
    setTotal(cart.reduce((acc, current) => acc + Number(current.price), 0))
  })
  
  return (
    <div className="home">
      <div className="product_container">
        <ListGroup>
          {
            cart.map((prod) => (
              <span>{prod.name}</span>
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