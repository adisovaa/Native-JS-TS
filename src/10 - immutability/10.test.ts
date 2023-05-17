import {
    addNewUserBooks,
    makeHairstyle,
    moveUser,
    upgradeLaptop,
    UserType,
    UserWithBooksType,
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


test('upgrade user laptop', () => {
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

    const addNewBooksCopy = addNewUserBooks(user, ['html', 'css', 'js', 'ts'])

    expect(user).not.toBe(addNewBooksCopy)
    expect(user.address).toBe(addNewBooksCopy.address)
    expect(user.laptop).toBe(addNewBooksCopy.laptop)
    expect(user.laptop.title).toBe(addNewBooksCopy.laptop.title)
    expect(user.books).not.toBe(addNewBooksCopy.books)
    expect(user.books[3]).toBe('html')
})