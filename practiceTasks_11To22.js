/* Solutions of Basic JavaScript and NodeJS tasks from:
https://github.com/panacloud-modern-global-apps/typescript-node-projects/blob/main/getting-started-exercises.md
By Syed Faisal ur Rahman
faisalrahman36@hotmail.com

*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Task 11
var names = ['Maaz', 'Arham', 'Moiz', 'Mohib', 'Hania', 'Maira', 'Ammar', 'Zoya'];
//11a one by one without using iteration
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
console.log(names[5]);
console.log(names[6]);
console.log(names[7]);
//11b using for loop
console.log('\n Printing names using for loop. \n');
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//Task 12
//12a one by one without using iteration
console.log('How are you %s?', names[0]);
console.log('How are you %s?', names[1]);
console.log('How are you %s?', names[2]);
console.log('How are you %s?', names[3]);
console.log('How are you %s?', names[4]);
console.log('How are you %s?', names[5]);
console.log('How are you %s?', names[6]);
console.log('How are you %s?', names[7]);
//12b using for loop
console.log('\n Printing names and messages  using for loop. \n');
for (var i = 0; i < names.length; i++) {
    console.log('How are you %s?', names[i]);
}
// Task 13
var cars = ['Honda', 'Toyota', 'Suzuki'];
console.log('\n Printing car names and related statements  using for loop. \n');
for (var i = 0; i < cars.length; i++) {
    console.log('I would like to own a %s car.', cars[i]);
}
// Task 14
var guests = ['Maaz', 'Arham', 'Moiz', 'Mohib', 'Hania', 'Maira', 'Ammar', 'Zoya'];
console.log('\n Printing guest names and invitations  using for loop. \n');
for (var i = 0; i < guests.length; i++) {
    console.log('I would like to invite you to a dinner at my house tomorrow at 8 PM. Please come %s.', guests[i]);
}
//Task 15
console.log('Ufortunately, %s has homework to do so he cannot come so we are dropping him from the list.', guests[0]);
guests[0] = 'Zaviyar';
console.log('%s is the guest we are adding.', guests[0]);
console.log('\n Printing new guest names and invitations  using for loop. \n');
for (var i = 0; i < guests.length; i++) {
    console.log('I would like to invite you to a dinner at my house tomorrow at 8 PM. Please come %s.', guests[i]);
}
console.log('I have found a bigger table. I think we can add more people.');
// Task 16
//Adding guest at the start of the guest list
guests.unshift('Maaz');
//Adding guest at the end of the guest list
guests.push('Mohid');
//Adding guest in the middle without deleting any guests from the list
guests.splice(guests.length / 2, 0, 'Abrish');
for (var i = 0; i < guests.length; i++) {
    console.log('I would like to invite you to a dinner at my house tomorrow at 8 PM. Please come %s.', guests[i]);
}
console.log(guests);
console.log(guests.length);
//Task 17 
console.log('Unfortunately, I can now only invite two people.');
//Keep removing guests, till only two are left
while (guests.length > 2) {
    console.log(guests.length - 2);
    console.log('Dear %s \n Apologies, I cannot invite you as I do not have the capacity to invite more than two people.', guests.pop(), guests.length);
}
//printing new guests list
for (var i = 0; i < guests.length; i++) {
    console.log('I would like to invite you to a dinner at my house tomorrow at 8 PM. Please come %s.', guests[i]);
}
//remove the last two guests too.
guests.pop();
guests.pop();
//print empty array of guests list
console.log(guests);
//Task 18
var places = ['Mecca', 'Medina', 'Al-Quds', 'Srinagar', 'Istanbul'];
console.log('places in original array', places);
console.log('places in alphabetical order without modifying original', __spreadArray([], places, true).sort());
console.log('places in the original array', places);
console.log('places in reverse alphabetical order without modifying original', __spreadArray([], places, true).sort().reverse());
console.log('places in the original array', places);
console.log('places in reverse  order after modifying original', places.reverse());
console.log('places in the original array', places);
console.log('places in original order after restoring original', places.reverse());
console.log('places in the original array', places);
console.log('places in alphabetical order after modifying original', places.sort());
console.log('places in the original array', places);
console.log('places in reverse alphabetical order after modifying original', places.sort().reverse());
console.log('places in the original array', places);
// Task 19
guests = ['Maaz', 'Arham', 'Moiz', 'Mohib', 'Hania', 'Maira', 'Ammar', 'Zoya']; // guests has already been declared so just modify it
console.log('\n I am inviting %d guests. \n', guests.length);
// Task 20
// Array containing city names
var cities = ['Karachi', 'Lahore', 'Islamabad'];
console.log(cities);
// Task 21
//Array of JavaScript objects storing city names
var citiesObj = [{ name: 'Karachi' }, { name: 'Lahore' }, { name: 'Islamabad' }];
console.log(citiesObj);
// Task 22
//JavaScript does not give Index Error even if you try to access an out of bound index. It simply gives undefined as output
console.log(cities[3]);
console.log(cities[-1]);
//A good practice can be to have customized errors with some actions especially in critical processes like financial transactions.
if (String(cities[3]) == 'undefined') {
    console.log('Index out of range');
}
if (String(cities[-1]) == 'undefined') {
    console.log('Index out of range');
}
// You can create conditions where out of bound indexes can be replaced by boundary indexes
var indexGTMax = 3; //Index greater than max
var indexLTMin = -1; //Index less than minimum or zero for a non empty array
if (indexGTMax >= cities.length) {
    indexGTMax = cities.length - 1; //JavaScript array indices start from zero and end at n-1. Here, n is number of items in the array.
    console.log(indexGTMax, cities[indexGTMax]);
}
if (indexLTMin < 0) {
    indexLTMin = 0;
    console.log(indexLTMin, cities[indexLTMin]);
}
