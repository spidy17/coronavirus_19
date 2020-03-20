
const totalCounter = document.getElementById('totalCases');
const deathCounter = document.getElementById('totalDeath');
const recoveryCounter = document.getElementById('totalRecovered');
const url = 'https://coronavirus-19-api.herokuapp.com/all';


// Global Stats

// fetch confirmed cases

fetch(url)
    .then(resp => resp.json())
    .then(data => totalCounter.textContent = data.cases)

// fetch deaths

fetch(url)
    .then(resp => resp.json())
    .then(data => deathCounter.textContent = data.deaths)

// fetch deaths

fetch(url)
    .then(resp => resp.json())
    .then(data => recoveryCounter.textContent = data.recovered)

    
//Stats by Country

const totalCounterByCountry = document.getElementById('totalCasesByCountry');
const deathCounterByCountry = document.getElementById('totalDeathByCountry');
const recoveryCounterByCountry = document.getElementById('totalRecoveredByCountry');

const countryName = "";

function getDataByCountry() {
    const countryName = document.getElementById('countryName').value;
    const countryUrl = `https://coronavirus-19-api.herokuapp.com/countries/${countryName}`;
    document.getElementById("currentCountry").innerText = 'Current Stats  For ' + countryName;

    // fetch cases

    fetch(countryUrl)
        .then(resp => resp.json())
        .then(data => totalCounterByCountry.textContent = data.cases)

    // fetch deaths

    fetch(countryUrl)
        .then(resp => resp.json())
        .then(data => deathCounterByCountry.textContent = data.deaths)

    // fetch recovered

    fetch(countryUrl)
        .then(resp => resp.json())
        .then(data => recoveryCounterByCountry.textContent = data.recovered)

}