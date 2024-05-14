import { Link, redirect } from "react-router-dom"

function Nav() {

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <redirect to='/'/>
        </nav>
    )

}

export default Nav