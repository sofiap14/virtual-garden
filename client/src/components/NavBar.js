import { Link } from 'react-router-dom';
// import CreateGardenForm from './CreateGardenForm'
import LogoutButton from './Logout';
import backgroundImage from '../imgbg.jpg';

const Navbar = () => {
  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '20px',
  };

  return (
    <header style={headerStyle}>
      <div className="flex flex-row m-8 justify-between">
        <Link to="/home">
          <h1>Virtual Garden</h1>
        </Link>
        <LogoutButton />
      </div>
    </header>
  );
};

export default Navbar;
