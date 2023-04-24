import {GovernmentBuildingsType, HouseType} from "../02-object-test/02_02";

export const getStreetsTitleOfGovernmentsBuildings = (buildings: Array<GovernmentBuildingsType>) => {
    return buildings.map(b => b.address.street.title)
}

export const getStreetsTitleOfHouses = (houses: Array<HouseType>) => {
    return houses.map(h => h.address.street.title)
}
