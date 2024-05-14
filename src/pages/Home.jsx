import { Outlet } from "react-router-dom"
import Steps from "../components/Steps"
import { StepsProvider } from "../contexts/StepsContext"

function Home() {

    return (
        <main className="perso">
            <StepsProvider>
                <Steps/>
                <Outlet/>
            </StepsProvider>
        </main>
    )

}

export default Home