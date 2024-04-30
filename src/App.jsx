import './App.css'
import Races from './components/Races'
import Classes from './components/Classes'
import Form from './components/Form'
import { RacesProvider } from './contexts/RacesContext'
import { ClassesProvider } from './contexts/ClassesContext'


function App() {
  
  return (
    <>
      <RacesProvider>
        <Races/>
      </RacesProvider>
      <ClassesProvider>
        <Classes/>
      </ClassesProvider>
      <Form/>
    </>
  )

}

export default App
