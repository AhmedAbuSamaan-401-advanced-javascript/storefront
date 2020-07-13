import React from "react";
import "./app.scss";
import { Provider } from "react-redux";
import { Container } from 'react-bootstrap';
import store from "../../store";
import Header from "./header";
import Footer from "./footer";
import Products from "../Products";
import Categories from "../Categories";
import Cart from "../Cart";

export default function App() {
  return (
    <Provider store={store}>
      <Container className="App">
        <Header />
        <Products />
        <Categories />
        <Cart />
        <Footer />
      </Container>
    </Provider>
  );
}