import logo from './assets/valorantLogo.png';
import searchIcon from './assets/searchIcon.svg';
import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function App() {
	const navigate = useNavigate();

	function backToHome() {
		navigate('/')
	}

  return (
    <div className='app'>
      <div className='headerContainer'>
        <img src={logo} alt="Logo" onClick={(() => {backToHome()})}/>
        <div className='menuItems'>
          <p><Link to={'/agents'}>Agents</Link></p>
          <p><Link to={'/weapons'}>Weapons</Link></p>
          <p><Link to={'/tiers'}>Tiers</Link></p>
        </div>
        <div className="searchcontainer">
          <div className="inputSearch">
            <input type="text" placeholder="Search..." />
            <img src={searchIcon} alt="Search Icon" />
          </div>
        </div>
      </div>
	  <Outlet />
    </div>
  );
}