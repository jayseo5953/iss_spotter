let request = require('request-promise-native');


let fetchMyIP = () => {
  return request("https://api.ipify.org?format=json");
};

let fetchCoordsByIP = (IP) => {
  let myIP = JSON.parse(IP).ip
  return request(`https://api.ipgeolocation.io/ipgeo?apiKey=70d2f6d2959146ac91edce65f58b1ded&ip=${myIP}`)
};

let fetchISSFlyOverTimes = (coords, callback) => {
  let geoData = JSON.parse(coords)
  
  return request(`http://api.open-notify.org/iss-pass.json?lat=${geoData.latitude}&lon=${geoData.longitude}`)

};

let nextISSTimesForMyLocation = () => {
  return fetchMyIP()
  .then(IP => fetchCoordsByIP(IP))
  .then(coords => fetchISSFlyOverTimes(coords))
  .then(time => {
    let result = JSON.parse(time).response;
    return result;
  })
}

module.exports = {
nextISSTimesForMyLocation
}