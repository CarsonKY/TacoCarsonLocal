// @ts-nocheck
import styles from "../styles/Product.module.css"
import Image from "next/image";
import TacoList from "../../../components/TacoList";



const Product = () => {
    const taco = {
        id: 1,
        img: "/img/beeftacos.small.jpg",
        name: "BEEF TACOS",
        price: [3.50],
        desc:"Beef Tacos", 
    
    };
  return <div className={styles.container}>;
  <div className={styles.left}>;
  <div className={styles.imgContainer}>
    <Image src={tacos.img} layout="fill" alt=""/>

  </div>
    </div>
  <div className={styles.right}></div>;
    </div>
 
 
};

export default Product;