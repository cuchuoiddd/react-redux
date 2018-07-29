import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import {addItem} from '../actions'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      value: ''
     };
  }

  handleChange=(e)=> {
    this.setState({ value: e.target.value });
  }

  // handleKeyPress = e => {
  //   if (e.key !== "Enter") return;

  //   const { onSubmitEditing } = this.props;
  //   const { value } = this.state;

  //   if (!value) return; // Don't submit if empty

  //   onSubmitEditing(value);
  //   this.setState({ value: "" });
  // };

  onAdd() {
    // alert('oke')
    const {value}= this.state;
    if (value) {
      this.props.onAddItem(this.state.value)
    } else{ alert(' nothing to add')}
  }

  onNavigateTopic( ) {
    this.props.history.push('/add')
  }

  render() {
    const {value} = this.state // hiểu cái này k? đang định hỏi
    // cái này là cách viết khác của: const value = this.state.value
    // nhwng vieets kiểu này ngắn hơn, vì mình còn thêm đc vài thằng khác vô nữa
    //caí đó có biết nhưng sao lại là state mà thằng dưới là props
    //
    const {arrayTodo}= this.props // prop này là của redux

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Home</h1>
          <input
            style={{width: 200, height: 50, marginLeft: 100}}
            type={"text"}
            value={value}
            placeholder={'type something'}
            onChange={ this.handleChange}
            // onKeyPress={this.handleKeyPress}
          />
          <div>{arrayTodo.map(e => {
            return (
              <div>{e}</div>
            )
          })}</div>
          <div onClick={() => this.onAdd()} style={{marginLeft: 100, marginTop: 50}}>Add</div>
          <div onClick={() => this.onNavigateTopic()} style={{marginLeft: 100, marginTop: 50}}>Move to Topic</div>
        </header>
      </div>
    );
  }
}
function mapStateToProps(state) {
  //hàm này là lấy dữ liệu từ store ra
  return {
    arrayTodo: state.items.todos
    //arrayTodo: tên đặt kiểu gì cũng đc, nên đặt có ý nghĩa
    //items: là items trong file index đợợc khai báo
    //todos: là biến todos trong initstate, cái mà mình gán lại khi xử lý reducer
  }
}

function mapDispatchToProps(dispatch) {
    //hàm này là đẩy dữ liệu lêm store
  return {
    onAddItem: (itemName) => dispatch(addItem(itemName)) 
    // là dispath gửi dữ liêu vào action để nó gửi vào reducer
    //cai person owr dau ra the
    // cais nay đặt tên gì cũng đơợc, kiểu như biến 1 function
  }
}

// ví dụ
// function hanhdong (itemName) {
//   addItem(itemName) // là 1 hàm ở bên ngoài
// }
// thấy gióng cái trên ko? :d
// cái này (itemName) => dispatch(addItem(itemName))  là 1 arrow funcion
// thực chất là 1 cách viết khác của function bình thơờng thôi es6 
//dispath thif là của redux

export default connect(mapStateToProps, mapDispatchToProps)(Home)