// @ts-nocheck
import Image from "next/image";
import styles from "../styles/Featured.module.css"

// Create Array to load Featured images 
// Project requirement
const Featured = () => {
    const images = [
        "/img/featured.png",
        "/img/featured2.png",
        "/img/featured3.png",
    ];
  return (
    // images require width and height, workaround is layout fill for 100% width
      // Create divs and load container wrapper and imgC styles from CSS
    <div className={styles.container}>
     
        <div className={styles.arrowContainer} style={{left:0}}>
    <Image src="/img/arrowl.png" alt="" layout='fill' />
    </div>
    <div className={styles.wrapper}>
            {/* No individual ids for images required so using index number for each child for the key */}
        {images.map((img, i)  => (
            <div className={styles.imgContainer} key={i}>
             <Image src={img}  alt="" layout='fill'  objectFit="contain"/>
            </div>
            
        ))}
    
    
    </div>
    <div className={styles.arrowContainer} style={{right:0}}>
    <Image src="/img/arrowr.png" alt="" layout='fill'/>
    </div>
    </div>
  )
}

export default Featured