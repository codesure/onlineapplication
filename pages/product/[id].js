import Image from 'next/image'
import { useState } from 'react'
import styles from "../../styles/Product.module.css"


const Product = ()=> {
  const [size, setSize]= useState(0)
    const pizza ={
        id:1,
        img: "/img/pizza.png",
        name: "CAPAGNOLA",
        price: [19.9, 23.9, 27.9],
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum congue leo. Donec imperdiet rutrum nisi id sodales. Donec augue dui, pellentesque nec lobortis non, consequat ac lacus. In massa libero, viverra quis leo vel, mattis gravida sapien. Donec vitae ligula vel nulla cursus ornare. ligula feugiat quis."
    };
  return (
    <div className={styles.container}>
        <div className={styles.left}>
        <div className={styles.imgContainer}>
            <Image src="/img/pizza2.jpg" objectFit='contain' layout="fill"  alt='' />
        </div>
        </div>

        <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
          <span className={styles.price}>${pizza.price[size]}</span>
          <p className={styles.desc}>{pizza.desc}</p>
          <h3 className={styles.choose}>Choose the Size</h3>
            <div className={styles.sizes}>
            <div className={styles.size} onClick={()=>setSize(0)}>
              <Image src="/img/size.png" layout='fill' alt=''/>
                <span className={styles.number}>Small</span>
              </div>
              <div className={styles.size} onClick={()=>setSize(1)}>
              <Image src="/img/size.png" layout='fill' alt=''/>
                <span className={styles.number}>Medium</span>
              </div>
              <div className={styles.size} onClick={()=>setSize(2)}>
              <Image src="/img/size.png" layout='fill' alt=''/>
                <span className={styles.number}>Large</span>
              </div>
            </div>
            <h3 className={styles.choose}>Chooses Additional Ingredients</h3>
            <div className={styles.ingredients}>

              <div className={styles.option}>
                <input
                type="checkbox"
                id="double"
                name="double"
                className={styles.checkbox}
                />
                <label htmlFor='double'>Double Ingredients</label>
              </div>

              <div className={styles.option}>
                <input
                type="checkbox"
                id="garlic"
                name="garlic"
                className={styles.checkbox}
                />
                <label htmlFor='cheese'>Garlic Sauce</label>
              </div>

              <div className={styles.option}>
                <input
                className={styles.checkbox}
                type="checkbox"
                id="cheese"
                name="cheese" 
                />
                <label htmlFor='cheese'>Extra Cheese</label>
              </div>

              <div className={styles.option}>
                <input
                type="checkbox"
                id="spicy"
                name="spicy"
                className={styles.checkbox}
                />
                <label htmlFor='cheese'>Spicy Sauce</label>
              </div>
            </div>

            <div className={styles.add}>
              <input type="number" defaultValue={1} className={styles.quantity} />
              <button className={styles.button}>Add to Cart</button>

            </div>
        </div>

      
        </div>
  )
}

export default Product

// ended at putting onClicks for sizes 1.00.58 06/09/22