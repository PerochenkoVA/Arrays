let postomat = ["null", "null", "null", "4-your package", "null"];
let clientAccount = 100;
console.log(postomat[3]);

let confirmationSMS = ("your parcel is in the cell at number 4", "A001DFX0");

if ((confirmationSMS = "A001DFX0")) {
  console.log(
    postomat[3],
    "You received a parcel from box 4 and your bill is 0"
  );
} else {
  confirmationSMS = "another text";
  console.log("nothing");
}
