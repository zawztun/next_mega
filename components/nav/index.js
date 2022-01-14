import Link from "next/link";
import styles from './index.module.css'


const Navbar = () => {
    return (
        <header className={styles.header}>
           <Link href = '/'><a>LOGO</a></Link>  
            <ul className={styles.nav}>
                <li> <Link href='/about'>ABOUT</Link></li> 
                 <li> <Link href = '/products/id'>PRODUCTS</Link></li> 
                  <li> <Link href = '/contact'>CONTACT</Link></li> 
            </ul>
        </header>
    );
}

export default Navbar;