// @ts-nocheck
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      <Image src="/img/tacoicon.png" alt="tacoicon" width="82" height="82" /> 

    </div>
    <div className={styles.item}>
    <div className={styles.card}>
    <h2 className={styles.motto}>
       We take pride in what we do and it shows in our products
       </h2>
       </div>
    <div className={styles.card}></div>
    <div className={styles.card}></div>
    </div>
    </div>
  );
};

export default Footer;