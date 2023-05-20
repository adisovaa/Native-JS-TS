export type UserType = {
    name: string
    hair: number
    address: { city: string, house: number }
}

export type CompanyType = {
    id: number
    userName: string
    companyId: number
    newTitle: string
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type UserWithCompanyType = UserType & {
    companies: Array<{ id: number, title: string }>
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    copy.hair = u.hair / power
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address, city: city
        }
    }
}

export function upgradeLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop, title: laptop
        }
    }
}

export function addNewUserBooks(u: UserWithBooksType, newBook: Array<string>) {
    return {
        ...u,
        books: [
            ...u.books, newBook
        ]
    }
}

export const removeBooks = (u: UserWithBooksType, booksForDelete: string) => ({
    ...u,
    books: u.books.filter(b => b !== booksForDelete)
})

export function updateCompany(u: UserWithCompanyType, companyId: number, companyTitle: string) {
    return {
        ...u,
        companies: [
            ...u.companies.map(c => c.id === companyId ? {...c, title: companyTitle} : c)
        ]
    }
}


export const updateCompany2 = (companies: {[key: string]: Array<CompanyType>}, userName: string, companyId: number, newTitle: string) => {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)

    return companyCopy
}