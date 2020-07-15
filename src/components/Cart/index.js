import React from "react";
import { connect } from "react-redux";
import { reset, increment, decrement } from "../../actions";
import { Table } from "react-bootstrap";

const mapStateToProps = state => {
    return { 
      cart: state.cart,
    };
  };

  const mapDispatchToProps = { reset, increment, decrement };

const Cart = props => {
  console.log('cart comp',props.cart.contents)
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
              </tr>
            ))}
          </tbody>
        </Table>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)