//declaring constants
const baseFare = 50;
const chargePerKm = 15;
//declaring variables
let fare;
let distanceInKm;
let totalFare;
//funtion to calculate fare
function calculateBodaFare(distanceInKm) {
  fare = distanceInKm * chargePerKm;
  totalFare = baseFare + fare;
  return totalFare, fare;
}
//user input
X = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
distanceInKm = parseInt(X);
console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
console.log("Ukikalia Pikipiki: KES 50");
//calling the function
calculateBodaFare(distanceInKm);
console.log(`mpaka huko KES ${fare}`);
console.log(`Total: KES ${totalFare}`);
console.log("     ");
console.log("Panda Pikipiki!");
