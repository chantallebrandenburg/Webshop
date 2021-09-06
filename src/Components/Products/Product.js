import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";

// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../redux/shopping/shopping-actions";

const Product = ({ product, addToCart, loadCurrentItem }) => {

  const classes = `${styles.product} product${product.id}`

  return (
    <>
    <div className={classes}>
    <Link to={`/Product/${product.id}`}>
      <img
       onClick={() => loadCurrentItem(product)}
        className={styles.product__image}
        src={product.image}
        alt={product.title}
      />
      </Link>

      <div className={styles.product__details}>
        <p className={styles.details__title}>{product.title}</p>
        <p className={styles.details__desc}>{product.description}</p>
        <p className={styles.details__price}> € {product.price}</p>

      <div className={styles.product__buttons}>
        <button
          onClick={() => addToCart(product.id)}
          className={`${styles.buttons__btn} ${styles.buttons__add}`}
        >
          Add To Cart
        </button>
        </div>
      </div>
    </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);