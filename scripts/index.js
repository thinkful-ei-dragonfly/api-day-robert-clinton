/* global shoppingList, store, Item, api $ */

'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render(); 

  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });
});

// api.getItems()
//   .then(res => res.json())
//   .then((items) => {
//     items.forEach((item) => store.addItem(item));
//     shoppingList.render();
//   });

// api.getItems()
//   .then(res => {
//     console.log(res);
//     res.data;
//   })
//   .then((items) => {
//     items.forEach((item) => store.addItem(item));
//     shoppingList.render();
//   });
//store.items.push(Item.create('apples'));

// api.createItem('bananas')
//   .then(() => api.getItems())
//   .then(items => console.log(items));
  


