// @ts-ignore
import axios from "axios";
// @ts-ignore

import Head from 'next/head'
// @ts-ignore
import Image from 'next/image'
import Featured from '../components/Featured'

import TacoList from '../components/TacoList'
import styles from '../styles/Home.module.css'
import { useState } from "react"



export default function Home({tacoList}) {
  return (
    <div className={styles.container}>
      {/* import JSX components */}
      
      <Head>
        <title>Taco Carson</title>
        <meta name="description" content="Best Tacos in Town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <TacoList tacoList={tacoList} />
      
      
    </div>
  )
}

// Server side rendering
export const getServerSideProps = async () =>{
  // const res = await axios.get("https://tacocarson.vercel.app");
  const res = await axios.get("https://tacocarson.vercel.app/api/products");
  return{
    props:{
      tacoList:res.data,
    },
  };
};
