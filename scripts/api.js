'use strict';


const api = (function() {
  
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/robert-clinton';

  let itemsURL = BASE_URL + '/items';

  console.log(itemsURL);

  function getItems() { 
    
    // fetch from items URL, return promise 
    // what to return?? use Promise.return()??
    return fetch(itemsURL)
      .then(response => response.json());

  }

  return {
    getItems,
  };

})();