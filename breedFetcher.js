const needle = require('needle');


const fetchBreedDescription = function(catBreed, callback) {
  needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, (error, response, body) => {

    if (error !== null) {
      return callback(error, null);
    }

    if (response.statusCode === 404) {
      return callback(response.statusCode, null);
    }

    if (body.length === 0) {
      let notFound = console.log("sorry, cat breed is not found");
      return callback(notFound, null);
    }
    
    if (response.statusCode === 200) {
      let breedDescription = (body[0]["description"]);
      return callback(null, breedDescription);
    }
  });
};


module.exports = { fetchBreedDescription };








// needle.get(`https://api.thecatapi.cm/v1/breeds/search?q=${catBreed}`, (error, response, body) => {

//   if (error !== null) {
//     console.log('error: ', error);
//     return;
//   } // Print the error if one occurred
//   if (response.statusCode === 404) {
//     console.log('status code: ', response.statusCode);
//     return;
//   }
//   if (body.length === 0) {
//     console.log("sorry, cat breed is not found");
//     return;
//   }
//   if (response.statusCode === 200) {
//     //console.log('body:', body); // Print the HTML for the Google homepage.
//     let breedDescription = (body[0]["description"]);
//     console.log(breedDescription);
//   }
// });

