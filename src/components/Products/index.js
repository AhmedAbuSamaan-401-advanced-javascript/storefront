import React from "react";
import { connect } from "react-redux";
import { Table, Button } from 'react-bootstrap';
import * as actions from "../../actions";
const mapStateToProps = state => {
  // console.log('mstp in products',state)
  return { products: state.products };
};
const mapDispatchToProps = {
  fruits: actions.fruits,
  vegetables: actions.vegetables,
  nuts: actions.nuts,
  reset: actions.reset,
  addToCart: actions.addToCart,
  selectCategory: actions.selectCategory,
  increment: actions.increment,
  decrement: actions.decrement
};

const Products = props => {
  // console.log('in Prod compo',props.products)
  return (
    <section className="Product">
      <Table variant="sm" striped bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map(product => (
            <tr key={product.name}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>
                <Button
                  onClick={() => {
                    props.increment(product.name)
                  }}
                >Add Too Cart
                </Button>
                <Button onClick={() => {
                  props.decrement(product.name)
                }}
                >Remove From Cart</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);