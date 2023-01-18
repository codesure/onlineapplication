import Image from "next/image"
import styles from "../styles/Footer.module.css";


function Footer() {
  return (
    <div className={styles.container}>
     <div className={styles.item}>
      <Image src="/img/sunset.jpg" layout="fill" objectFit="cover" alt=""/>
     </div>

     <div className={styles.item}>
     <div className={styles.card}>
      <h2 className={styles.motto}>OH YES WE DID THE PIZZA</h2>
     </div>

     <div className={styles.card}>
      <h1 className={styles.title}>FIND OUR RESTUARANT</h1>
     
     

      <p className={styles.text}>
        1645 R. Don Road #304
        <br/>NewYork,18442
        <br/>(602) 867-1010
      </p>

      <p className={styles.text}>
        1645 R. Don Road #304
        <br/>NewYork,18442
        <br/>(602) 867-1010
      </p>

      <p className={styles.text}>
        1645 R. Don Road #304
        <br/>NewYork,18442
        <br/>(602) 867-1010
      </p>

      <p className={styles.text}>
        1645 R. Don Road #304
        <br/>NewYork,18442
        <br/>(602) 867-1010
      </p>
      </div>

      <div className={styles.card}>
      <h1 className={styles.title}>WORKING HOURS</h1>
        <p className={styles.text}>
          MONDAY UNTIL FRIDAY
          <br/>9:00 - 22:00
        </p>
        <p className={styles.text}>
        SATURDAY - SUNDAY
          <br/>12:00 - 22:00
        </p>
      </div>
     </div>
      </div>
  )
}

export default Footer

// {ended at creating product and cart page 50:10}