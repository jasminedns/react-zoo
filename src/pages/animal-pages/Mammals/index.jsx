import { MainContent } from "../../../components/MainContent"
import { Sidebar } from "../../../components/Sidebar"
import styles from "../animal-pages.module.css"

export const Mammals = ({title, chosenAnimal, click}) => {
    return (
        <>
            <div className={`${styles.bgContainer} ${styles[title.toLowerCase()]}`}></div>
            <div className={styles.main}>
                <Sidebar groupPage={title} press={click}/>
                <MainContent groupPage={title} clickedAnimal={chosenAnimal}/>
            </div>
        </>
    )
}