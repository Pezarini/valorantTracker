import axios from "axios";
import { useEffect, useState } from "react"
import './AgentsContainer.css'

function Agents() {

const [agentsData, setAgentsData] = useState([]);
const [dataInput, setDataInput] = useState('');

interface dataAgents {
    uuid: string,
    fullPortraitV2: string,
    displayName: string,
    description: string
    role: roleAgent,
    isPlayableCharacter: boolean,
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

function filterDataAgents() {
    let listOfAgents = agentsData.filter((data: dataAgents) => data.isPlayableCharacter === true);

    if (dataInput) {
        listOfAgents = listOfAgents.filter((data: dataAgents) => dataInput === data.role.displayName);
    }

    return listOfAgents;
}

return (
	<>
        <div className="cardContainer">
            <div className="dropDrownContainer">
                <select name="selectedAgent" id="agentDropdown" onChange={(e) =>  setDataInput(e.target.value)}>
                    <option value="">Select a role</option>
                    <option value="Duelist">Duelist</option>
                    <option value="Initiator">Initiator</option>
                    <option value="Controller">Controller</option>
                    <option value="Sentinel">Sentinel</option>
                </select>
            </div>
            <div className="cardCenterContainer">
                {filterDataAgents().map((item: dataAgents) => (
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