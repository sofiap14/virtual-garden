import { Link } from 'react-router-dom'
import CreateGardenForm from './CreateGardenForm'

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Virtual Garden</h1>
                </Link>
                <div><CreateGardenForm /></div>
            </div>
        </header>
    )
}

export default Navbar