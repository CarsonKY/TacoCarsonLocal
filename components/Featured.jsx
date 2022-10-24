// @ts-nocheck
import Image from "next/image";
import styles from "../styles/Featured.module.css"

// Create Array to load Featured images 
// Project requirement
const Featured = () => {
    // Usestate hook to rotate images starting with first image
    const [index, setIndex] = useState(0)
    const images = [
        "/img/featured.png",
        "/img/featured2.png",
        "/img/featured3.png",
    ];
// Conditional rendering when arrow is pressed for picture scrolling
    const handleArrow = (direction) =>{
        if(direction==="l"){
            setIndex(index !== 0 ? index-1 : 2)
        }
            if(direction==="r"){
                setIndex(index !== 2 ? index+1 : 0
        )
    }
  return (
    // images require width and height, workaround is layout fill for 100% width
      // Create divs and load container wrapper and imgC styles from CSS
    <div className={styles.container}>
    {/* Initialize handleArrow which keeps track of which image to display */}
     
        <div className={styles.arrowContainer} style={{left:0}} onClick={()=>handleArrow("l")}>
    <Image src="/img/arrowl.png" alt="" layout='fill' objectFit="contain"/>
    </div>
    <div className={styles.wrapper}>
            {/* No individual ids for images required so using index number for each child for the key */}
        {images.map((img, i)  => (
            <div className={styles.imgContainer} key={i}>
             <Image src={img}  alt="" layout='fill'  objectFit="contain"/>
            </div>
            
        ))}
    
    
    </div>
    <div className={styles.arrowContainer} style={{right:0}} onClick={()=>handleArrow("r")}>
    <Image src="/img/arrowr.png" alt="" layout='fill'/>
    </div>
    </div>
  )
}

export default Featured