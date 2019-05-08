'use strict';


const api = (function() {
  
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/robert-clinton';

  let itemsURL = BASE_URL + '/items';

  //console.log(itemsURL);

  function getItems() { 
    
    // fetch from items URL, return promise 
    // what to return?? use Promise.return()??
    return fetch(itemsURL);

  }



  function createItem(name) {
    const newItem = JSON.stringify({
      name,
    });

    return fetch(itemsURL, {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json'}),
      body: newItem,
    });
  }



  function updateItem(id, updateData) {

    const updateIdURL = itemsURL + '/' + id;
    const body = JSON.stringify(updateData);

    console.log(updateIdURL);

    return fetch(updateIdURL, {
      method: 'PATCH',
      headers: new Headers({ 'Content-Type': 'application/json'}),
      body,
    });

  }

  return {
    getItems,
    createItem,
    updateItem,
  };

})();