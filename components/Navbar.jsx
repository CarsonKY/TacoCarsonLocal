// @ts-nocheck
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {

  return (
    // Use Navbar.module.css for all styles

    <div className={styles.container}>
      <div className={styles.item}>
    {/* // phone icon */}
    <div className={styles.callButton}>
    <Image src="/img/tacoicon.png" alt="tacoicon" width="82" height="82" /> 
    </div>
    {/* menu links */}
    <div className={styles.texts}>
      <div className={styles.text}>Welcome To</div>
      <div className={styles.text}>TacoCarson.com!</div>
</div>
</div>
    <div className={styles.item}>
      <ul className={styles.list}>
      <li className={styles.listItem}><Link href="/">Home</Link></li>
      
      
      <li className={styles.listItem}><Link href="/#tacoListMap">Menu</Link></li>
      
      {<Image src="/img/taconavbarlogo.jpg" alt="logo" width="70px" height="50px" /> }
      
      <li className={styles.listItem}><span title="Future addon"><Link href="#">ORDER</Link></span></li>
      )
      {/* <Link href="/#featured`"></Link> */}
      
      <li className={styles.listItem}><Link href="/#footerMap">Contact</Link></li>
      
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