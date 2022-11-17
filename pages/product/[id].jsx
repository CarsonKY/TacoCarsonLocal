import styles from "../../styles/Product.module.css";
// @ts-ignore
import Image from "next/image";
import { useState } from "react";
// @ts-ignore
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const Product = ({ tacos }) => {
  const [price, setPrice] = useState(tacos.prices[0]);
  
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  // const handleSize = (sizeIndex) => {
  //   const difference = tacos.prices[sizeIndex] - tacos.prices[size];
  //   setSize(sizeIndex);
  //   changePrice(difference);
  // };

  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

  const handleClick = () => {
    dispatch(addProduct({...tacos, extras, price, quantity}));
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={tacos.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{tacos.title}</h1>
        <span className={styles.price}>${tacos.prices}</span>
        <p className={styles.desc}>{tacos.desc}</p>
        
        
          
        
          
        
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          {tacos.extraOptions.map((option) => (
            <div className={styles.option} key={option._id}>
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                className={styles.checkbox}
                onChange={(e) => handleChange(e, option)}
              />
              <label htmlFor="double">{option.text}</label>
            </div>
          ))}
        </div>
        <div className={styles.add}>
          <input
            // @ts-ignore
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            defaultValue={1}
            className={styles.quantity}
          />
          <button className={styles.button} onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
      </div>
    
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `https://tacocarson.netlify.app/api/products/${params.id}`
    
  );
  return {
    props: {
      tacos: res.data,
    },
  };
};

export default Product;