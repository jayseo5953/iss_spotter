const request = require('request');


let fetchMyIP = (callback) => {
  const source = 'https://api.ipify.org?format=json';
  request(source,(err, response, body)=>{
    if (err) {
      callback(err.message,null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const dataObj = JSON.parse(body);
    let myIp = dataObj['ip'];
    callback(null, myIp);
    
  }
  );
};

let fetchCoordsByIP = (IP, callback) => {
  const source = `https://api.ipgeolocation.io/ipgeo?apiKey=70d2f6d2959146ac91edce65f58b1ded&ip=${IP}`;
  request(source,(err, response, body) => {

    if (err) {
      callback(err,null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    
    let output = JSON.parse(body);
    let latitude = output.latitude;
    let longitude = output.longitude;
    let geoData = {latitude,longitude};
    callback(null, geoData);
  });
};
let fetchISSFlyOverTimes = (coords, callback) => {
  const source = `http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`;
  request(source, (err, response, body)=>{
    if (err) {
      callback(err, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    let output = JSON.parse(body).response;
    callback(null,output);
  });
};

// fetchISSFlyOverTimes({latitude: '49.28490', longitude: '-123.11500'})

module.exports = {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes};