// @ts-nocheck
import styles from "../styles/TacoList.module.css"
import TacoCard from "./TacoCard";
import Image from "next/image";


const TacoList = () => {
  return (
    <div className={styles.container}>
        <Image src="/img/tacocarsonwelcomesyou.PNG" alt="tacocarsonwelcomesyou" width="500px" height="150px" />
      
      <p className={styles.desc}>
          Best Tacos!  Come on In! Best Tacos!  Come on In! Best Tacos!  Come on In! Best Tacos!  Come on In! Best Tacos!  Come on In! Best Tacos!  Come on In! Best Tacos!  Come on In! Best Tacos!  Come on In! Best Tacos!  Come on In! 
      </p>
      <div className={styles.wrapper}>
          <TacoCard/>
          <TacoCard/>
          <TacoCard/>
          <TacoCard/>
          <TacoCard/>
          <TacoCard/>
      </div>
      </div>
  );
};

export default TacoList