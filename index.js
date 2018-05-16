// Code your solution in this file!
const returnFirstTwoDrivers = arrayOfDrivers => arrayOfDrivers.slice(0, 2)

const returnLastTwoDrivers = arrayOfDrivers => arrayOfDrivers.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(int) {
  return function (fare) { return int * fare}
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (arrayOfDrivers, func) {return func(arrayOfDrivers)}
