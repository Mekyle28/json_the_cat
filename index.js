const { fetchBreedDescription } = require('./breedFetcher');


const catBreed = process.argv[2];

fetchBreedDescription(catBreed, (error, response, body) => {

  if (error !== null) {
    console.log('error: ', error);
    return error;
  } // Print the error if one occurred
  if (response.statusCode === 404) {
    console.log('status code: ', response.statusCode);
    return;
  }
  if (body.length === 0) {
    console.log("sorry, cat breed is not found");
    return;
  }
  if (response.statusCode === 200) {
    let breedDescription = (body[0]["description"]);
    console.log(breedDescription);
    return breedDescription;
  }
});