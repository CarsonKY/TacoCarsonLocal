// @ts-nocheck
import styles from "../styles/TacoCard.module.css"
import Image from "next/image";




const TacoCard = () => {
  return (
    <div className={styles.container}>
        <Image src="/img/beeftacos.small.jpg" alt="" width="500" height="500"/>  
        <h1 className={styles.title}>Beef Tacos</h1>
        <span className={styles.price}> $3.50</span>
        <p className={styles.desc}>
        Our signature product.  Beef tacos filled with beef, lettuce and cheese on a flour tortilla
        </p>
        </div>
  )
}

export default TacoCard