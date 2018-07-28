import _ from 'lodash';
import { ADD_ITEM, DELETE, CREATE } from '../actions/types';

const initialState = [
  {
    id: 1,
    todos: ['number 1', 'number 2'],
    name: 'củ chuối',
    brithday: '10/10/10',
    sex: 'Nam',
    job: 'làm ruộng'
  },
  {
    id: 2,
    todos: ['number 1', 'number 2'],
    name: 'củ chuối',
    brithday: '10/10/10',
    sex: 'Nam',
    job: 'làm ruộng'
  },
  {
    id: 3,
    todos: ['number 1', 'number 2'],
    name: 'củ chuối',
    brithday: '10/10/10',
    sex: 'Nam',
    job: 'làm ruộng'
  }
];

export default function (state = initialState, action) {

  switch (action.type) {
    case ADD_ITEM:
      return { ...state, todos: [action.itemName, ...state.todos] };
    // case CREATE:
    //   return { ...state, ...action.payload };
    // case DELETE:
    //   return _.omit(state, action.payload);
  }

  return state;
}