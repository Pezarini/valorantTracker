import { useState } from 'react'
import logo from './assets/valorantLogo.png'
import searchIcon from './assets/searchIcon.svg'


function App() {
const [count, setCount] = useState(0)

return (
	<>
	<div className='app'>
		<div className='headerContainer'>
			<img src={logo} alt="Logo" />
			<div className='menuItems'>
				<p>Agents</p>
				<p>Weapons</p>
				<p>Tiers</p>
			</div>
			<div className="searchcontainer">
				<div className="inputSearch">
					<input type="text" placeholder="Search..." />
					<img src={searchIcon} alt="Search Icon" />
				</div>
			</div>
		</div>
	</div>
	</>
)
}

export default App
