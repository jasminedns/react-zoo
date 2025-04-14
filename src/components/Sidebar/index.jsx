import { useState, useEffect } from "react"
import styles from "./sidebar.module.css"
import { allAnimals } from "../../data"
import { DotsThree } from "@phosphor-icons/react"

export const Sidebar = ({press, groupPage}) => {
    const [showSidebar, setShowSidebar] = useState(false)

    useEffect(() => {
        setShowSidebar(false)
    }, [press])

    return (
        <div className={styles.sidebar}>
            <DotsThree size={32} className={styles.sidebarMobileIcon} onClick={() => setShowSidebar(!showSidebar)}/>        
            <div className={`${styles.sidebarList} ${styles[showSidebar]}`}>
                {groupPage && groupPage === "Mammals" || groupPage === "Birds" || groupPage === "Reptiles"
                ? allAnimals.filter(item => item.group === groupPage).map((item, index) => (
                    <p key={index} onClick={() => press(item)}>{item.name}</p>
                ))
                : allAnimals.map((item, index) => (
                    <p key={index} onClick={() => press(item)}>{item.name}</p>
                ))
                }
            </div>
        </div>
    )
}