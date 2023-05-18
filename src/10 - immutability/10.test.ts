import {
    makeHairstyle,
    moveUser, removeBooks, updateCompany, updateCompany2,
    upgradeLaptop,
    UserType,
    UserWithBooksType, UserWithCompanyType,
    UserWithLaptopType
} from "./10.j";


test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 23
        }
    }

    window.alert(user)
    const awesomeUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})


test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Asus'
        }
    }

    const movedUser = moveUser(user, 'Bishkek')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Bishkek')
})


test('upgrade user laptop', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Asus'
        }
    }

    const changeLaptop = upgradeLaptop(user, 'Macbook')

    expect(user).not.toBe(changeLaptop)
    expect(user.address).toBe(changeLaptop.address)
    expect(user.laptop).not.toBe(changeLaptop.laptop)
    expect(changeLaptop.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('Asus')
})


test('remove books from array', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Asus'
        },
        books: ['book1', 'book2', 'book3']
    }

    const removeBooksCopy = removeBooks(user, 'book1')

    expect(user).not.toBe(removeBooksCopy)
    expect(user.address).toBe(removeBooksCopy.address)
    expect(user.books).not.toBe(removeBooksCopy.books)
    expect(removeBooksCopy.books[0]).toBe('book2')
})


// test('update company name', () => {
//     let user: UserWithLaptopType & UserWithCompanyType = {
//         name: 'Dimych',
//         hair: 32,
//         address: {
//             city: 'Minsk',
//             house: 12
//         },
//         laptop: {
//             title: 'Asus'
//         },
//         companies: [{id: 1, title: 'Google'}, {id: 2, title: 'Microsoft'},]
//     }
//
//     const newCompanyCopy = updateCompany(user, 1, 'Tesla') as UserWithCompanyType
//
//     expect(user).not.toBe(newCompanyCopy)
//     expect(user.address).toBe(newCompanyCopy.address)
//     expect(newCompanyCopy.companies[0].title).toBe('Tesla')
// })


test('update company name', () => {

    let companies = {
        'Siri': [{id: 1, title: 'Google'}, {id: 2, title: 'Microsoft'}],
        'Alexa': [{id: 1, title: 'Meta'}]
    }

    const copy = updateCompany2(companies, 'Siri', 1, 'Google Inc')

    expect(copy['Siri']).not.toBe(companies['Siri'])
    expect(copy['Alexa']).toBe(companies['Alexa'])

})