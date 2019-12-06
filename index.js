const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error,ip)=>{
//   if (error) {
//     console.log(`Something went wrong! Error msg : `, error);
//   } else if (!error) {
//     console.log(`My IP address is :`, ip);
//   }
// });

fetchCoordsByIP('162.245.144.188', (error, data) => {
  if (error) {
    console.log("it didn't work: ", error);
    return;
  }
  console.log("it did work!: ", data);
});

fetchISSFlyOverTimes({latitude: '49.28490', longitude: '-123.11500'},(error, data) => {
  if (error) {
    console.log("It didn't work: ", error);
    return;
  }
  console.log("It did work!: ", data);
});
