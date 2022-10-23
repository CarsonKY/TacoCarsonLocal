// @ts-nocheck
import Image from "next/image";
import styles from "../styles/Navbar.module.css"

const Featured = () => {
    const images = [
        "/img/featured.png",
        "/img/featured2.png",
        "/img/featured3.png",
    ];
  return (
    <div className={styles.container}>
    <Image src="/img/arrowl.png" width="512" height="512" alt="" />
    <div className={styles.wrapper}>
    <div className={styles.imgContainer}>
        {images.map((img, i)  => (
            <Image src="/img/featured.png" width="512" height="512" key={i} alt="" />
            

        ))}
    
    </div>
    </div>
    <Image src="/img/arrowr.png" width="512" height="512"alt="" />
    </div>
  )
}

export default Featured