"use strict";


/* 

/v3/covid-19/jhucsse/counties

https://disease.sh/v3/covid-19/jhucsse/counties

*/


//  C 58 . JS 58

// 🍄 let, const
// let dateDisplay = 0;

// let newCases = 0;
// let newDeaths = 0;

// let totalCases = 0;
// let totalDeaths = 0;

//🍄 axios | /v3/covid-19/jhucsse/counties

/* 
coordinates:
  latitude: "32.53952745"
  longitude: "-86.64408227"

country: "US"
county: "Autauga"
province: "Alabama"

stats:
  confirmed: 6793
  deaths: 107
  recovered: null

updatedAt: "2021-04-22 04:20:53"
*/

async function getUser() {
  try {
    const response = await axios.get('https://disease.sh/v3/covid-19/jhucsse/counties');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
getUser();




//🍄 axios  rapidApiKey
/* 
get the covid-19 stats for the past six months of one specific country by providing ISO code.

*/
/* 
function covidStates() {    

  const options = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/covid-ovid-data/sixmonth/USA',
    headers: {
      'x-rapidapi-key': api.rapidApiKey,
      'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);

    let dateDisplay = document.querySelector('.date');
    dateDisplay.innerHTML = response.data[0].date;


  }).catch(function (error) {
    console.error(error);
  });

}
covidStates();
 */



// 🍄 selectors

// 🍄 event Listeners

//  functions for sharing 

// 🍄 functions standalone



