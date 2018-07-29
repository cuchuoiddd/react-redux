import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions'

class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: 0,
      name: "",
      brithday: "",
      sex: "",
      job: ""
    };
  }

  HandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {value}= this.state;
    console.log(value);
    
    if (value==="") {
      alert(' nothing to add')
    } else  this.props.onAddItem(this.state)
    // console.log(this.state);

  }
  render() {
    return (
      <div className="Topic">
        <h1 className="text-center">Thêm thành viên</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div className="panel panel-default">
                <div className="panel-heading">
                </div>
                <div className="panel-body">
              
                    <fieldset>
                      <div className="form-group">
                        <input className="form-control" placeholder="name" name="name" type="text" onChange={this.HandleChange} required/>
                      </div>
                      <div className="form-group">
                        <input className="form-control" placeholder="brithday" name="brithday" type="text" onChange={this.HandleChange} />
                      </div>
                      <div className="form-group">
                        <input className="form-control" placeholder="sex" name="sex" type="text" onChange={this.HandleChange} />
                      </div>
                      <div className="form-group">
                        <input className="form-control" placeholder="job" name="job" type="text" onChange={this.HandleChange} />
                      </div>
           
                      <button onClick={this.handleSubmit}>submit</button>
                    </fieldset>
            
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
    // arrayTodo: state.items.todos
  }
}

function mapDispatchToProps(dispatch) {
  //hàm này là đẩy dữ liệu lêm store
  return {
    onAddItem: (itemName) => dispatch(addItem(itemName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic)