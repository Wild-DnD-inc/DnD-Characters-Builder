import './App.css'
import Equipment from './components/Equipment'
import AbilityScore from "./components/AbilityScore";
import Character from './components/Character';
import image from "./images/DnD-Symbol.png";
import Races from './components/Races';
import Classes from './components/Classes';
import { RacesProvider } from './contexts/RacesContext';
import { ClassesProvider } from './contexts/ClassesContext';
import Final from './components/Final';
import { EquipmentProvider } from './contexts/EquipmentContext';
import { AlignmentProvider } from './contexts/AlignmentContext';
import { CharacterProvider } from './contexts/CharacterContext';


function Logo() {
  return <img className="LogoPNG" src={image} alt="Logo" />;
}

function App() {
  


  return (
    <>
      <div>
    <div className="LogoDiv">
      <Logo />
    </div>
    <div>
      <RacesProvider>
        <Races/>
      </RacesProvider>
      <ClassesProvider>
        <Classes/>
      </ClassesProvider>
    </div>
    <div className="ability">
      <AbilityScore name="Strength" score={0} modifier={0} />

      <AbilityScore name="Dexterity" score={0} modifier={0} />

      <AbilityScore name="Constitution" score={0} modifier={0} />

      <AbilityScore name="Intelligence" score={0} modifier={0} />

      <AbilityScore name="Wisdom" score={0} modifier={0} />

      <AbilityScore name="Charisma" score={0} modifier={0} />
    </div>
  </div>
  <div>
    <CharacterProvider>
    <AlignmentProvider>
    <EquipmentProvider>
    <Equipment/>
    <Final/>
    </EquipmentProvider>
    <Character/>
    </AlignmentProvider>
    </CharacterProvider>
  </div>
  
    </>
  )
}

export default App
