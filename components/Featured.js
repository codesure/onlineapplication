import styles from '../styles/Featured.module.css'
import Image from 'next/image';

const Featured = () => {

    const images = [
        "/img/featured1.jpg",
        "/img/featured2.jpg",
        "/img/featured3.jpg",
    ];
  return (
  
    <div className={styles.container}>Featured
    <div className={styles.arrowContainer} style={{left:0}}>
    <Image src="/img/arrow1.png" alt="" width="50px" height="50px"/>

    </div>
    
    <div className={styles.wrapper}>
    {images.map((img, i)=>(
        <div className={styles.imgContainer} key={i}>
            <Image src={img}  alt="https://favpng.com" layout='fill'/> 
            </div>   
            ))}
       </div>
       <div className={styles.arrowContainer} style={{right:0}}>
    <Image src="/img/arrow2.png" alt="" width="50px" height="50px"/>
    </div> 
   </div>

  )
}

export default Featured