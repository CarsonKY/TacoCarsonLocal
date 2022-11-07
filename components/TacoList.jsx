// @ts-nocheck
import styles from "../styles/TacoList.module.css";
import tacoCard from "./tacoCard";
import Image from "next/image";


const TacoList = ({tacoList}) => {
  return (
    <div className={styles.container}>
        <Image src="/img/tacocarsonwelcomesyou.PNG" alt="tacocarsonwelcomesyou" width="500px" height="150px" />
      
      <p className={styles.desc}>
          We have the best Mexican food in town!
          
          
      </p>
      <div id="tacoList" className={styles.wrapper}>
          {tacoList.map((tacos) => (
          <tacoCard key={tacos._id} tacos={tacos}/>
          ))}
          
      </div>
      </div>
  );
};

export default TacoList;


