import { useState } from 'react';
import styles from './header.module.css';
import Logo from '../../assets/logo.png';
import { DesktopNav } from "../Navbar/DesktopNav"
import { MobileNav } from '../Navbar/MobileNav';
import { NavLink } from "react-router-dom"
import { allAnimals } from '../../data';

export const Header = () => {
    const uniqueGroup = [...new Set(allAnimals.map((animal) => animal.group))]
    const linkNames = ["Home", ...uniqueGroup]
    const [showMenu, SetShowMenu] = useState(false)
    
    const handleClick = () => {
        SetShowMenu(!showMenu)
    }

    const GetLinks = () => linkNames.map((item, index) => (
        <NavLink to={item.toLowerCase() === "home" ? "/" : item.toLowerCase()} key={index} onClick={handleClick}>
            {item}
        </NavLink>
    ));
    
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={Logo} alt="Website's logo" width={150}/>
            </div>
            <DesktopNav listOfLinks={GetLinks()}/>
            <MobileNav listOfLinks={GetLinks()} menuVisible={showMenu} toggleMenu={handleClick}/>
        </header>
    )
}