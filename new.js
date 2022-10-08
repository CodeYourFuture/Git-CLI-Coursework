
let destination1 = {
  destinationName: "Edinburgh",
  distanceKms: 80,
  transportations: ["car", "bus", "train"],
};

let destination2 = {
  destinationName: "London",
  distanceKms: 650,
  transportations: ["car", "bus", "train"],
};

let destination3 = {
  destinationName: "Paris",
  distanceKms: 900,
  transportations: ["train", "plane"],
};

let destination4 = {
  destinationName: "Dublin",
  distanceKms: 350,
  transportations: ["plane", "ferry"],
};

let travelDestinations = [
  destination1,
  destination2,
  destination3,
  destination4,
];

/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

let destinationNamesWithin500Kms = travelDestinations.filter// Complete here

let destinationNameReachableByFerry = // Complete here

let destinationNamesMoreThan300KmsAwayByTrain =  // Complete here (PRINT THE RESULT IN THE CONSOLE USING FOREACH)

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  `Question 1) Expected result: Edinburgh,Dublin, actual result: ${destinationNamesWithin500Kms}`
);
console.log(
  `Question 2) Expected result: Dublin, actual result: ${destinationNameReachableByFerry}`
);
console.log(
  `Question 3) Expected result: London,Paris, actual result: ${destinationNamesMoreThan300KmsAwayByTrain}`
);
