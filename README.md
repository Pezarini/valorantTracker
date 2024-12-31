# Valorant Tracker

- This is a project that will give you a info about valorant, like:
    - Agents
    - Weapons
    - Tiers

- I will use vite + react + typescript to improve my skills and document this in github

- If you want to see the prototype in figma, check the [link](https://www.figma.com/design/uifDTqqSngSCFj0kFRTyVL/Valorant-project?node-id=0-1&t=T2ujf4TQHPRY5hOZ-1)

- I hope you enjoy :)


function filterDataAgents() {
   const data = agentsData.filter((item: dataAgents) => item.role);
   console.log(data);
   return data;
}