import React, { Component } from 'react';
import {connect} from 'react-redux'
import { deleteItem,updateItem } from '../actions';

class TrangChu extends Component {

    onDelete =()=>{
        const id =this.props.users.id;
        this.props.onDeleteItem(id);
        // console.log(id);
        
    }
    onUpdate =()=>{
        const update =this.props.users;
        this.props.onUpdateItem(update);
        
    }
    render() {
        
        var { users } = this.props;
        return (
            
            <tr>
                <td>{users.id}</td>
                <td>{users.name}</td>
                <td>{users.brithday}</td>
                <td>{users.sex}</td>
                <td>{users.job}</td>
                <td>
                    <button onClick={this.onUpdate} data-toggle="modal" data-target="#myModal"><span className='fa fa-pencil' ></span></button> &nbsp;
                    <button onClick={this.onDelete}><span className='fa fa-remove' ></span></button>
                </td>
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    //hàm này là đẩy dữ liệu lêm store
    return {
      onDeleteItem: (id) => dispatch(deleteItem(id)),
      onUpdateItem: (id) => dispatch(updateItem(id))
      // là dispath gửi dữ liêu vào action để nó gửi vào reducer
      //cai person owr dau ra the
      // cais nay đặt tên gì cũng đơợc, kiểu như biến 1 function
    }
  }
export default connect(null,mapDispatchToProps)(TrangChu);