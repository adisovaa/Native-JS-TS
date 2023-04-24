import {CityType} from "../02-object-test/02_02";
import {getStreetsTitleOfGovernmentsBuildings, getStreetsTitleOfHouses} from "./05_02";

let city: CityType
beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                builtAt: 2012, repaired: false,
                address: {number: 10, street: {title: '130 Troitskaya'}}
            },
            {
                builtAt: 2023, repaired: true,
                address: {number: 100, street: {title: '130 Troitskaya'}}
            },
            {
                builtAt: 1998, repaired: true,
                address: {number: 23, street: {title: '130 Troitskaya'}}
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
                staffCount: 300,
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

test('list of streets title of government buildings', () => {
    let streetsName = getStreetsTitleOfGovernmentsBuildings(city.governmentBuilding)

    expect(streetsName.length).toBe(2)
    expect(streetsName[0]).toBe('Central Str')
    expect(streetsName[1]).toBe('South Str')
})


test('list of streets title', () => {
    let streetsName = getStreetsTitleOfHouses(city.houses)

    expect(streetsName.length).toBe(3)
    expect(streetsName[0]).toBe('White street')
    expect(streetsName[1]).toBe('Happy street')
    expect(streetsName[2]).toBe('Happy street')
})


test('create greeting message for streets', () => {
    let streets = getStreetsTitleOfHouses(city.houses)

    expect(streets.length).toBe(3)
    expect(streets[0]).toBe('White street')
    expect(streets[1]).toBe('Happy street')
    expect(streets[2]).toBe('Happy street')
})