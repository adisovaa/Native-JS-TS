test('should select old peoples older than 90', () => {
    const ages = [18, 20, 22, 1, 100, 90, 14]

    const oldAges = ages.filter(age => age > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})


test('should take courses cheaper than 160', () => {
    const courses = [
        {title: 'CSS', price: 110},
        {title: 'HTMl', price: 200},
        {title: 'JS/TS', price: 150}
    ]

    const cheapCourses = courses.filter(course => course.price < 160)

    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe('CSS')
    expect(cheapCourses[1].title).toBe('JS/TS')
})


test('get only completed tasks' , () => {
    const tasks = [
        {id: 1, title: 'Milk', isDone: false},
        {id: 2, title: 'Sweet', isDone: true},
        {id: 3, title: 'Meat', isDone: true},
        {id: 4, title: 'Fruits', isDone: false}
    ]

    const completedTasks = tasks.filter(task => task.isDone)
    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(3)
})


test('get only uncompleted tasks' , () => {
    const tasks = [
        {id: 1, title: 'Milk', isDone: false},
        {id: 2, title: 'Sweet', isDone: true},
        {id: 3, title: 'Meat', isDone: true},
        {id: 4, title: 'Fruits', isDone: false}
    ]

    const uncompletedTasks = tasks.filter(task => !task.isDone)
    expect(uncompletedTasks.length).toBe(2)
    expect(uncompletedTasks[0].id).toBe(1)
    expect(uncompletedTasks[1].id).toBe(4)
})



