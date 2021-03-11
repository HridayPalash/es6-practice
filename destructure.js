const person = { name: 'Jack Williamson', age: 25, address: 'Kochukhet', job: 'Facebooking', gfName:'Emma Watson', friends: ['Hriday', 'Palash', 'Nihar', 'Adnan'] };
const { gfName, address, friends} = person;
// console.log(gfName, address, friends);
// Complex Object || taking properties from a complex object
const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'Tiger Leader'
    }
}
const { leader } = complexObject.info;
console.log(leader);
// Finding object from array
myFriends = ['Shakib Khan', 'Amir Khan', 'Sharukh Khan', 'Arman Khan'];
const [ chotoFriend, nextFriend, ...restFriends ] = myFriends;
console.log(restFriends);