const validateLandingPad = require('../Validations/ValidateLandingPad');
const dbPool = require('../../db');
const axios = require('axios');

//Return Launch Data for given ID
const landingProvider = (landingId) => {
  return new Promise(async (resolve, reject) => {
    //Validate landingId
    const validateLanding = validateLandingPad(landingId);

    if (validateLanding.isValid) {
      //Check Launch is available in db
      const rows = await dbPool.query(`SELECT * FROM spaceData where id='${landingId}'`);

      if (rows.length > 0) {
        const { id, spaceItem } = rows[0];
        const { full_name, status, location } = JSON.parse(spaceItem);
        resolve({ id, full_name, status, location, status: true });
      } else {
        // fetch data from spacex api
        const responseData = await fetchLaunchPad(landingId);

        if (responseData.status) {
          //insert launch data to the table
          const { full_name, status, location } = responseData;
          const spaceItem = JSON.stringify({ full_name, status, location });
          await dbPool.query(
            `INSERT INTO spaceData (id,spaceItem) VALUES ('${responseData.id}', '${spaceItem}')`
          );
        }

        resolve({ ...responseData });
      }
    } else {
      resolve({ error: validateLanding.error, status: false });
    }
  });
};

//Fetch Launch Pad details
const fetchLaunchPad = (landpadId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://api.spacexdata.com/v3/landpads/${landpadId}`)
      .then((response) => {
        const { id, full_name, status, location } = response.data;
        resolve({ id, full_name, status, location, status: true });
      })
      .catch((error) => {
        resolve({
          error: `Error in fetching landing pad details: `,
          details: error.message,
          status: false,
        });
      });
  });
};
module.exports = landingProvider;
