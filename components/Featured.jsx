// @ts-nocheck
import Image from "next/image";
import styles from "../styles/Navbar.module.css"

// Create Array to load Featured images 
const Featured = () => {
    const images = [
        "/img/featured.png",
        "/img/featured2.png",
        "/img/featured3.png",
    ];
  return (
      // Create divs and load container wrapper and imgC styles from CSS
    <div className={styles.container}>
        <div className={styles.arrowContainer}>
    <Image src="/img/arrowl.png" alt="" layout='fill' />
    </div>
    <div className={styles.wrapper}>
    <div className={styles.imgContainer}>
        {images.map((img, i)  => (
            // images require width and height, workaround is layout fill for 100% width
            // No individual ids for images required so using index number for each child for the key

            <Image src="/img/featured.png" key={i} alt="" layout='fill'/>
            
        ))}
    
    </div>
    </div>
    <div className={styles.arrowContainer}>
    <Image src="/img/arrowr.png" width="512" height="512"alt="" />
    </div>
    </div>
  )
}

export default Featured