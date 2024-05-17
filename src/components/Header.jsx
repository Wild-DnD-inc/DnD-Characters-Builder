import Nav from "./Nav"
import '../styles/Header.css'

function Header() {

    return (
        <header>
            <div className="app">
                <img src="./src/images/dnd-symbol.png" alt="DnD App Icon" className="app-icon" />
                <h1>DnD Character Builder</h1>
            </div>
            <Nav/>
        </header>
    )

}

export default Header