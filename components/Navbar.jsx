// @ts-nocheck
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {

 const quantity = useSelector(state=>state.cart.quantity)

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
      
      <li className={styles.listItem}><span title="Future addon"><Link href="/cart">Order</Link></span></li>
      
      
      
      <li className={styles.listItem}><Link href="/#footerMap">Contact</Link></li>
      
      </ul>
      
    </div>
    <Link href="/cart" passHref>
    <div className={styles.item}>
      <div className={styles.cart}>
      
        {/* find shopping cart icon here */}
      <Image src="/img/cart.png" alt="shoppingcart" width="30px" height="30px" />
      <div className={styles.counter}>{quantity}</div>
    
      </div>
    </div>
    </Link>
    </div>
  );
};

export default Navbar