import { X } from "@phosphor-icons/react"
import styles from "./pop-up.module.css"

export const PopUp = ({chosenAnimal, closePopUp}) => {
    return (
        <div className={styles.popUp}>
            <div className={styles.closeContainer}>
                <X size={24} onClick={closePopUp}/>
            </div>
            <h1>{chosenAnimal.name}</h1>
            <div className={styles.popUpDetails}>
                <div className={styles.imgContainer}>
                    <img src={chosenAnimal.image} alt={chosenAnimal.name} />
                </div>
                <div className={styles.popUpDetailsList}>
                    <p><span>Lifespan: </span>{chosenAnimal.lifespan}</p>
                    <p><span>Group: </span>{chosenAnimal.group}</p>
                    <p><span>Food: </span>{chosenAnimal.food}</p>
                    <p><span>Length: </span>{chosenAnimal.length}</p>
                    <p><span>Weight: </span>{chosenAnimal.weight}</p>
                    <p><span>Habitat: </span>{chosenAnimal.habitat}</p>
                </div>
            </div>
            <p className={styles.popUpDescription}>{chosenAnimal.description}</p>
        </div>
    )
}