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
//Task 34
var pizzas = ['pepperoni', 'fajita', 'supremo', 'chicken tikka'];
for (var i = 0; i < pizzas.length; i++) {
    console.log('I love %s pizza.', pizzas[i]);
}
console.log('I really love pizza.');
//Task 35
var cats = ['domestic cat', 'tiger', 'puma', 'jaguar'];
for (var i = 0; i < cats.length; i++) {
    console.log('I think %s can be a good pet.', cats[i]);
}
console.log('These are all felines and love meat.');
//Task 36
var shirt_sizes = ['Extra Large', 'Large', 'Medium', 'Small'];
var message = 'I love JavaScript';
function make_shirt1(shirtSize, Message) {
    console.log('Shirt Size : %s', shirtSize);
    console.log('Message : %s', Message);
}
for (var i = 0; i < shirt_sizes.length; i++) {
    make_shirt1(shirt_sizes[i], message);
}
//Task 37
function make_shirt(shirtSize, Message) {
    if (shirtSize === void 0) { shirtSize = 'Large'; }
    if (Message === void 0) { Message = 'I love JavaScript'; }
    console.log('Shirt Size : %s', shirtSize);
    console.log('Message : %s', Message);
}
make_shirt(); //shirtSize and Message will both be default values
make_shirt(shirt_sizes[2]); //Message will be default value
make_shirt(shirt_sizes[3], 'I love TypeScript'); //No default values
//Task 38
var cities2 = ['Karachi', 'Lahore', 'Istanbul', 'Islamabad'];
function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log('%s is in %s.', city, country);
}
describe_city(cities2[0]);
describe_city(cities2[1]);
describe_city(cities2[2], 'Türkiye');
//Task 39
function city_country(city, country) {
    return city + ', ' + country;
}
console.log(city_country('Karachi', 'Pakistan'));
console.log(city_country('Riyadh', 'Saudi Arabia'));
console.log(city_country('Lahore', 'Pakistan'));
//Task 40
function make_album(album, artist, tracks) {
    if (arguments.length == 3) {
        return { albumName: album, artistName: artist, numberOfTracks: tracks };
    }
    else {
        return { albumName: album, artistName: artist };
    }
}
console.log(make_album('Dil Ki Baat', 'Junaid Jamshed'));
console.log(make_album('Duur', 'Strings'));
console.log(make_album('Dhaani', 'Strings', 10));
//Task 41
var magicians = ['Umru Ayyar', 'Stephen Strange', 'Victor von Doom'];
function show_magicians(magiciansList) {
    for (var i = 0; i < magiciansList.length; i++) {
        console.log('Magician name is %s.', magiciansList[i]);
    }
}
show_magicians(magicians);
//Task 42
function make_great(magiciansList) {
    for (var i = 0; i < magiciansList.length; i++) {
        magiciansList[i] = 'The Great ' + magiciansList[i];
    }
}
make_great(magicians);
show_magicians(magicians);
//Task 43
magicians = ['Umru Ayyar', 'Stephen Strange', 'Victor von Doom']; //restoring the copy
var copy_magicians = __spreadArray([], magicians, true); //copy of magicians
console.log('copy_magicians');
make_great(copy_magicians);
show_magicians(copy_magicians);
console.log('original magicians');
show_magicians(magicians);
//Task 44
function sandwiches() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log('The sandwich contains %s', args);
}
sandwiches('bread', 'egg', 'chicken', 'cheese');
sandwiches('bread', 'egg', 'chicken', 'tomato');
sandwiches('bread', 'egg', 'beef', 'tomato');
//Task 45
function cars1(manufacturerName, modelName) {
    var otherInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        otherInfo[_i - 2] = arguments[_i];
    }
    return { manufacturer: manufacturerName, model: modelName, otherInfo: otherInfo };
}
var carFeatures = { colour: 'Black', model: 2012 };
var carRegistrationInfo = { owner: 'Ahmed', registrationCity: 'Karachi' };
console.log(cars1('Toyota', 'Platz', carFeatures, carRegistrationInfo));
