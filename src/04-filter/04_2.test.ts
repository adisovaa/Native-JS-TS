import {CityType} from "../02-object-test/02_02";
import exp from "constants";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./04_2";

let city: CityType;
beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1, builtAt: 2012, repaired: false,
                address: {number: 10, street: {title: 'Central Str'}}
            },
            {
                id: 2, builtAt: 2023, repaired: true,
                address: {number: 100, street: {title: 'South Str'}}
            },
            {
                id: 3, builtAt: 1998, repaired: true,
                address: {number: 23, street: {title: 'Happy street'}}
            },
        ],
        governmentBuilding: [
            {
                type: 'Hospital',
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: 'Fire-station',
                budget: 300000,
                staffCount: 600,
                address: {
                    street: {
                        title: '3 Central Str'
                    }
                }
            }
        ],
        citizenNumber: 1000000
    }
})

test('Houses should be destroyed', () => {
    demolishHousesOnTheStreet(city, 'Happy street')
    expect(city.houses.length).toBe(2)
    expect(city.houses[0].id).toBe(1)
})

test('building with correct staff count', () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuilding, 500)
    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe('Fire-station')
})

