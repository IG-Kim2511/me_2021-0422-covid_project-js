"use strict";

//  C 58 . JS 58

// 🍄 API

// /v3/covid-19/jhucsse/counties
let url_usa = 'https://disease.sh/v3/covid-19/jhucsse/counties';

// historical 
let url_historical = 'https://disease.sh/v3/covid-19/historical/us?lastdays=500';


// 🍄 let, const

// let dateDisplay = 0;

// let newCases = 0;
// let newDeaths = 0;

// let totalCases = 0;
// let totalDeaths = 0;


// 🍄 selectors

let windowsContainer = document.querySelector('.windows_container');
let covidWindow = document.querySelector('.covid_window');

// 🍄 event Listeners
//  functions for sharing 
// 🍄 functions standalone

//🍄 axios | covidUsa | /v3/covid-19/jhucsse/counties

// 🍉js 2,4, covidUsa axios
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

async function covidUsa() {
  try {
    const response = await axios.get(url_usa);
    console.log(response.data);    
    
    // 🍉js 2.
      /*  let province = document.querySelector('.province');
          province.innerHTML = response.data[0].province;

          let county = document.querySelector('.county');
          county.innerHTML = response.data[0].county;

          let date = document.querySelector('.date');
          date.innerHTML = response.data[0].updatedAt;

          let confirmed = document.querySelector('.confirmed');
          confirmed.innerHTML = response.data[0].stats.confirmed;

          let deaths = document.querySelector('.deaths');
          deaths.innerHTML = response.data[0].stats.deaths;
      */

    // 🍉js 4.

    let date = document.querySelector('.date');
    date.innerHTML = response.data[0].updatedAt;

    response.data.forEach( (a,i) => {               
      /* 
      1) create div covid_window in windows_container
      2) put province, county in 'covid window'
      */

      let province = document.createElement('div');
      province.className = "province";
      province.innerHTML = response.data[i].province;      
      covidWindow.append(province);      

      let county = document.createElement('span');
      county.className = "county";
      county.innerHTML = ` ${response.data[i].county}`;
      province.append(county);   
      
      let confirmed = document.createElement('div');
      confirmed.className = "confirmed";
      confirmed.innerHTML = response.data[i].stats.confirmed;      
      covidWindow.append(confirmed);  
      
      let deaths = document.createElement('div');
      deaths.className = "deaths";
      deaths.innerHTML = response.data[i].stats.deaths;      
      covidWindow.append(deaths);   
      
    });

  } catch (error) {
    console.error(error);
  }
}
covidUsa();


// 🍉js 6, historical_container axios
/*  api
cases:
1/1/21: 20252991

deaths:
1/1/21: 354232

recovered:
1/1/21: 0
*/

function historical_container() {

  let cases =[];                    //js 6-3
  let deaths =[];
  let recovered =[];

  axios.get(url_historical)
  .then(function (response) {

    let casesObject = response.data.timeline.cases;  
    let deathsObject = response.data.timeline.deaths;  
    let recoveredObject = response.data.timeline.recovered;  

    /* 🍄Algorithm) for..in loop :  loop for object
      1. for...in
      2. push a each datas of object to empty array (let cases = [];)
      3. use 'let cases' to chart.js
      4. labels
    */
    for (const property in casesObject) {
        // console.log(`${property}: ${casesObject[property]}`);
        cases.push(casesObject[property]);  
    }
    
    for (const property in deathsObject) {
        // console.log(`${property}: ${casesObject[property]}`);
        deaths.push(deathsObject[property]);  
        // console.log(deathsObject);
    }
    
    for (const property in recoveredObject) {
        // console.log(`${property}: ${casesObject[property]}`);
        recovered.push(recoveredObject[property]);  
        console.log(recoveredObject);
    }

    // 🍄 chart.js - covidCases ,covidDeaths ,recovered
    var ctx = document.getElementById('covidCases');

    let labels = Object.keys(casesObject)               //js 6-4

    var covidCases = new Chart(ctx, {
        type: 'line',

        data: {
            labels: labels,                 //js 6-4
            datasets: [
              {
                label: 'covid cases for last 500days ',
                data: cases,                        //js 6-3
                backgroundColor: [
                '#feb546'
                ],
                borderColor: [
                  '#feb546'
                ],
                borderWidth: 1
            },
            {
              label: 'deaths for last 500days ',
              data: deaths,                        //js 6-3
              backgroundColor: [
              'lightsalmon'
              ],
              borderColor: [
                'lightsalmon'
              ],
              borderWidth: 1
          },
            {
              label: 'recovered for last 500days ',
              data: recovered,                        //js 6-3
              backgroundColor: [
              '#2b81e4'
              ],
              borderColor: [
                '#2b81e4'
              ],
              borderWidth: 1
          } 
          ],            
        },
        options: {

          // js 8, chart js size
          responsive:true,
          maintainAspectRatio: false,

            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }        
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });    
}

historical_container();

