import {CityType} from "../02-object-test/02_02";
import {createMessages, getStreetsTitleOfGovernmentsBuildings, getStreetsTitleOfHouses} from "./05_02";

let city: CityType
beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                builtAt: 2012, repaired: false,
                address: {number: 10, street: {title: 'White street'}}
            },
            {
                builtAt: 2023, repaired: true,
                address: {number: 100, street: {title: 'Happy street'}}
            },
            {
                builtAt: 1998, repaired: true,
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
                staffCount: 300,
                address: {
                    street: {
                        title: 'South Str'
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
    let streetsName = createMessages(city.houses)

    expect(streetsName.length).toBe(3)
    expect(streetsName[0]).toBe('Hello guys from White street')
    expect(streetsName[1]).toBe('Hello guys from Happy street')
    expect(streetsName[2]).toBe('Hello guys from Happy street')
})


test('create greeting message for streets', () => {
    let messages = getStreetsTitleOfHouses(city.houses)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('White street')
    expect(messages[1]).toBe('Happy street')
    expect(messages[2]).toBe('Happy street')
})