"use strict";

//  C 58 . JS 58

// 🍄 let, const
// let dateDisplay = 0;

// let newCases = 0;
// let newDeaths = 0;

// let totalCases = 0;
// let totalDeaths = 0;

//🍄 axios 

/* 
get the covid-19 stats for the past six months of one specific country by providing ISO code.

*/
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

    let newCases = document.querySelector('.new_cases');
    newCases.innerHTML = response.data[0].new_cases;

    let newDeaths = document.querySelector('.new_deaths');
    newDeaths.innerHTML = response.data[0].new_deaths;

    let totalCases = document.querySelector('.total_cases');
    totalCases.innerHTML = response.data[0].total_cases;

    let totalDeaths = document.querySelector('.total_deaths');
    totalDeaths.innerHTML = response.data[0].total_deaths;

  }).catch(function (error) {
    console.error(error);
  });

}
covidStates();



// totalCases.addEventListener()

/* 
get all vaccine news from more than 20 well-founded broadcasting services including: WHO, CNN, BBC, FOX-news, TIME, MNT(Medical-News-Today), Bloomberg, ABC-news, CBS-news, CBC-news, NBC-news, USA Today, New Scientist, National Geographic, Google news, News24, Next Big Future, The Times of India, The Wall Street Journal, The Washington Post, and Axios.
 */
function vaccineNews() { 

  const options = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-vaccine-news/0',
    headers: {
      'x-rapidapi-key': api.rapidApiKey,
      'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);

    let pubDate = document.querySelector('.pubDate');
    pubDate.innerHTML = response.data.news[0].pubDate.substring(0,10);    

    let title = document.querySelector('.title');
    title.innerHTML = response.data.news[0].title;

    let content = document.querySelector('.content');
    content.innerHTML = response.data.news[0].content;

    // let link = document.querySelector('.link');
    // link.innerHTML = response.data.news[0].link;

    // function doSomething() {
    //   response.data.news[0].link;
    // } 


    /*    
      create div in div🌊
      put class name
      forEach loop        
    */

      // let covid_news_window = document.querySelector('.covid_news_window');
      // covid_news_window.appendChild.div;

    // response.data.news.forEach((a) => {
    //   let pubDate = document.querySelector('.pubDate');
    //   pubDate.innerHTML = response.data.news[a].pubDate.substring(0,10);      
    // });



  }).catch(function (error) {
    console.error(error);
  });



  
}
vaccineNews();


/* 
get all health news from more than 20 well-founded broadcasting services including: WHO, CNN, BBC, FOX-news, TIME, MNT(Medical-News-Today), Bloomberg, ABC-news, CBS-news, CBC-news, NBC-news, USA Today, New Scientist, National Geographic, Google news, News24, Next Big Future, The Times of India, The Wall Street Journal, The Washington Post, and Axios.
 */

function healthNews() { 

  const options = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-health-news/1',
    headers: {
      'x-rapidapi-key': api.rapidApiKey,
      'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

}
// healthNews();


/* get all coronavirus news from more than 20 well-founded broadcasting services including: WHO, CNN, BBC, FOX-news, TIME, MNT(Medical-News-Today), Bloomberg, ABC-news, CBS-news, CBC-news, NBC-news, USA Today, New Scientist, National Geographic, Google news, News24, Next Big Futu...
 */
function covidNews() { 

  const options = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/0',
    headers: {
      'x-rapidapi-key': api.rapidApiKey,
      'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}
// covidNews();




// 🍄 selectors

// 🍄 event Listeners

//  functions for sharing 

// 🍄 functions standalone
function name(event) {
  // todo DIV
  // Create LI
}


