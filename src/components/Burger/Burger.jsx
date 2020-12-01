import React from 'react';
// import {Link} from 'react-router-dom'
import styles from './Burger.module.css';
// import hikarooChanLogo from '../../images/Logo-Color.png';

const Burger = ({ open, setOpen }) => (
    <div className={styles.dropdownContainer} open={open} onClick={() => setOpen(!open)}>
        <div className={(open ? styles.dropdownItemClosed : styles.dropdownItemOpen) + ' ' + (open ? styles.dropdownFirstItemOpen : styles.dropdownFirstItemClose)}></div>
        <div className={(open ? styles.dropdownItemClosed : styles.dropdownItemOpen) + ' ' + (open ? styles.dropdownSecondItemOpen : styles.dropdownSecondItemClose)}></div>
        <div className={(open ? styles.dropdownItemClosed : styles.dropdownItemOpen) + ' ' + (open ? styles.dropdownThirdItemOpen : styles.dropdownThirdItemClose)}></div>
    </div>
)

export default Burger;
