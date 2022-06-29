import { CartState } from "../context/Context"

const Home = () => {

  // extra destructuring to get just the products from the state - just { state } would give us cart too
  const { state: { products } } = CartState()
  

  return (
    <div>Home</div>
  )
}

export default Home