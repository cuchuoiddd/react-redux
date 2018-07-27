import React, { Component } from 'react';
import { connect } from 'react-redux';

class Topic extends Component {
  render() {
    const {arrayTodo}= this.props
    return (
      <div className="Topic">
        <header className="App-header">
          <h1 className="App-title">Topic</h1>
          <div>{arrayTodo && arrayTodo.map(e => {
            return (
              <div>{e}</div>
            )
          })}</div>
        </header>
      </div>
    );
  }
}
function mapStateToProps(state) {
  //hàm này là lấy dữ liệu từ store ra
  return {
    arrayTodo: state.items.todos
  }
}

function mapDispatchToProps(dispatch) {
    //hàm này là đẩy dữ liệu lêm store
  return {
    // onAddItem: (person) => dispatch(addItem(person))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic)