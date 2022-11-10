// @ts-nocheck
import styles from "../styles/TacoList.module.css";
import TacoCard from "./TacoCard";
import Image from "next/image";


const TacoList = ({tacoList}) => {
  return (
    <div id="tacoListMap" className={styles.container}>
        <Image src="/img/tacocarsonwelcomesyou.PNG" alt="tacocarsonwelcomesyou" width="500px" height="150px" />
      
      {/* <p className={styles.desc}>
          We have the best Mexican food in town!
                  
          
      </p> */}
      <p>
      <Image src="/img/clickitemtoorder.PNG" alt="clickimage" width="500px" height="150px" />
      </p>
      <div id="tacoListid" className={styles.wrapper}>
          {tacoList.map((tacos) => {
            return (
              <TacoCard key={tacos._id} tacos={tacos} />
            );
          })}
          
      </div>
      </div>
  );
};

export default TacoList;


