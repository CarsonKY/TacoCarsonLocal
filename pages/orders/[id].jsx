// @ts-nocheck
import styles from "../styles/Order.module.css"
import Image from "next/image";


const Order = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}></div>
        <div className={styles.right}>
        <div className={styles.wrapper}>
            <h2 className={styles.title}>CART TOTAL</h2>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Subtotal:</b>$7.00
                </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Tax:</b>$0.42
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$7.42
          </div>
          <button disabled className={styles.button}>CHECKOUT!</button>
        </div>
      
        </div>
        </div>

    
  )
}

export default Order