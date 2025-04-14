import { useState } from "react"
import styles from "./main-content.module.css"

export const MainContent = ({clickedAnimal, groupPage, animalPopUp}) => {

    const getWelcomeMessage = () => {

        if(groupPage === "Birds") {
            return `Soar into the enchanting world of birds, where feathers and melodies bring nature to life! Encounter the majestic cassowary, a flightless giant with a striking helmet-like casque and an important role in rainforest ecology. Laugh along with the cheerful kookaburra, whose iconic calls are the soundtrack of the Australian wilderness. Marvel at the elegant yellow-tailed black cockatoo, a stunning parrot with a graceful flight and a love for the eucalyptus forests.
            These incredible avian wonders are just the beginning of your journey into the skies. We’re thrilled to share this feathered adventure with you—let’s explore the beauty and brilliance of birds together!`
        } else if (groupPage === "Mammals") {
            return `Embark on a journey through the captivating world of mammals, where some of Australia's most fascinating creatures await! 
            Meet the quirky and always-smiling quokka, a true icon of joy and curiosity. Discover the remarkable echidna, an egg-laying 
            mammal with spines and an incredible sense of smell. And don't miss the enigmatic Tasmanian devil, known for its fiery 
            personality and unique adaptations. Each of these wonderful animals carries its own story and charm, waiting for you to 
            uncover. We’re thrilled to have you here—let’s explore the beauty and diversity of mammals together!`
        } else if (groupPage === "Reptiles") {
            return `Get ready to explore the captivating world of reptiles, where evolution and adaptability shine! Meet the iconic frill-necked lizard, famed for its dramatic frill and lightning-fast sprints. Dive into the oceanic wonders of the hawksbill turtle, a marine marvel with a beautifully patterned shell and vital role in maintaining coral reefs. Finally, marvel at the majestic perentie, Australia's largest monitor lizard, known for its intelligence and striking appearance.
            These incredible creatures showcase the diversity and ingenuity of the reptile world. We're delighted to have you here—let's embark on this scaly adventure together!`
        } else {
            return `Welcome to our zoo page, where adventure and discovery await! Explore the fascinating world of animals, from the quirky 
            quokka to the majestic cassowary. Immerse yourself in the beauty of nature and learn about creatures from all corners of the globe. 
            We're thrilled to have you here—let's embark on this wild journey together!`
        }
    }

    return (
        <>
            <div className={styles.mainContent}>
                {clickedAnimal 
                ?
                    <div className={styles.animalDetails}>
                        <h1>{clickedAnimal.name}</h1>
                        <div className={styles.animalDetailsContent}>
                            <img src={clickedAnimal.image} alt={clickedAnimal.name} />
                            <div className={styles.animalDetailsList}>
                                <p><span>Lifespan: </span>{clickedAnimal.lifespan}</p>
                                <p><span>Group: </span>{clickedAnimal.group}</p>
                                <p><span>Food: </span>{clickedAnimal.food}</p>
                                <p><span>Length: </span>{clickedAnimal.length}</p>
                                <p><span>Weight: </span>{clickedAnimal.weight}</p>
                                <p><span>Habitat: </span>{clickedAnimal.habitat}</p>
                            </div>
                        </div>
                        {!groupPage 
                            ? <button className={styles.readMore} onClick={animalPopUp}>Read more</button>
                            : <p className={styles.description}>{clickedAnimal.description}</p>
                        }
                    </div>
                : 
                    <div className={styles.welcome}>
                        <h1 className={styles.welcomeTitle}>Welcome to the <span>{groupPage ? groupPage : "zoo's"}</span> page!</h1>
                        <p>{getWelcomeMessage()}</p>
                    </div>
                }
            </div>
                
        </>
    )
}
