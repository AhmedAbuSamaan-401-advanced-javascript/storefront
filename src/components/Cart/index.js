import React from "react";
import { connect } from "react-redux";
import { reset, increment, decrement } from "../../actions";
import { Table, Button } from "react-bootstrap";

const mapStateToProps = state => {
  return { 
    cart: state.cartReducer,
  };
};

const mapDispatchToProps = { reset, increment, decrement };

const Cart = props => {
  return (
    <div>
        <div>Cart total items count: {props.cart.totalCount} </div> 
        <Table variant="sm" striped>
          <thead>
            <tr>
              <th>Name</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(props.cart.contents).map( (key) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{props.cart.contents[key]}</td>
                <td>
                  <Button onClick={() => {
                  props.decrement(key)}}
                  >Remove From Cart</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)