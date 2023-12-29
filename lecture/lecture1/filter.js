console.log("kaise h saare!!");

const DATA = [
    { id: 1, title: 'first' },
    { id: 2, title:'second' },
    { id: 3, title: 'third' },
    { id: 4, title: 'fourth' }
]

// using map toprint in table uppercase

const upperData = DATA.map(ele => ele.title.toUpperCase())
// console.table(upperData);

const filterData = DATA.filter(ele => ele.id % 2 == 0);

// console.table(filterData);

const filterData1 = DATA.filter(ele => ele.id % 2 != 0);

// console.table(filterData1);
// console.table(DATA);

// splice method

const data = [
    'shaikh',
    'majid',
    'tarique',
    'bisham'
]

data.splice(1, 0, 'mohammad');

console.log(data);

data.splice(4, 1, 'Azamgarh');
console.log(data);