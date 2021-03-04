// Code your solution in this file!
let returnFirstTwoDrivers = function(drivers) {
    const newDriversArray = drivers.slice(0, 2)
    return newDriversArray
}

let returnLastTwoDrivers = function(drivers) {
    const newDriversArray = drivers.slice(2)
    return newDriversArray
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

let createFareMultiplier = function(arg) {
    return function(int){
        return arg * int
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)


let selectDifferentDrivers = function(drivers, driversFunc) {
    return driversFunc(drivers)
}