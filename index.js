// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
// const { fetchISSFlyOverTimes } = require('./iss');

// // fetchMyIP((error,ip)=>{
// //   if (error) {
// //     console.log(`Something went wrong! Error msg : `, error);
// //   } else if (!error) {
// //     console.log(`My IP address is :`, ip);
// //   }
// // });

// // fetchCoordsByIP('162.245.144.188', (error, data) => {
// //   if (error) {
// //     console.log("it didn't work: ", error);
// //     return;
// //   }
// //   console.log("it did work!: ", data);
// // });

// // fetchISSFlyOverTimes({latitude: '49.28490', longitude: '-123.11500'},(error, data) => {
// //   if (error) {
// //     console.log("It didn't work: ", error);
// //     return;
// //   }
// //   console.log("It did work!: ", data);
// // });

let printTime = (time) => {
  for (let ele of time) {
    let date = new Date(0);
    date.setUTCSeconds(ele.risetime);
    let duration = ele.duration;
    console.log(`Next pass at ${date} for ${duration} seconds!`);
  }
};



const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printTime(passTimes);
  // console.log(passTimes);
});
