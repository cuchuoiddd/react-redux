import React, { Component } from 'react';
class TrangChu extends Component {

    render() {
        
        var { abc } = this.props;
        return (
            <tr>
                <td>{abc.id}</td>
                <td>{abc.name}</td>
                <td>{abc.brithday}</td>
                <td>{abc.sex}</td>
                <td>{abc.job}</td>
                <td>
                    <span className='fa fa-pencil'></span> &nbsp;
                    <span className='fa fa-remove' ></span>
                </td>
            </tr>
        );
    }
}

export default TrangChu;