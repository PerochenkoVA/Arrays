let postomat = ["null", "null", "null", "A001DFX0", "null"];
let clientAccount = 100;
console.log(postomat[3]);
let codeSMS = "A001DFX0";
for (codeSMS of postomat) {
  switch (codeSMS) {
    case "A001DFX0":
      console.log("You received a parcel from box 4 and your bill is 0");
      break;
    case "":
      console.log("Please try again");
      break;
  }
}

// if ((confirmationSMS = "A001DFX0")) {
//   console.log(
//     postomat[3],
//     "You received a parcel from box 4 and your bill is 0"
//   );
// } else {
//   confirmationSMS = "another text";
//   console.log("nothing");
// }
