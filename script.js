"use strict";


/* 

/v3/covid-19/jhucsse/counties

https://disease.sh/v3/covid-19/jhucsse/counties

*/


//  C 58 . JS 58

// 🍄 let, const

let url = 'https://disease.sh/v3/covid-19/jhucsse/counties';

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
    const response = await axios.get(url);
    console.log(response.data);    
    
    let province = document.querySelector('.province');
    province.innerHTML = response.data[0].province;

    let county = document.querySelector('.county');
    county.innerHTML = response.data[0].county;

    let date = document.querySelector('.date');
    date.innerHTML = response.data[0].updatedAt;

    let confirmed = document.querySelector('.confirmed');
    confirmed.innerHTML = response.data[0].stats.confirmed;

    let deaths = document.querySelector('.deaths');
    deaths.innerHTML = response.data[0].stats.deaths;


  } catch (error) {
    console.error(error);
  }
}
getUser();






// 🍄 selectors

// 🍄 event Listeners

//  functions for sharing 

// 🍄 functions standalone



