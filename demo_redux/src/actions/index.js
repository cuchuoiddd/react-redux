import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from './types';

export function addItem(itemName) {
  return {
    type: ADD_ITEM,
    itemName
  }
}

export function updateItem(id) {
  return {
    type: UPDATE_ITEM,
    id
  }
}

export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    id
  }
}
// export function createItem(item) {
//   let itemtoAdd = {
//     [Math.floor(Math.random() * 20)]: item
//   };

//   return {
//     type: CREATE,
//     payload: itemtoAdd
//   }
// }

// export function deleteItem(key) {
//   return {
//     type: DELETE,
//     payload: key
//   }
// }