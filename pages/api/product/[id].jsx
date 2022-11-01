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
    </div>
 
};

export default [Product]