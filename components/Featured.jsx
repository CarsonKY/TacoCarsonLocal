// @ts-nocheck
import Image from "next/image";
import styles from "../styles/Navbar.module.css"

const Featured = () => {
    const images = [
        "/img/featured.png"
        "/img/featured2.png"
        "/img/featured3.png"
    ];
  return (
    <div className={styles.container}>
    <Image src="/img/arrowl.png" alt="" />
    <div className={styles.wrapper}>
    <div className={styles.imgContainer}>
        {images.map(img)  => (
            (Img/featured.png" alt="" />

        ))}
    <Image src="/img/featured.png" alt="" />
    </div>
    </div>
    <Image src="/img/arrowr.png" alt="" />
    </div>
  )
}

export default Featured