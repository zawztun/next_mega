import styles from './index.module.css'
import { useRouter } from 'next/router';

const Card = ({ post }) => {
    const router = useRouter();
    const title = post.title.toUpperCase();
    return (
        <section className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <p className ={styles.desc}>{post.body}</p>
            <button className={styles.btn} onClick = {()=>router.push(`/products/${post.id}`)}>Read More</button>
        </section>
    );
}

export default Card;