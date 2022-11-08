// @ts-nocheck
import styles from "../styles/TacoCard.module.css"
import Image from "next/image";




const TacoCard = ({ tacos }) => {
  return (
    <div className={styles.container}>
        <Image src={tacos.img} alt="" width="500" height="500"/>  
        <h1 className={styles.title}>{tacos.title}</h1>
        <span className={styles.prices}> ${tacos.prices}</span>
        <p className={styles.desc}>{tacos.desc} 
        </p>
        </div>
  );
};

export default TacoCard;