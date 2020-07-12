import React from "react";
import { connect } from "react-redux";
import { Table, Button } from 'react-bootstrap';
import { fruits, vegetables, nuts, reset, increment, decrement } from "../../actions";

const mapStateToProps = state => {
  return { productInventory: state.productInventory };
};

const mapDispatchToProps = { fruits, vegetables, nuts, reset, increment, decrement };

const Products = props => {
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
          {props.productInventory.products.map(product => (
            <tr key={product.name}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>
                <Button onClick={props.increment}>Add Too Cart</Button>
                <Button onClick={props.decrement}>Remove From Cart</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>Sort By Category</div>
      <Button onClick={props.fruits}>Fruits</Button>
      <Button onClick={props.vegetables}>Vegetables</Button>
      <Button onClick={props.nuts}>Nuts</Button>
      <Button onClick={props.reset}>Reset</Button>
    </section>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);