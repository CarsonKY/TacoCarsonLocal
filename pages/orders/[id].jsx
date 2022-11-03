// @ts-nocheck
import styles from "../styles/Order.module.css"
import Image from "next/image";


const Order = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.row}></div>
          <table className={styles.table}>
              <tr className={styles.tr}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
              </tr>
              <tr>
                    
                    <td>
                        <span className={styles.id}>129838582223</span>
                    </td>
                    <td>
                        <span className={styles.name}>
                            Tom Sawyer
                        </span>
                    </td>
                    <td>
                        <span className={styles.address}>2323 Country Lane, Hannibal MO</span>
                    </td>
                    
                    <td>
                        <span className={styles.total}>$7.00</span>
                    </td>
              </tr>
              </table>
          <div className={styles.row}></div>
        </div>
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
          <button disabled className={styles.button}>PAID!</button>
        </div>
      
        </div>
        </div>

    
  )
}

export default Order