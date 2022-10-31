// @ts-nocheck
import Image from "next/image";
import styles from "../styles/Navbar.module.css"

const Navbar = () => {

  return (
    // Use Navbar.module.css for all styles

    <div className={styles.container}>
      <div className={styles.item}>
    {/* // phone icon */}
    <div className={styles.callButton}>
    <Image src="/img/tacoicon.png" alt="phone" width="82" height="82" /> */
    </div>
    {/* menu links */}
    <div className={styles.texts}>
      <div className={styles.text}>Welcome To</div>
      <div className={styles.text}>TacoCarson.com!</div>
</div>
</div>
    <div className={styles.item}>
      <ul className={styles.list}>
      <li className={styles.listItem}><span>Home</span></li>
      {/* <li className={styles.listItem}>Products</li> */}
      <li className={styles.listItem}><span>Menu</span></li>
      {<Image src="/img/taconavbarlogo.jpg" alt="logo" width="60px" height="40px" /> }
      {/* <li className={styles.listItem}>Specials</li> */}
      <li className={styles.listItem}><span>ORDER</span></li>
      <li className={styles.listItem}><span>Contact</span></li>
      </ul>
    </div>
    <div className={styles.item}>
      <div className={styles.cart}>
      
        {/* find shopping cart icon here */}
      <Image src="/img/purplescheme.jpg" alt="shoppingcart" width="30px" height="30px" />
      <div className={styles.counter}>0</div>
    
      </div>
    </div>
    </div>
  );
};

export default Navbar