import React from "react";
import { Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { selectCategory, reset } from '../../actions'

const mapStateToProps = state => {
  return { categories: state.categories };
};

const mapDispatchToProps = { selectCategory, reset };

const Categories = props => {
  console.log('props categories',props.categories)
  return (
    <section className="Categories">
      <div>Filter By Category: {props.categories.selectedCategory}</div>
      {props.categories.categories.map(category => (
          <Button key={category.name} onClick={() => {
            props.selectCategory(category.name) }}>{category.name}</Button>
      ))}
      <Button onClick={props.reset}>Reset</Button>
    </section>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);