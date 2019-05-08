/* global shoppingList, store, Item, api $ */

'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render(); 

  api.getItems()
    .then(res => res.json())
    .then((items) => {
      const item = items[0];
      return api.updateItem(item.id, { name: 'foobar' });
    })
    .then(res => res.json())
    .then(() => console.log('updated!'));

  

});

