import { CartState } from "../context/Context"

const Home = () => {
  // extra destructuring to get just the products from the state - just { state } would give us cart too
  const { state: { products } } = CartState()
  

  return (
    <div className="product_container">
      {
        products.map((product) => {
          return <span>{ product.name }</span>
        })
      }
    </div>
  )
}

export default Home