import React, { Component } from 'react';
import { connect } from 'react-redux';

class Topic extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  }
  render() {
    return (
      <div className="Topic">
        <h1 className="text-center">Sửa thành viên</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div className="panel panel-default">
                <div className="panel-heading">
                </div>
                <div className="panel-body">
                  <form acceptCharset="UTF-8"  onClick={this.handleSubmit}>
                    <fieldset>
                      <div className="form-group">
                        <input className="form-control" placeholder="id" name="id" type="text" />
                      </div>
                      <div className="form-group">
                        <input className="form-control" placeholder="name" name="name" type="text"  />
                      </div>
                      <div className="form-group">
                        <input className="form-control" placeholder="brithday" name="brithday" type="text"  />
                      </div>
                      <div className="form-group">
                      <input className="form-control" placeholder="sex" name="sex" type="text"  />
                    </div>
                    <div className="form-group">
                      <input className="form-control" placeholder="job" name="job" type="text"  />
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