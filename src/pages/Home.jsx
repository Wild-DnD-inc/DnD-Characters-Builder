import { Outlet } from "react-router-dom"
import Steps from "../components/Steps"
import { StepsProvider } from "../contexts/StepsContext"

function Home() {

    return (
        <div className="perso">
            <StepsProvider>
                <Steps/>
                <Outlet/>
            </StepsProvider>
        </div>
    )

}

export default Home