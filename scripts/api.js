'use strict';


const api = (function() {
  
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/robert-clinton';

  let itemsURL = BASE_URL + '/items';

  //console.log(itemsURL);

  function getItems() { 
    
    // fetch from items URL, return promise 
    // what to return?? use Promise.return()??
    return fetch(itemsURL)
      .then(response => response.json());

  }

  function createItem(name){
    const newItem = JSON.stringify({
      name,
    });
    // console.log(newItem);

    return fetch(itemsURL, {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json'}),
      body: newItem,
    });
  }

  return {
    getItems,
    createItem,
  };

})();