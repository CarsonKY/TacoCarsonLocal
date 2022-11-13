import styles from "../styles/Cart.module.css"
// @ts-ignore
import Image from "next/image";
import {useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";

// move everything from store to cart
const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <table className={styles.table}>
              <tr className={styles.tr}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              </tr>
              {cart.products.map(product=>(
              <tr className={styles.tr} key={product.id}>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src={product.img} 
                            layout="fill" 
                            objectFit="cover" 
                            alt=""></Image>
                        </div>
                    </td>
                    <td>
                        <span className={styles.name}>{product.title}</span>
                    </td>
                    <td>
                        <span className={styles.extras}>
                            {product.extras.map(extra=>(
                                <span key={extra._id}>{extra.text},</span>
                            ))}
                            
                        </span>
                    </td>
                    <td>
                        <span className={styles.price}>{product.prices}</span>
                    </td>
                    <td>
                        <span className={styles.quantity}>{product.quantity}</span>
                    </td>
                    <td>
                        <span className={styles.total}>${product.prices * product.quantity}</span>
                    </td>
              </tr>
              ))}
              </table>

        </div>
        <div className={styles.right}></div>
        <div className={styles.wrapper}>
            <h2 className={styles.title}>CART TOTAL</h2>
            <div className={styles.totalText}></div>
                <b className={styles.totalTextTitle}>Subtotal:</b>${cart.total}
                </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Tax:</b>{cart.total * .06}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>{cart.total * .06 + cart.total}
          </div>
          <button className={styles.button}>CHECKOUT! </button>
        </div>
      
  );
};

export default Cart;