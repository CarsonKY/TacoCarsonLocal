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
    <Image src="/img/phone.png" alt="phone" width="32" height="32" />
    </div>
    {/* menu links */}
    <div className={styles.texts}>
      <div className={styles.text}>PLACE ORDER</div>
      <div className={styles.text}>502 555 5961</div>
</div>
</div>
    <div className={styles.item}>
      <ul className={styles.list}>
      <li className={styles.listItem}>Homepage</li>
      <li className={styles.listItem}>Products</li>
      <li className={styles.listItem}>Menu</li>
      <Image src="/img/purplescheme.jpg" alt="logo" width="160px" height="70px" />
      <li className={styles.listItem}>Specials</li>
      <li className={styles.listItem}>Blog</li>
      <li className={styles.listItem}>Contact</li>
      </ul>
    </div>
    <div className={styles.item}>Temporary</div>
    </div>
  );
};

export default Navbar