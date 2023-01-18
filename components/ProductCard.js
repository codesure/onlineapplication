import Image from "next/image"
import styles from "../styles/ProductCard.module.css"

function ProductCard() {
  return (
    <div className={styles.container}>
        <Image src="/img/prod.jpg" alt="" width="800" height="800" />
        <h1 className={styles.title}>FIORI DI ZUCCA</h1>
        <span className={styles.price}>$19.90</span>
        <p className={styles.desc}>
            Lorem Ipsum blah blah
        </p>

    </div>
  )
}

export default ProductCard 