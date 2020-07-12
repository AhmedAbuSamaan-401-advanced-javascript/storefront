import React from "react";
import { connect } from "react-redux";
import { filter } from "../../reducers/categoryList";
import { fruits, vegetables, nuts, reset } from "../../reducers/productInventory";

const mapStateToProps = state => {
  return { categoryList: state.categoryList };
};

const mapDispatchToProps = { filter, fruits, vegetables, nuts, reset };

const Categories = props => {
  return (
    <section className="Product">
      {props.categoryList.categories.map(category => (
        <div key={category.name}>
          <button onClick={props.fruits}>{category.name}</button>
        </div>
      ))}
      <div>Sort By Category</div>
      <button onClick={props.reset}>Reset</button>
    </section>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);