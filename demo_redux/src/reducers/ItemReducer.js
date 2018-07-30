// import _ from 'lodash';
import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from '../actions/types';

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

var s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
var randomID = () => {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}



const member = (state = initialState, action) => {

  // var { member } = action; 
  // var index = -1;
  switch (action.type) {

    case ADD_ITEM:
      var newItem = {
        id: randomID(),
        name: action.itemName.name,
        brithday: action.itemName.brithday,
        sex: action.itemName.sex,
        job: action.itemName.job
      }
      state.push(newItem);
      console.log(action);
      return [...state];

    case UPDATE_ITEM:
      return {...state,state:action.update,...state}
    // case DELETE:
    //   return _.omit(state, action.payload);

    case DELETE_ITEM:
      // console.log(action.id);
      
      state = state.filter(item => item.id !== action.id);
      // console.log(state);
      return [...state]

    

    // index = findMember(state, member);
    //         if(index !== -1){
    //             state.splice(index, 1);
    //         }
    //         return [...state];
    default: return state;
  }

}
// var findMember = (items, member) =>{
//   var index = -1;
//   if(items.length > 0){
//       for(var i = 0; i < items.length; i++){
//           if(items[i].id === member.id){
//               index = i;
//               break;
//           }
//       }
//   }

//   return index;
// }
export default member


