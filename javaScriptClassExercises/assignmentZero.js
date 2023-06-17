// 4.96 Exercises

// Exercise A
let spaceShuttle = 'Determination',
shuttleSpeed = 17500, 
marsDistance = 225000000,
moonDistance = 384400,
milesPerKm = 0.621;

// Exercise B
console.log(typeof spaceShuttle);
console.log(typeof shuttle_speed);
console.log(typeof marsDistance);
console.log(typeof moonDistance);
console.log(typeof milesPerKm);

//Exercise C
let marsMiles = marsDistance * milesPerKm,
marsHours = marsMiles / shuttleSpeed,
marsDays = marsHours / 24;

// Exercise D
console.log(spaceShuttle + " " + "will take " + marsDays + " days to reach Mars.");

// Exercise E
let moonMiles = moonDistance * milesPerKm,
moonHours = moonMiles / shuttleSpeed,
moonDays = moonHours / 24;

console.log(spaceShuttle + " " + "will take " + moonDays + " days to reach Mars.");
