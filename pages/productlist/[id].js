
export const getStaticPaths = async () => {
    
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    
      //  paths: [{},{}, {params: {id: }}]
       const paths = data.map(pizzasArray=>{
        return {
            params: {id: pizzasArray.id.toString()}
        }
       })

       return{
        paths,
        fallback: false
       }
    
}

export const getStaticProps = async (context) =>{
    const id = context.params.id;

    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id);
    const data = await res.json();
  
    return{
      props: {
        singleIdPizza:data
      }
    }
  }
const Details = ({singleIdPizza})=> {
  return (
    <div>
        <h1>{singleIdPizza.name}</h1>
        <p>{singleIdPizza.email}</p>
        <p>{singleIdPizza.website}</p>
        <p>{singleIdPizza.address.city}</p>       
        </div>
  )
}

export default Details