import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Table, Button } from 'react-bootstrap';
import * as actions from "../../actions";
import Auth from "../Auth"

const mapStateToProps = state => {
  // console.log('state',state)
  return { 
    products: state.productReducer,
    categories: state.categoryReducer
  };
};

const mapDispatchToProps = { 
  reset: actions.reset,
  addToCart: actions.addToCart,
  selectCategory: actions.selectCategory,
  fetchAllProducts: actions.fetchAllProducts,
  increment: actions.increment,
  decrement: actions.decrement
};

const Products = ({
  fetchAllProducts,
  products,
  categories,
  increment,
  decrement
}) => {

  const fetchData = () => {
    fetchAllProducts();
  };

  useEffect(() => fetchData(), []); //eslint-disable-line

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
          {products.list.map(product => (
            <tr key={product.name}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>
                <Auth>
                  <Button 
                    onClick={() => {
                      increment(product.name) }}
                      >Add Too Cart
                  </Button>
                </Auth>
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