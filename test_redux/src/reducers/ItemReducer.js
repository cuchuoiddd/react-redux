import _ from 'lodash';
import { ADD_ITEM, DELETE, CREATE } from '../actions/types';

const initialState = {
    todos: ['number 1', 'number 2'],
    isFetching: false
  };

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {...state, todos: [action.itemName,...state.todos]};
    // case CREATE:
    //   return { ...state, ...action.payload };
    // case DELETE:
    //   return _.omit(state, action.payload);
  }

  return state;
}