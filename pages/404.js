import styles from '../styles/notfound.module.css'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const NotFound = () => {
     const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        },3000)
    },[router])
   
    return (
        <section className={styles.section}>
            <div>
                <h1>Page Not Found </h1>
                <p>Please check another Articles!</p>
                 <h1>Thank You </h1>
                <button className = {styles.btn}onClick = {()=>router.push('/')}>Article</button>
            </div>
        </section>
    );
}

export default NotFound;