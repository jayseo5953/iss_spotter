let { nextISSTimesForMyLocation } = require('./iss_promised.js');

let printTime = (time) => {
  for (let ele of time) {
    let date = new Date(0);
    date.setUTCSeconds(ele.risetime);
    let duration = ele.duration;
    console.log(`Next pass at ${date} for ${duration} seconds!`);
  }
};


nextISSTimesForMyLocation()
  .then(time => printTime(time))
  .catch(error => console.log("You got an Error!: ",error.message));

