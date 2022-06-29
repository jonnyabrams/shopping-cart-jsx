import { CartState } from "../context/Context"
import SingleProduct from "./SingleProduct"
import './styles.css'

const Home = () => {
  // extra destructuring to get just the products from the state - just { state } would give us cart too
  const { state: { products } } = CartState()
  

  return (
    <div className="home">
      <div className="product_container">
        {
          products.map((product) => {
            return <SingleProduct product={product} key={ product.id } />
          })
        }
      </div>
    </div>
  )
}

export default Home