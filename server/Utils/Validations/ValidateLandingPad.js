module.exports = validateLandingPad = (landingID) => {
  let error = {};
  let isValid = true;

  if (
    landingID === null ||
    landingID === 'null' ||
    landingID === '' ||
    typeof landingID === 'undefined'
  ) {
    error = 'Landing ID field is required';
    isValid = false;
  }

  return {
    error,
    isValid,
  };
};
