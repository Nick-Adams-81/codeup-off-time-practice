'use strict';

const companies = [
    {name: 'company 1', category: 'Finance', start: 1981, end: 2003},
    {name: 'company 2', category: 'Retail', start: 1992, end: 2008},
    {name: 'company 3', category: 'Auto', start: 1999, end: 2007},
    {name: 'company 4', category: 'Retail', start: 1989, end: 2010},
    {name: 'company 5', category: 'Technology', start: 2009, end: 2014},
    {name: 'company 6', category: 'Finance', start: 1987, end: 2010},
    {name: 'company 7', category: 'Auto', start: 1986, end: 1995},
    {name: 'company 8', category: 'Technology', start: 2011, end: 2016},
    {name: 'company 9', category: 'Finance', start: 1981, end: 1989},
]

const ages = [33, 12, 20, 15, 6, 54, 21, 44, 61, 13, 45, 19, 32, 4];

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

const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies);

const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990);
console.log(eightiesCompanies);

const overTenYears = companies.filter(company => (company.end - company.start >= 10))
console.log(overTenYears)

// map //
//create array of company names

const agesSquare = ages.map(age => Math.sqrt(age))
console.log(agesSquare)
const ageTimes2 = ages.map(age => age * 2)
console.log(ageTimes2)

const agesChainedMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2)
//console.log(agesChainedMap)
const companyNames = companies.map(company => {return company.name});
//console.log(companyNames)

// sort //
const sortedCompanies = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1))
console.log(sortedCompanies)

const sortedAges = ages.sort((a, b) => b - a)
console.log(sortedAges)


// reduce //
const ageSum = ages.reduce((total, age) =>  total + age, 0)
console.log(ageSum)

const getTotalYears = companies.reduce((total,company) => total + (company.end - company.start), 0)

console.log(getTotalYears)
