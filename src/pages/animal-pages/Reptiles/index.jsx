import { Sidebar } from "../../../components/Sidebar"
import { MainContent } from "../../../components/MainContent"
import styles from "../animal-pages.module.css"
export const Reptiles = ({title, chosenAnimal, click}) => {
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