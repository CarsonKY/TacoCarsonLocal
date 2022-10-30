import styles from "../styles/TacoList.module.css"
import TacoCard from "./TacoCard";

const TacoList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>TACO CARSON WELCOMES YOU</h1>
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