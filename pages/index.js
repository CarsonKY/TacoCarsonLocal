import Head from 'next/head'
import Image from 'next/image'
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
      Hello 
      <Image src="/img/logo.png" width="320" height="138" alt= ""/>
      
    </div>
  )
}
