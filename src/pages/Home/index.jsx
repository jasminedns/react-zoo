import styles from "./home.module.css"
import { MainContent } from "../../components/MainContent"
import { Sidebar } from "../../components/Sidebar"

export const Home = ({chosenAnimal, click, getPopUp}) => {
    return (
        <>
            <div className={styles.welcomeTitle}>
                <h1>Welcome to our Zoo!</h1>
            </div>
            <div className={styles.main}>
                <Sidebar press={click} />
                <MainContent clickedAnimal={chosenAnimal} animalPopUp={getPopUp} />
            </div>
        </>
    )
}