'use strict';

const companies = [
    {name: 'company 1', category: 'Finance', start: 1981, end: 2003},
    {name: 'company 2', category: 'Retail', start: 1992, end: 2008},
    {name: 'company 3', category: 'Auto', start: 1999, end: 2007},
    {name: 'company 4', category: 'Retail', start: 1989, end: 2010},
    {name: 'company 5', category: 'Technology', start: 2009, end: 2014},
    {name: 'company 6', category: 'Finance', start: 1987, end: 2010},
    {name: 'company 7', category: 'Auto', start: 1986, end: 1996},
    {name: 'company 8', category: 'Technology', start: 2011, end: 2016},
    {name: 'company 9', category: 'Finance', start: 1981, end: 1989},
]

const ages = [33, 12, 20, 15, 6, 54, 21, 44, 61, 13, 45, 19, 32];

// companies.forEach(company => console.log(company))

// filter //
// old es-5 for loop
let canDrink = []
for(let i = 0; i < ages.length; i++) {
    if(ages[i] >= 21) {
        canDrink.push(ages[i]);
    }
}
//console.log(canDrink)

// es-6 filter method
const willDrink = ages.filter(age => age >= 21)
console.log(willDrink);

