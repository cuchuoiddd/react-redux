import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM,CHANGE_ITEM } from './types';

export function addItem(itemName) {
  return {
    type: ADD_ITEM,
    itemName
  }
}

export function updateItem(update) {
  return {
    type: UPDATE_ITEM,
    update
  }
}

export function changeItem(changeUser) {
  return {
    type: CHANGE_ITEM,
    changeUser
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