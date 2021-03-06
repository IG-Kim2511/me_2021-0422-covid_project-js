"use strict";

// ð API

// /v3/covid-19/jhucsse/counties
let url_usa = 'https://disease.sh/v3/covid-19/jhucsse/counties';

// historical 
let url_historical = 'https://disease.sh/v3/covid-19/historical/us?lastdays=150';

// COVID-19 vaccine doses administered for all states
let url_vaccine = 'https://disease.sh/v3/covid-19/vaccine/coverage/states?lastdays=150';

// COVID-19 state of vaccine doses administered for all countries
let url_vaccine_world = 'https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=150';


//js.10 multiple axios
const requestOne = axios.get(url_historical);
const requestTwo = axios.get(url_vaccine_world);


// ð let, const

// let dateDisplay = 0;

// let newCases = 0;
// let newDeaths = 0;

// let totalCases = 0;
// let totalDeaths = 0;


// ð selectors

// js 4.
let windowsContainer = document.querySelector('.windows_container');
let covidWindow = document.querySelector('.covid_window');

// ð event Listeners
//  functions for sharing 
// ð functions standalone

//ð axios | covidUsa | /v3/covid-19/jhucsse/counties

// ðjs 2,4, covidUsa axios
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
    
    // ðjs 4.

    let date = document.querySelector('.date');
    date.innerHTML = response.data[0].updatedAt.substring(0,10);

    for (const iterator of response.data) {
      
        // console.log(iterator);

        let province = document.createElement('div');
        province.className = "province";
        province.innerHTML = iterator.province;      
        covidWindow.append(province); 
          
        let county = document.createElement('span');
        county.className = "county";
        county.innerHTML = ` ${iterator.county}`;
        province.append(county);   
        
        let confirmed = document.createElement('div');
        confirmed.className = "confirmed";
        confirmed.innerHTML = iterator.stats.confirmed;      
        covidWindow.append(confirmed);  
        
        let deaths = document.createElement('div');
        deaths.className = "deaths";
        deaths.innerHTML = iterator.stats.deaths;      
        covidWindow.append(deaths);           
    };

    // response.data.forEach( (a,i) => {               
    //   /* 
    //   1) create div covid_window in windows_container
    //   2) put province, county in 'covid window'
    //   */

    //   let province = document.createElement('div');
    //   province.className = "province";
    //   province.innerHTML = response.data[i].province;      
    //   covidWindow.append(province);      

    //   let county = document.createElement('span');
    //   county.className = "county";
    //   county.innerHTML = ` ${response.data[i].county}`;
    //   province.append(county);   
      
    //   let confirmed = document.createElement('div');
    //   confirmed.className = "confirmed";
    //   confirmed.innerHTML = response.data[i].stats.confirmed;      
    //   covidWindow.append(confirmed);  
      
    //   let deaths = document.createElement('div');
    //   deaths.className = "deaths";
    //   deaths.innerHTML = response.data[i].stats.deaths;      
    //   covidWindow.append(deaths);   
      
    // });

  } catch (error) {
    console.error(error);
  }
}
covidUsa();


// ðjs 6, historical_container axios
/*  api
cases:
1/1/21: 20252991

deaths:
1/1/21: 354232

recovered:
1/1/21: 0
*/

// ðJS 10, multiple axios

