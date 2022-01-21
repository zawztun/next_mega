import Head from 'next/head';
import styles from '../../styles/details.module.css';


const Details = ({ post }) => {
  
    const title = post.title.toUpperCase();
    return (
        <>
            <Head>
                <title>MegaPower || Myanmar</title>
                <meta name="title" content= {`learn more about ${post.title}`}/>
                <meta name="description" content={`MegaPower_product ${post.title}`} />
                <meta property="og:description" content="mega power is the one of the best  Multi-Vitamins import Company Form USA to Myanmar "/>
                <meta property="og:image" content="/megapower.png"/>
            </Head>

            <main className={styles.main}>
                <h2 className={styles.header}>{title} </h2>
                <div>
                    <p>{post.body}</p>
                </div>
            </main>
        </>
      
    );
}

export default Details;

export const getStaticProps = async ({params}) => {
    //console.log(props);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await res.json();
    return {
        props: {
           post:post
        }
    }
}
export const getStaticPaths = async () => {
     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    const posts = await res.json();

    let paths = posts.map(post => ({ params: { id: post.id.toString() } }))
    //console.log(paths);
  return {
    paths: paths,
     fallback:false
  }
}


   
  
