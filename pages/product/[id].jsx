import styles from "../../styles/Product.module.css";
// @ts-ignore
import Image from "next/image";
// @ts-ignore
import axios from "axios";



const Product = ({tacos}) => {
  
  
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={tacos.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{tacos.title}</h1>
        <span className={styles.prices}>${tacos.prices}</span>
        <p className={styles.desc}>{tacos.desc}</p>
        
        
        <h3 className={styles.choose}>Upgrade your item!</h3>
        
        <div className={styles.ingredients}>
        {tacos.extraOptions.map((option) => (
          <div className={styles.option} key={option._id}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">{option.text}</label>
          </div>
        ))}
        </div>
        <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity}/><b>How many?</b>
            <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

// Server side rendering fetching single product
export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      tacos: res.data,
    },
  };
};

export default Product;