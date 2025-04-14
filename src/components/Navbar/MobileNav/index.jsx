import { useState, useEffect } from "react"
import styles from "../../Header/header.module.css"
import { List } from "@phosphor-icons/react"

export const MobileNav = ({listOfLinks, menuVisible, toggleMenu}) => {


    return (
        <div className={styles.mobileMenu}>
            <List size={32} onClick={toggleMenu}/>
                <div className={`${styles.dropdownMenu} ${styles[menuVisible]}`}>
                    {listOfLinks}
                </div>
        </div>
    )
}