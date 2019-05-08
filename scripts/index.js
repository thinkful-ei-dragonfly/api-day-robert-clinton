/* global shoppingList, store, Item, api $ */

'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));


api.getItems()
  .then(data => console.log(data));


console.log(api.getItems());
  


