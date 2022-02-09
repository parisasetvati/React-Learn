import styles from './Navbar.module.css';

const Navbar = ({totalItem}) => {
    return (
        <header>
            <h2>Shopping App</h2>
            <span className={styles.counter}>{totalItem}</span>
        </header>
      );
}
 
export default Navbar;