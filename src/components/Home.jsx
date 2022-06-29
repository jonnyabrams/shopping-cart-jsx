import { CartState } from "../context/Context"
import Filters from "./Filters"
import SingleProduct from "./SingleProduct"
import './styles.css'

const Home = () => {
  // extra destructuring to get just the products from the state - just { state } would give us cart too
  const { 
    state: { products },
    filterState: { sort, byStock, byFastDelivery, byRating, searchQuery }
  } = CartState()

  const transformProducts = () => {
    let sortedProducts = products

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) => 
        sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
      )
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock)
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery)
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter((prod) => prod.ratings >= byRating)
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuery))
    }
    return sortedProducts
  }

  return (
    <div className="home">
      <Filters />
      <div className="product_container">
        {transformProducts().map((prod) => (
          <SingleProduct product={prod} key={prod.id} />
        ))}
      </div>
    </div>
  )
}

export default Home