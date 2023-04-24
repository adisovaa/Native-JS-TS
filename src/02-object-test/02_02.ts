export type StreetType = {
    title: string
}

export type AddressType = {
    number: number,
    street: StreetType
}

export type HouseType = {
    id?: number
    builtAt: number
    repaired: boolean
    address: AddressType
}

type GovernmentBuildingsTitleType = {
    title: string
}

type GovernmentBuildingsAddressType = {
    street: GovernmentBuildingsTitleType
}

export type GovernmentBuildingsType = {
    type: string
    budget: number
    staffCount: number
    address: GovernmentBuildingsAddressType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuilding: Array<GovernmentBuildingsType>
    citizenNumber: number
}
