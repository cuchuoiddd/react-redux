import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { updateItem } from '../actions'
import TrangChu from '../components/TrangChu';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  handleChange = (e) => {
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



  onNavigateTopic() {
    this.props.history.push('/add')
  }

  handleSubmit = (event) => {
    event.preventDefault();

  }

  
  render() {
    const { value } = this.state // hiểu cái này k? đang định hỏi
    // cái này là cách viết khác của: const value = this.state.value
    // nhwng vieets kiểu này ngắn hơn, vì mình còn thêm đc vài thằng khác vô nữa
    //caí đó có biết nhưng sao lại là state mà thằng dưới là props
    //

    console.log(this.props.abc.state)
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
                      <input className="form-control"  placeholder="id" name="id" type="text" onChange={this.HandleChange} required />
                    </div>
                    <div className="form-group">
                      <input className="form-control"  placeholder="name" name="name" type="text" onChange={this.HandleChange} required />
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
    // console.log(this.props.abc)
    if (this.props.abc.length > 0) {
      result = this.props.abc.map((abc, id) => {
        return <TrangChu
          key={id}
          abc={abc}
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
    abc: state.items,
    //arrayTodo: tên đặt kiểu gì cũng đc, nên đặt có ý nghĩa
    //items: là items trong file index đợợc khai báo
    //todos: là biến todos trong initstate, cái mà mình gán lại khi xử lý reducer
  }
}

function mapDispatchToProps(dispatch, props) {
  //hàm này là đẩy dữ liệu lêm store
  return {
    onUpdateItem: (id) => dispatch(updateItem(id))
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