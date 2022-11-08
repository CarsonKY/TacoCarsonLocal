// @ts-ignore
import axios from "axios";
// @ts-ignore

import Head from 'next/head'
// @ts-ignore
import Image from 'next/image'
import Featured from '../components/Featured'

import TacoList from '../components/TacoList'
import styles from '../styles/Home.module.css'



export default function Home({TacoList}) {
  return (
    <div className={styles.container}>
      {/* import JSX components */}
      
      <Head>
        <title>Taco Carson</title>
        <meta name="description" content="Best Tacos in Town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <TacoList TacoList={TacoList} />
      
      
    </div>
  )
}

// Server side rendering
export const getServerSideProps = async () =>{
  const res = await axios.get("http://localhost:3000/api/products");
  return{
    props:{
      TacoList:res.data,
    },
  };
};
