'use strict';

var obj1 = {}

obj1.name = "nick"
obj1.age = 39
//console.log(obj1)


var arr1 = []

arr1.unshift(1)
arr1.push(2)
arr1.push(3)
//console.log(arr1)

arr1.pop()
arr1.shift()
//console.log(arr1)

var persons = [
    {
        name: 'nick adams',
        age: 39,
        car: {
            make: 'tesla',
            model: 3,
            year: 2019
        },
        mother: 'terry adams',
        father: 'clark adams'
    },
    {
        name: 'john doe',
        age: 30,
        car: {
            make: 'ford',
            model: 'mustang',
            year: 2017
        },
        mother: 'jane doe',
        father: 'john doe sr'
    },
    {
        name: 'jane doe',
        age: 27,
        car: {
            make: 'toyota',
            model: 'celica',
            year: 2012
        },
        mother: 'janet doe',
        father: 'john doe sr'
    }
]

console.log(persons)
persons.push(
    {
        name: 'clark adams',
        age: 63,
        car: {
            make: 'volkswagon',
            model: 'beetle',
            year: 1972
        },
        mother: 'jennifer adams',
        father: 'john adams'
    }
)

persons.forEach(function (person) {
    console.log(person.name)
    console.log(person.age)
    console.log(person.mother)
    console.log(person.father)
    console.log(' --------- ')

})


var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for(var i = 0; i < arr2.length; i++) {
    console.log(arr2[i])
}

for(var j = arr2.length - 1; j >=0; j--) {
    console.log(arr2[j])
}


