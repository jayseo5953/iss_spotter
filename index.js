const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss')

// fetchMyIP((error,ip)=>{
//   if (error) {
//     console.log(`Something went wrong! Error msg : `, error);
//   } else if (!error) {
//     console.log(`My IP address is :`, ip);
//   }
// });

// fetchCoordsByIP ('162.245.144.188', (error, data) => {
//   console.log(error);
//   console.log(data);
// })
