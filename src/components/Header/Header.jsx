import React from 'react';
import {Link} from 'react-router-dom'
import styles from './Header.module.css';
import hikarooChanLogo from '../../images/Logo-Color.png';

const Header = () => (
<div className={styles.content}>
    <Link to={"/"} className={styles.headerButton}>Home</Link>
    <Link to={"/AboutMe"} className={styles.headerButton}>About Me</Link>
    <Link to={"/"}> <img className={styles.dadtierLogo} src={hikarooChanLogo} alt="DadTier Logo"/> </Link>
    <Link to={"/Commissions"} className={styles.headerButton}>Commissions</Link>
    <Link to={"/ContactMe"} className={styles.headerButton}>Contact Me</Link>

</div>
)

export default Header;