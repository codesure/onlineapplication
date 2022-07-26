import styles from '../styles/Navbar.module.css'
import Image from 'next/image'

const Navbar= ()=> {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/sdaLogo.jpg" alt='' width='32px' height='32px'  />
        </div>
        <div className={styles.texts}>
        <div className={styles.text}>ORDER NOW!</div>
        <div className={styles.text}>+263 000 000</div>
        </div>
        </div>
        <div className={styles.item}>
          <ul className={styles.list}>
            <li className={styles.listItem}>Homepage</li>
            <li className={styles.listItem}>Products</li>
            <li className={styles.listItem}>Menu</li>
            <Image src='/img/logomastra.png' alt='' width='100px' height='80px' layout="intrinsic"/>
            <li className={styles.listItem}>Events</li>
            <li className={styles.listItem}>Blog</li>
            <li className={styles.listItem}>Contact</li>
            </ul>
        </div>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src='/img/cart.png' alt='' width='30px' height='30px' />
            <div className={styles.counter}>2</div>
         </div>       
        </div>
      </div>
  )
}

export default Navbar