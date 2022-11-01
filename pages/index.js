// @ts-ignore
import Head from 'next/head'
// @ts-ignore
import Image from 'next/image'
import Featured from '../components/Featured'
import TacoList from '../components/TacoList'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <div className={styles.container}>
      {/* import JSX components */}
      
      <Head>
        <title>Taco Carson</title>
        <meta name="description" content="Best Tacos in Town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <TacoList/>
      
      
    </div>
  )
}
