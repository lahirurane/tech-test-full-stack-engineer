const express = require('express');
const router = express.Router();
const getCapsules = require('../../Utils/Providers/CapsuleProvider');
const landingProvider = require('../../Utils/Providers/LandingPadProvider');
const dbPool = require('../../db');

//@route /api/capsules
//@desc Get All Capsules
//@access public
router.get('/capsules', async (req, res) => {
  const temp = await dbPool.query(`SELECT * FROM spaceData`);
  console.log(temp);
  getCapsules()
    .then((capsulesData) => {
      res.status(200).json({ result: { capsulesData, status: true } });
    })
    .catch((error) => {
      //log error
      res
        .status(400)
        .json({ result: { message: 'Error in getting the capsules data', status: false } });
    });
});

//@route /api/landingpad/:id
//@desc Get Landing Pad by ID
//@access public
router.get('/landingpad/:id', async (req, res) => {
  const landingId = req.params.id;

  const result = await landingProvider(landingId);

  if (result.status) {
    res.status(200).json({
      result: result,
    });
  } else {
    res.status(400).json({
      result: result,
    });
  }
});

module.exports = router;
