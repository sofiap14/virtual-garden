import { Link } from 'react-router-dom'
import CreateGardenForm from './CreateGardenForm'
import LogoutButton from './Logout'

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Virtual Garden</h1>
                </Link>
                <LogoutButton className='mx-10' />
                <div><CreateGardenForm /></div>
            </div>
        </header>
    )
}

export default Navbar