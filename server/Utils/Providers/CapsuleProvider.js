const axios = require('axios');

let capsuleTemp = null;

const getCapsules = () => {
  return new Promise((resolve, reject) => {
    if (!capsuleTemp) {
      axios
        .get('https://api.spacexdata.com/v3/capsules?sort=original_launch')
        .then((response) => {
          capsuleTemp = response.data;
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    } else {
      resolve(capsuleTemp);
    }
  });
};

module.exports = getCapsules;
