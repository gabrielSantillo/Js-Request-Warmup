function post_success(response) {
  let button = document.getElementById(`button`);
  button.insertAdjacentHTML(
    `afterend`,
    `
 <h1>${response[`data`][0][`name`]}</h1>
 <h3>${response[`data`][0][`street`]}, ${response[`data`][0][`state`]}, ${
      response[`data`][0][`postal_code`]
    }</h3>
 <hr>
`
  );
}

function post_failure(error) {
  alert(`Sorry, click the button again.`);
}

function requestBreweries(details) {
  axios
    .request({
      url: `https://api.openbrewerydb.org/breweries/random`,
    })
    .then(post_success)
    .catch(post_failure);
}

function post_success_crypto(response) {
  let crypto = document.getElementById(`crypto`);
  for (let i = 0; i < response[`data`].length; i++) {
    crypto.insertAdjacentHTML(
      `afterend`,
      `
    <h1>${response[`data`][i][`symbol`]}</h1>
    <h3>$ ${response[`data`][i][`lastPrice`]}</h3>
    <hr>
    `
    );
  }
}

function post_failure_crypto(error) {
  alert(`Sorry, click the button again.`);
}

function showCrypto(details) {
  axios
    .request({
      url: `https://api2.binance.com/api/v3/ticker/24hr`,
    })
    .then(post_success_crypto)
    .catch(post_failure_crypto);
}

let button = document.getElementById(`button`);
button.addEventListener(`click`, requestBreweries);

let crypto = document.getElementById(`crypto`);
crypto.addEventListener(`click`, showCrypto);
