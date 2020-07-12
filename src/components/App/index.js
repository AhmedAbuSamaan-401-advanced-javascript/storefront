import React from "react";
import "./app.scss";
import { Provider } from "react-redux";
import { Container } from 'react-bootstrap';
import store from "../../store";
import Header from "./header";
import Footer from "./footer";
import Products from "../Products";
// import Categories from "../Categories";

export default function App() {
  return (
    <Provider store={store}>
      <Container className="App">
        <Header />
        <Products />
        <Footer />
      </Container>
    </Provider>
  );
}