import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'

const Navbar= ()=> {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/sdaLogo.jpg" alt='' width='32' height='32'/>
        </div>
        <div className={styles.texts}>
        <div className={styles.text}>ORDER NOW!</div>
        <div className={styles.text}>+263 000 000</div>
        </div>
      </div>
        
        <div className={styles.item}>
          <ul className={styles.list}>
            <Link href='/' className={styles.listItem}>Homepage</Link>
            <Link href='/product' className={styles.listItem}>Products</Link>
            <li className={styles.listItem}>Menu</li>
            <Image src='/img/logomastra.png' alt='' width='100' height='80' layout="intrinsic"/>
            <Link href='/orders'  className={styles.listItem}>Orders</Link>
            <li className={styles.listItem}>Blog</li>
            <li className={styles.listItem}>Contact</li>
            </ul>
        </div>
        
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src='/img/cart.png' alt='' width='30' height='30'/>
            <div className={styles.counter}>2</div>
         </div>       
        </div>
      </div>
  )
}

export default Navbar