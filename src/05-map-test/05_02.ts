import {GovernmentBuildingsType, HouseType} from "../02-object-test/02_02";
import React from "react";

export const getStreetsTitleOfGovernmentsBuildings =
    (buildings: Array<GovernmentBuildingsType>) => {
        return buildings.map(b => b.address.street.title)
    }

export const getStreetsTitleOfHouses = (houses: Array<HouseType>) => {
    return houses.map(h => h.address.street.title)
}


export const createMessages = (houses: Array<HouseType>) => {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}


// function App() {
//
//     const name = ['Dimych', 'Sveta', 'Olya', 'Victor', 'Ignat']
//     const user = [
//         {id: 1, name: 'Dimych'},
//         {id: 2, name: 'Sveta'},
//         {id: 3, name: 'Olya'},
//         {id: 4, name: 'Victor'},
//         {id: 5, name: 'Ignat'},
//     ]
//
//     const liElem = user.map(u =>
//         <ul key={u.id}>
//             <li>{u.name}</li>
//             </ul>
//     )
//
//     return (
//         <div className="App">
//             {liElem}
//             </div>
//     );
// }