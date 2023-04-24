import {CityType, GovernmentBuildingsType} from "../02-object-test/02_02"
import {addMoneyToBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from "./03";
import {create} from "domain";

let city: CityType
let governmentBuilding: GovernmentBuildingsType

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


test('test should contain 3 houses', () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].builtAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(10);
    expect(city.houses[0].address.street.title).toBe('130 Troitskaya');

    expect(city.houses[1].builtAt).toBe(2023);
    expect(city.houses[1].repaired).toBe(true);
    expect(city.houses[1].address.number).toBe(100);
    expect(city.houses[1].address.street.title).toBe('130 Troitskaya');

    expect(city.houses[2].builtAt).toBe(1998);
    expect(city.houses[2].repaired).toBe(true);
    expect(city.houses[2].address.number).toBe(23);
    expect(city.houses[2].address.street.title).toBe('130 Troitskaya');
})

test('test city contains hospital and fire station', () => {
    expect(city.governmentBuilding[0].type).toBe('Hospital')
    expect(city.governmentBuilding[0].budget).toBe(200000)
    expect(city.governmentBuilding[0].staffCount).toBe(200)
    expect(city.governmentBuilding[0].address.street.title).toBe('Central Str')

    expect(city.governmentBuilding[1].type).toBe('Fire-station')
    expect(city.governmentBuilding[1].budget).toBe(300000)
    expect(city.governmentBuilding[1].staffCount).toBe(300)
    expect(city.governmentBuilding[1].address.street.title).toBe('3 Central Str')
})

test('Budget should be changed for Hospital', () => {
    addMoneyToBudget(city.governmentBuilding[0], 100000)
    expect(city.governmentBuilding[0].budget).toBe(300000)
})

test('House should be repaired', () => {
    repairHouse(city.houses[1])
    expect(city.houses[1].repaired).toBeTruthy()
})

test('staff should be increase', () => {
    toFireStaff(city.governmentBuilding[0], 20)
    expect(city.governmentBuilding[0].staffCount).toBe(180)
})

test('House should be repaired', () => {
    toHireStaff(city.governmentBuilding[0], 20)
    expect(city.governmentBuilding[0].staffCount).toBe(220)
})

test('Greeting message should be correct for city', () => {
    const message = createMessage(city)
    expect(message).toBe('Hello New York citizens. I want to be happy. All 1000000 peoples')
})