function historical_container() {

  let cases =[];                    //js 6-3
  let deaths =[];
  let vaccineUsa =[];

  axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
    const response = responses[0]
    const responseTwo = responses[1]        // ðJS 10

    // console.log(response);
    console.log(response.data.timeline);
    let casesObject = response.data.timeline.cases;  
    let deathsObject = response.data.timeline.deaths;  
    // let recoveredObject = response.data.timeline.recovered; 
    
    // console.log(responseTwo);    
    console.log(responseTwo.data[177].timeline);
    let vaccineUsaObject = responseTwo.data[177].timeline;   

    /* ðAlgorithm) for..in loop :  loop for object
      1. for...in
      2. push a each datas of object to empty array (let cases = [];)
      3. use 'let cases' to chart.js
      4. labels
    */
    
    for (const property in casesObject) {                   //js 6-2
        cases.push(casesObject[property]);  
    }
    
    for (const property in deathsObject) {        
        deaths.push(deathsObject[property]);  
        // console.log(deathsObject);
    }
    
    for (const property in vaccineUsaObject) {        
      vaccineUsa.push(vaccineUsaObject[property]);  
        // console.log(vaccineUsaObject);
    }

    // ð chart.js - covidCases ,covidDeaths ,recovered
    let ctx = document.getElementById('covidCases');

    let labels = Object.keys(casesObject)               //js 6-4    

    let covidCases = new Chart(ctx, {
        type: 'line',

        data: {
            labels: labels,                 //js 6-4
            datasets: [
              {
                label: 'covid cases for last 150days ',
                data: cases,                        //js 6-3
                backgroundColor: [
                '#2b81e4'
                ],
                borderColor: [
                  '#2b81e4'
                ],
                borderWidth: 1
            },
            {
              label: 'deaths for last 150days ',
              data: deaths,                        //js 6-3
              backgroundColor: [
              '#dc2f02'
              ],
              borderColor: [
                '#dc2f02'
              ],
              borderWidth: 1
          },
            {
              label: 'state of vaccine in USA for last 150days ',
              data: vaccineUsa,                        //js 6-3
              backgroundColor: [
              '#0eae44'
              ],
              borderColor: [
                '#0eae44'
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
        }, 
    });

    //ðjs 12. total_stats

    let totalCases = document.querySelector('.total_cases');
    let totalDeaths = document.querySelector('.total_deaths');
    let totalVaccine = document.querySelector('.total_vaccine');
    
    /* 
        let casesObject = response.data.timeline.cases;  
    let deathsObject = response.data.timeline.deaths;      
    */
    
    let latestCases = casesObject[Object.keys(casesObject)[Object.keys(casesObject).length - 1]]   
    
    let latestDeathsObject = deathsObject[Object.keys(deathsObject)[Object.keys(deathsObject).length - 1]] 

    let vaccineList = responseTwo.data[177].timeline;
    let latestVaccineNum = vaccineList[Object.keys(vaccineList)[Object.keys(vaccineList).length - 1]] 
    console.log(latestVaccineNum)
    
    totalCases.innerHTML = latestCases;
    totalDeaths.innerHTML = latestDeathsObject;
    totalVaccine.innerHTML = latestVaccineNum;

  })).catch(errors => {
    // react on errors.
  })
}

historical_container();

// ðJS 8, axios, url_vaccine_world
/* 
data: Array(184)
0:
177:
country: "USA"
timeline:
1/1/21: 3375693  */

/* ð
1. take country, and latest data of vaccine
2. make a chart.js 

4-2. empty array making
4-4. for loop :: each data taking
4-6. put those each datas ð to empty array 
4-8. put those empty array ð to chart.js
*/

const vaccine =()=>{
  axios.get(url_vaccine_world)
  .then(function (response) {
    // handle success
    console.log(response);
    // console.log(response.data[0].timeline);
    // console.log(response.data[0].country);

    // js 8-1. getting last item from object

    let countryArray =[];                 //js 8, 4-2
    console.log(countryArray);
 
    let lastVaccineNumArray =[];
    console.log(lastVaccineNumArray)

    for (let i = 0; i < response.data.length; i++) {  
      let country = response.data[i].country;                //js 8, 4-4
      // console.log(country);
      countryArray.push(country);                           //js 8, 4-6

      let vaccineNum = response.data[i].timeline;
      let lastVaccineNum = vaccineNum[Object.keys(vaccineNum)[Object.keys(vaccineNum).length - 1]]    
      // console.log(lastVaccineNum);   
      
      lastVaccineNumArray.push(lastVaccineNum);    
    }

    var ctx = document.getElementById('vaccineStateWorld').getContext('2d');
    var vaccineStateWorld = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: countryArray,                      //js 8, 4-8
            datasets: [{
                label: 'Vaccine coverage of each country',
                data: lastVaccineNumArray,                     //js 8, 4-8
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
    options: {
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

vaccine();



