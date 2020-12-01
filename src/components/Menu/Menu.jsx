import React from 'react';
import {Link} from 'react-router-dom'
import styles from './Menu.module.css';
// import hikarooChanLogo from '../../images/Logo-Color.png';

const Menu = ({open, closeMenu}) => {
console.log(open)

return (
    <div className={styles.navigationContainer + ' ' + (open ? styles.navigationClosed : styles.navigationOpen)} >
        <Link onClick={closeMenu()} to={"/"} className={styles.navigationItem}>Home</Link>
        <Link onClick={closeMenu()} to={"/AboutMe"} className={ styles.linkItem + ' ' +styles.navigationItem}>About Me</Link>
        <Link onClick={closeMenu()} to={"/Commissions"} className={ styles.linkItem + ' ' +styles.navigationItem}>Commissions</Link>
        <Link onClick={closeMenu()} to={"/ContactMe"} className={ styles.linkItem + ' ' + styles.navigationItem}>Contact Me</Link>
    </div>
)}

export default Menu;

