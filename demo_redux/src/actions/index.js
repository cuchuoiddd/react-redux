import { ADD_ITEM, DELETE, CREATE } from './types';

export function addItem(itemName) {
  return {
    type: ADD_ITEM,
    itemName
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