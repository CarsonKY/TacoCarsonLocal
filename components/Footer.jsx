// @ts-nocheck
import styles from "../styles/Footer.module.css"
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      <Image src="/img/insidetacocarson.jpg"  layout="fill" alt="tacoicon" /> 

    </div>
    <div className={styles.item}>
    <div className={styles.card}>
    <h1 className={styles.title}>WE ARE EXCITED FOR YOUR VISIT</h1>
    <h2 className={styles.motto}>
       <br />We take pride in what we do and it shows in our products
       
       </h2>
    <h2 className={styles.thanks}>
    <br />Thank you for visiting TacoCarson.com!
      </h2>
       </div>

    <div className={styles.card}></div>
      {/* <h1 className={styles.title}>FIND US</h1> */}
      {/* <p className={styles.text}>
        <br />1001 W Main St
        <br />Louisville KY

      </p> */}
    <div className={styles.card}>
    <h1 className={styles.title}>HOURS OF OPERATION</h1>
    <p className={styles.text}>
        <br />Monday thru Friday
        <br />11 AM to 9 PM

      </p>
      <p className={styles.text}>
        <br />Saturday and Sunday
        <br />11 AM to 10 PM

      </p>
      
      
      <p className={styles.text}>
        <br />Call Us or Order Online!
        <br />502-585-5595

      </p>
    </div>
    </div>
    </div>
  );
};

export default Footer;