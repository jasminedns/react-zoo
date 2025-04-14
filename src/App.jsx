import { useState } from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Mammals } from './pages/animal-pages/Mammals'
import { Birds } from './pages/animal-pages/Birds'
import { Reptiles } from './pages/animal-pages/Reptiles'
import { Layout } from './pages/Layout'
import { useEffect } from 'react'
import { useLocation } from "react-router-dom"
import { PopUp } from './components/PopUp'


function App() {
  const [animal, setAnimal] = useState(null)
  const [showPopUp, setShowPopUp] = useState(false)

  const location = useLocation();

  const handleClick = (selectedAnimal) => {
    setAnimal(animal && animal.name === selectedAnimal.name 
      ? null 
      : selectedAnimal
    ) 
  }

  useEffect(() => {
    setAnimal(null)
    setShowPopUp(false)
  }, [location.pathname])

  const showPopUpPage = () => {
    setShowPopUp(!showPopUp)
  }

  return (
    <>
      <Routes>
        <Route element={<Layout getPopUp={showPopUp}/>}>
          <Route path='/' element={showPopUp !== true 
            ? <Home chosenAnimal={animal} click={handleClick} getPopUp={showPopUpPage}/>
            : <PopUp chosenAnimal={animal} closePopUp={showPopUpPage}/>}/>
          <Route path='/mammals' element={<Mammals title={"Mammals"} chosenAnimal={animal} click={handleClick}/>} />
          <Route path='/birds' element={<Birds title={"Birds"} chosenAnimal={animal} click={handleClick} />} />
          <Route path='/reptiles' element={<Reptiles title={"Reptiles"} chosenAnimal={animal} click={handleClick} />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
