import styles from "../styles/Cart.module.css"
import Image from "next/image"


function Cart() {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <table className={styles.table}>

                <thead className={styles.trTitle}>
                    <td>Product</td>
                    <td>Name</td>
                    <td>Extras</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Total</td>
                </thead>
               
                <tr className={styles.tr}>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="/img/pizza.png"
                            layout="fill"
                            objectFit="cover"
                            alt=""
                            />
                        </div>
                    </td>
                    <td>
                        <span className={styles.name}>CORALZO</span>
                    </td>
                    <td>
                        <span className={styles.extras}>
                            Double Ingredients, Spicy sauce
                        </span>
                    </td>
                    <td>
                        <span className={styles.price}>$19.90</span>
                    </td>
                    <td >
                        <span className={styles.quantity}>2</span>
                    </td>
                    <td>
                        <span className={styles.total}>$39.80</span>
                    </td>
                    </tr>
                    <tr className={styles.tr}>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="/img/pizza.png"
                            layout="fill"
                            objectFit="cover"
                            alt=""
                            />
                        </div>
                    </td>
                    <td>
                        <span className={styles.name}>CORALZO</span>
                    </td>
                    <td>
                        <span className={styles.extras}>
                            Double Ingredients, Spicy sauce
                        </span>
                    </td>
                    <td>
                        <span className={styles.price}>$19.90</span>
                    </td>
                    <td >
                        <span className={styles.quantity}>2</span>
                    </td>
                    <td>
                        <span className={styles.total}>$39.80</span>
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="/img/pizza.png"
                            layout="fill"
                            objectFit="cover"
                            alt=""
                            />
                        </div>
                    </td>
                    <td>
                        <span className={styles.name}>CORALZO</span>
                    </td>
                    <td>
                        <span className={styles.extras}>
                            Double Ingredients, Spicy sauce
                        </span>
                    </td>
                    <td>
                        <span className={styles.price}>$19.90</span>
                    </td>
                    <td >
                        <span className={styles.quantity}>2</span>
                    </td>
                    <td>
                        <span className={styles.total}>$39.80</span>
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="/img/pizza.png"
                            layout="fill"
                            objectFit="cover"
                            alt=""
                            />
                        </div>
                    </td>
                    <td>
                        <span className={styles.name}>CORALZO</span>
                    </td>
                    <td>
                        <span className={styles.extras}>
                            Double Ingredients, Spicy sauce
                        </span>
                    </td>
                    <td>
                        <span className={styles.price}>$19.90</span>
                    </td>
                    <td >
                        <span className={styles.quantity}>2</span>
                    </td>
                    <td>
                        <span className={styles.total}>$39.80</span>
                    </td>
                    </tr>
                   
            </table>
        </div>
        <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>CART TOTAL</h2>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Subtotal:</b> $79.60
            </div>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Discount:</b> $0.00
            </div>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Total:</b> $79.60
            </div>

            <button className={styles.button}>CHECKOUT NOW!</button>




            </div>

        </div>
    </div>

  )
}

export default Cart