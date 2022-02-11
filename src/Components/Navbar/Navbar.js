import { useProdocts } from '../Provider/ProductsProvider';
import styles from './Navbar.module.css';

const Navbar = () => {
    
    const products=useProdocts();
   const totalItem=products.filter((p)=>p.quantity>0).length
    return (
        <header>
            <h2>Shopping App</h2>
            <span className={styles.counter}>{totalItem}</span>
        </header>
      );
}
 
export default Navbar;