import React, { Component } from 'react';
import { connect } from 'react-redux';

class Topic extends Component {
  handleSubmit=(e)=>{
    e.preventDefault();
  }
  render() {
    const {arrayTodo}= this.props
    return (
      <div className="Topic">
        <h1 className="text-center">Thêm thành viên</h1>
        <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Thêm thành viên</h3>
              </div>
              <div className="panel-body">
                <form acceptCharset="UTF-8" role="form" onClick={this.handleSubmit}>
                  <fieldset>
                    <div className="form-group">
                      <input className="form-control" placeholder="E-mail" name="email" type="text" />
                    </div>
                    <div className="form-group">
                      <input className="form-control" placeholder="Password" name="password" type="password" defaultValue />
                    </div>
                    <div className="checkbox">
                      <label>
                        <input name="remember" type="checkbox" defaultValue="Remember Me" /> Remember Me
                      </label>
                    </div>
                    <input className="btn btn-lg btn-success btn-block" type="submit" defaultValue="Login" />
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
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