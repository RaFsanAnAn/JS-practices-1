//feetToMile
function feetToMile(feet) {
    if (feet < 1) {
        return "Error! Distance cannot be negative.";
    }
    else {
        var mile = feet / 5280;
        return mile;
    }
}
var result = feetToMile(1000);
console.log(result, "mile");


//woodCalculator
function woodCalculator(chair, table, bed) {
    if (chair < 1 || table < 1 || bed < 1) {
        return "Error! Input cannot be negative.";
    }
    else {
        var chairCount = chair * 1;
        var tableCount = table * 3;
        var bedCount = bed * 5;
        var totalWood = chairCount + tableCount + bedCount;
        return totalWood;
    }
}
var result2 = woodCalculator(100, 100, 100);
console.log("Total wood needed :", result2, "cubic feet");


// brickCalculator
function brickCalculator(floors) {
    if (floors < 1) {
        return "Error! Number of floors cannot be negative.";
    }
    else if (floors >= 1 && floors <= 10) {
        var totalBricks = (floors * 15) * 1000;
        return totalBricks;
    }
    else if (floors > 10 && floors <= 20) {
        var firstTenFloors = (10 * 15) * 1000;
        var restFloors = ((floors - 10) * 12) * 1000;
        var totalBricks = firstTenFloors + restFloors;
        return totalBricks;
    }
    else {
        var firstTenFloors = (10 * 15) * 1000;
        var secondTenFloors = (10 * 12) * 1000;
        var restFloors = ((floors - 20) * 10) * 1000;
        var totalBricks = firstTenFloors + secondTenFloors + restFloors;
        return totalBricks;
    }
}
var result3 = brickCalculator(50);
console.log(result3, "bricks are needed");


//tinyFriend
function tinyFriend(friends) {
    if (friends.length > 0) {
        var tiny = friends[0];
        for (var i = 0; i < friends.length; i++) {
            var element = friends[i];
            if (element.length < tiny.length && typeof element == "string") {
                tiny = element;
            }
        }
        return tiny;
    }
    else {
        return "Input cannot be empty!";
    }
}
var result4 = tinyFriend(['Abul', 'Saleka', 'Kulsum', 'Rahim', 'Jorina']);
console.log("Tiny friend is:", result4);