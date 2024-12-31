import axios from "axios";
import { useEffect, useState } from "react"
import './AgentsContainer.css'

function Agents() {

const [agentsData, setAgentsData] = useState([]);

interface dataAgents {
    uuid: string,
    fullPortraitV2: string,
    displayName: string,
    description: string
    role: roleAgent,
}

interface roleAgent {
    displayName: string,
}

async function getDataAgents () {
    try {
        const data = await axios.get('https://valorant-api.com/v1/agents');
        setAgentsData(data.data.data);
    } catch(error) {
        console.log(error);
    }
}

useEffect(() => {
    getDataAgents();
}, []);

return (
	<>
        <div className="cardContainer">
            <div className="cardCenterContainer">
                {agentsData.map((item: dataAgents) => (
                    <div key={item.uuid} className="cardContent">
                        <img src={item.fullPortraitV2}></img>
                        <h2>{item.displayName}</h2>
                        <h2>{item.role?.displayName} </h2>
                    </div>
                ))}
            </div>
        </div>
	</>
)
}

export default Agents;