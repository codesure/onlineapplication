import styles from "../../styles/Order.module.css";
import Image  from "next/image";


const Order = () => {

    const status = 0;
    const statusClass= (index)=>{
        // index-status <1? styles.done : styles.inProgress

        if (index-status < 1) return styles.done;
        if (index-status === 1) return styles.inProgress;
        if (index-status > 1) return styles.undone;
    }
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.row}>
            <table className={styles.table}>

<tr className={styles.tr}>
    <td>Order ID</td>
    <td>Customer</td>
    <td>Address</td>
    <td>Total</td>
</tr>

<tr>
   
    <td>
        <span className={styles.id}>1234534543</span>
    </td>
    <td>
        <span className={styles.name}>
           Mthoko
        </span>
    </td>
    <td>
        <span className={styles.address}>232 Place St. Somewhere</span>
    </td>
    <td >
        <span className={styles.Total}>$20.99</span>
    </td>
    </tr>
</table>
            </div>
            <div className={styles.row}>
                <div className={statusClass(0)}>
                    <Image className={styles.checkedIcon} src="/img/paid.png" width={30} height={30} alt=""/>
                    <span>Payment</span>
                    <div className={styles.checkedIcon}>
                    <Image className={styles.checkedIcon} src="/img/checked.jpg" width={20} height={20} alt=""/>
                    </div>
                </div> 
                <div className={statusClass(1)}>
                    <Image className={styles.checkedIcon} src="/img/preparing.jpg" width={30} height={30} alt=""/>
                    <span>Preparing</span>
                    <div className={styles.checkedIcon}>
                    <Image className={styles.checkedIcon} src="/img/checked.jpg" width={20} height={20} alt=""/>
                    </div>
                </div>  
                <div className={statusClass(2)}>
                    <Image className={styles.checkedIcon} src="/img/move.jpg" width={30} height={30} alt=""/>
                    <span>On the way</span>
                    <div className={styles.checkedIcon}>
                    <Image className={styles.checkedIcon} src="/img/checked.jpg" width={20} height={20} alt=""/>
                    </div>
                </div>  
                <div className={statusClass(3)}>
                    <Image className={styles.checkedIcon} src="/img/Delivered.png" width={30} height={30} alt=""/>
                    <span>Delivered</span>
                    <div className={styles.checkedIcon}>
                    <Image className={styles.checkedIcon} src="/img/checked.jpg" width={20} height={20} alt=""/>
                    </div>
                </div>    
            </div>
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

            <button disabled className={styles.button}>PAID</button>
            </div>
        </div>
     </div>
  )
}

export default Order