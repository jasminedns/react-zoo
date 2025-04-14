import styles from "../../Header/header.module.css"

export const DesktopNav = ({listOfLinks}) => {
    return (
        <>
            <div className={styles.navbar}>
                {listOfLinks}
            </div>
        </>
    )
}