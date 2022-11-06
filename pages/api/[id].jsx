// @ts-nocheck
import styles from "../../styles/Product.module.css"
import Image from "next/image";




const Product = () => {
    const taco = {
        id: 1,
        img: "/img/arrowl.jpg",
        name: "BEEF TACOS",
        price: [3.50],
        desc:"Beef Tacos", 
    
    };
  return <div className={styles.container}>
  <div className={styles.left}>
  <div className={styles.imgContainer}>
    <Image src={taco.img} layout="fill" objectFit="contain" alt=""/>

  </div>
    </div>
  <div className={styles.right}></div>;
    <h1 className={styles.title}>{taco.name}</h1>
    <span className={styles.price}>${taco.price}</span>
    <p className={styles.desc}>{taco.desc}</p>
    <h3 className={styles.choose}>Extra beef or cheese?</h3>
    <div className={styles.ingredients}>
    <div className={styles.option}>
        <input 
        type="checkbox" 
        id="extracheese" 
        name="extracheese" 
        className={styles.checkbox} />

    <label htmlFor="extrameat">Extra Meat</label>
    </div>
    <div className={styles.option}>
        <input 
        type="checkbox" 
        id="extrameat" 
        name="extrameat" 
        className={styles.checkbox} />

    <label htmlFor="extracheese">Extra Cheese</label>
    </div>
    <div className={styles.add}>
        <input type="number" defaultValue={1} className={styles.quantity}/>
        <button className={styles.button}>Add to Cart</button>
    </div>
    </div>
    </div>
 
 
};

export default Product;