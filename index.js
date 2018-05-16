// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
  const newArray = []
  newArray.push(array[0])
  newArray.push(array[1])
  return newArray
}

const returnLastTwoDrivers = function (array){
  const newArray = []
  newArray.push(array[array.length - 2])
  newArray.push(array[array.length - 1])
  return newArray
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(num){
  return function(multiplier){
    return num * multiplier
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, previousdriverfunctions){
  return previousdriverfunctions(drivers)
}
