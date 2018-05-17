const returnFirstTwoDrivers = function(arr) {
    return arr.slice(0,2);
}

const returnLastTwoDrivers = function(arr) {
    return arr.slice(arr.length - 2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function(fare){
        return fare * int;
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(fare)(2);
}

const fareTripler = function (fare) {
    return createFareMultiplier(fare)(3);
}

function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
}