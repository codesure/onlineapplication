import Link from 'next/link'
// import { useState } from 'react'
import styles from "../../styles/ApiTest.module.css"


export const getStaticProps = async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return{
    props: {
      pizzasArray:data
    }
  }
}


const apitest = ({pizzasArray})=> {
  
  


  return (
   
    <div>All subscribers:
    <div className={styles.ApiTemplate}>
      {pizzasArray.map(pizzasArray=>(
         <Link className={styles.ApiData} href={'/apitest/' + pizzasArray.id} key={pizzasArray.id}>
         {/* <a > */}
         <h1>name: {pizzasArray.name}</h1>
         <p>email: {pizzasArray.email} </p>
         <p>phone: {pizzasArray.phone} </p>
         {/* </a> */}
       </Link>
      ))
     }
      </div>
      </div>
  )
};

export default apitest

// ended at putting onClicks for sizes 1.00.58 06/09/22