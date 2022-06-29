import { Button, Form } from "react-bootstrap"
import { CartState } from "../context/Context"
import Rating from "./Rating"

const Filters = () => {

  const { filterState: { byStock, byFastDelivery, sort, byRating }, filterDispatch  } = CartState()

  console.log(byStock, byFastDelivery, sort, byRating)

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={byRating}
          onClick={(i) => 
            filterDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1
            }) 
          }
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button
        variant="light"
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters
