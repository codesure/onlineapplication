import styles from '../styles/Featured.module.css'
import Image from 'next/image';
import { useState } from 'react';

const Featured = () => {

  const [index, setIndex]=useState(0);
    const images = [
        "/img/featured3.jpg",
        "/img/featured2.jpg",
        "/img/featured1.jpg",
    ];

    const handleArrow= (direction)=>{
      if (direction=="l"){
        setIndex(index!==0 ? index-1 : 2)
      }
      if (direction=="r"){
        setIndex(index!==2 ? index+1 : 0)
      }
    }

    console.log(index);
  return (
  
    <div className={styles.container}>
    <div className={styles.arrowContainer} style={{left:0}} onClick={()=>handleArrow("l")}>
    <Image src="/img/arrow1.png" alt="" layout='fill'/>
    </div>
    
    <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
     {images.map((img, i)=>(
        <div className={styles.imgContainer} key={i}>
            <Image src={img}  alt="https://favpng.com" layout='fill'/> 
            </div>   
            ))}
   </div>
       <div className={styles.arrowContainer} style={{right:0}} onClick={()=>handleArrow("r")}>
    <Image src="/img/arrow2.png" alt="" layout='fill'/>
    </div> 
   </div>

  )
}

export default Featured

//ended on bringing left arrow to the top