import styles from "../styles/Cart.module.css"
// @ts-ignore
import Image from "next/image";

const Cart = () => {
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
              <tr>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="/img/beeftacos.large.jpg" 
                            layout="fill" 
                            objectFit="cover" 
                            alt=""></Image>
                        </div>
                    </td>
                    <td>
                        <span className={styles.name}>BEEF TACOS</span>
                    </td>
                    <td>
                        <span className={styles.extras}>
                            Double meat, Extra Cheese
                        </span>
                    </td>
                    <td>
                        <span className={styles.price}>$3.50</span>
                    </td>
                    <td>
                        <span className={styles.quantity}>2</span>
                    </td>
                    <td>
                        <span className={styles.total}>$7.00</span>
                    </td>
              </tr>
              </table>

        </div>
        <div className={styles.right}></div>


    </div>
  )
}

export default Cart