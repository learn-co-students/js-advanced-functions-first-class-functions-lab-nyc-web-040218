const returnFirstTwoDrivers= function(array){
  return [array[0],array[1]]
}
const returnLastTwoDrivers= function(array){
  return [array[array.length-2],array[array.length-1]]
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(number){
  return function(multiplier){
    return multiplier * number
  }
}
const fareDoubler = function(number){
  return createFareMultiplier(number)(2)
}
const fareTripler = function(number){
  return createFareMultiplier(number)(3)
}
const selectDifferentDrivers = function(array, aFunction){
  return aFunction(array)
}
