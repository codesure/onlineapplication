import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>The Best Pizza in town</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet ...
             </p>
        <div className={styles.wrapper}>
             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />

        </div> 
    </div>
  )
}

export default ProductList