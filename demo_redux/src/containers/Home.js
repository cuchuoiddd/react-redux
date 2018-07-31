import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { changeItem } from '../actions'
import TrangChu from '../components/TrangChu';

class Home extends Component {

  state = {
    name: "",
    id: "",
    birthday: "",
    sex: '',
    job: ''
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.user !== nextProps.user) this.setState({ ...nextProps.user });
  }


  HandleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onUpdateItem(this.state);
  }

  // handleKeyPress = e => {
  //   if (e.key !== "Enter") return;

  //   const { onSubmitEditing } = this.props;
  //   const { value } = this.state;

  //   if (!value) return; // Don't submit if empty

  //   onSubmitEditing(value);
  //   this.setState({ value: "" });
  // };



  onNavigateTopic() {
    this.props.history.push('/add')
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   const changeUser = {
  //     id: this.props.user.id,
  //     name: this.refs.name.value,
  //     brithday: this.refs.brithday.value,
  //     sex: this.refs.sex.value,
  //     job: this.refs.job.value
  //   }
  //   this.props.onUpdateItem(changeUser);
  // }

  
  render() {
    const { value } = this.state // hiểu cái này k? đang định hỏi
    // cái này là cách viết khác của: const value = this.state.value
    // nhwng vieets kiểu này ngắn hơn, vì mình còn thêm đc vài thằng khác vô nữa
    //caí đó có biết nhưng sao lại là state mà thằng dưới là props
    //
    if(this.props.user.state)
      console.log(this.props.user.id)
    return (
      <div className="App container">
        <header className="App-header">
          <h1 className="App-title">Home</h1>
          <input
            style={{ width: 200, height: 50, marginLeft: 100 }}
            type={"text"}
            value={value}
            placeholder={'type something'}
            onChange={this.handleChange}
          // onKeyPress={this.handleKeyPress}
          />
          <h2 className="text-center">Danh sách</h2>
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Brithday</th>
                <th>Sex</th>
                <th>Job</th>
                <th>Control</th>
              </tr>
            </thead>
            <tbody>
              {this.showMember()}
            </tbody>
          </table>
          <div onClick={() => this.onNavigateTopic()} style={{ marginLeft: 100, marginTop: 50 }}>Move to Topic</div>
        </header>


        <div className="container">

          {/* Trigger the modal with a button */}
          {/* Modal */}
          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">
              {/* Modal content*/}
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">×</button>
                  <h4 className="modal-title">Sửa Item</h4>
                </div>
                <div className="modal-body">
                  <fieldset>
                    <div className="form-group">
                      <input className="form-control"  value={this.state.name} placeholder="name" name="name" type="text" onChange={this.HandleChange} required />
                    </div>
                    <div className="form-group">
                      <input className="form-control"  value={this.state.brithday} placeholder="brithday" name="brithday" type="text" onChange={this.HandleChange} />
                    </div>
                    <div className="form-group">
                      <input className="form-control"  value={this.state.sex} placeholder="sex" name="sex" type="text" onChange={this.HandleChange} />
                    </div>
                    <div className="form-group">
                      <input className="form-control"  value={this.state.job} placeholder="job" name="job" type="text" onChange={this.HandleChange} />
                    </div>

                  </fieldset>
                </div>
                <div className="modal-footer text-center">
                  <button onClick={this.handleSubmit} className="btn btn-primary">submit</button>
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    );


  }

  showMember = () => {
    var result = null;
    // console.log(this.props.users)
    if (this.props.users.length > 0) {
      result = this.props.users.map((users, id) => {
        return <TrangChu
          key   = {id}
          users = {users}
        />
      });
    }
    return result;
  }

}
const mapStateToProps = state => {
  //hàm này là lấy dữ liệu từ store ra
  return {
    // arrayTodo: state.items.todos,
    // id: state.items.id,
    // name: state.items.name,
    // brithday: state.items.brithday,
    // job: state.items.job,
    // sex: state.items.sex,
    users: state.items.users,
    user:state.items.user
    //arrayTodo: tên đặt kiểu gì cũng đc, nên đặt có ý nghĩa
    //items: là items trong file index đợợc khai báo
    //todos: là biến todos trong initstate, cái mà mình gán lại khi xử lý reducer
  }
}

function mapDispatchToProps(dispatch, props) {
  //hàm này là đẩy dữ liệu lêm store
  return {
    onUpdateItem: (changeUser) => dispatch(changeItem(changeUser)),
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