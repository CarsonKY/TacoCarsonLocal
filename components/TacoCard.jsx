// @ts-nocheck
import styles from "../styles/TacoCard.module.css"
import Image from "next/image";




const TacoCard = (pizza) => {
  return (
    <div className={styles.container}>
        <Image src={tacos.img} alt="" width="500" height="500"/>  
        <h1 className={styles.title}>{tacos.title}</h1>
        <span className={styles.price}> ${tacos.prices}</span>
        <p className={styles.desc}>
      Flour tortillias filled with beef, lettuce and cheese
        </p>
        </div>
  )
}

export default TacoCard