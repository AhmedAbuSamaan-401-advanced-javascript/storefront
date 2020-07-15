import React from "react";
import "./app.scss";
import { Provider } from "react-redux";
import { Container } from 'react-bootstrap';
import store from "../../store";
import Header from "./header";
import Footer from "./footer";
import Products from "../Products";
import Categories from "../Categories";
import Cart from "../Cart"
import Login from "../Login";
import Auth from '../Auth'

export default function App() {
  return (
    <Provider store={store}>
      <Container className="App">
        <Header />
        <Login />
        <Products />
        <Categories />
        <Auth>
          <Cart />
        </Auth>
        <Footer />
      </Container>
    </Provider>
  );
}