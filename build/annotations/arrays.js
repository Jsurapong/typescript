"use strict";
var carMakers = ["ford", "toyota", "chevy"];
var dates = [new Date(), new Date()];
// const carsByMake = [["f150"], ["corolla"], ["camaro"]];
var carsByMake = [];
// Help with inference when extracting values
var car = carMakers[0];
var myCar = carMakers.pop();
// Prevent incompatible values
carMakers.push(100);
// Help with 'map'
carMakers.map(function (car) {
    return car.toUpperCase();
});
// Flexible types
var importantDates = [];
importantDates.push("2030-10-10");
importantDates.push(new Date());
