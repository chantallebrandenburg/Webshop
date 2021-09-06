import React from "react";
import styles from "./Products.module.css";
import "./Product.module.css";

// Redux
import { connect } from "react-redux";

import Product from "./Product";

const Products = ({ products }) => {
  return (
    <>
    <div className={styles.background_image}>
    <div className={styles.search}>
      <p className="makeup">Make Up / Face</p>
      <a href="https://www.w3schools.com">Lip Products </a>
      <a href="https://www.w3schools.com">Face Products </a>
      <a href="https://www.w3schools.com">Eye Products</a>
      <a href="https://www.w3schools.com">Brushes</a>
      <a href="https://www.w3schools.com">skin Products</a>
      <div className={styles.sale}>
       
      </div>
    </div>
    </div>
    <div className={styles.products}>
      {products.map((product) => (
        <Product className="myProduct" key={product.id} product={product} />
      ))}
    </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);