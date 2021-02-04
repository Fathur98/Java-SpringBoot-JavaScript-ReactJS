import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
    }

    addEmployee(){
        this.props.history.push('/add-employee');
    }

    editEmployee(id){
        this.props.history.push(`/update-employee/${id}`);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    render() {
        return (
            <div>
                <h1 style={{textAlign:'center'}}><b>DAFTAR NASABAH</b></h1>
                <button type="button" class="btn btn-primary" onClick={ () => this.addEmployee()}>TAMBAH NASABAH</button>
                <br/><br/>
                <table border="3" id="customers">
                    <tr>
                        <th style={{textAlign:'center'}}>AKSI</th>
                        <th style={{textAlign:'center'}}>ID</th>
                        <th style={{textAlign:'center'}}>NAMA</th>
                        <th style={{textAlign:'center'}}>ALAMAT</th>
                        <th style={{textAlign:'center'}}>EMAIL</th>
                    </tr>
                    {this.state.employees.map((employee, index) => 
                        <tr style={{textAlign:'center'}}>
                            <td style={{textAlign:'center'}}>
                                <button onClick={ () => this.editEmployee(employee.id)} class="btn btn-info">UBAH</button>
                                &nbsp;
                                <button onClick={ () => this.deleteEmployee(employee.id)} class="btn btn-danger">Hapus</button>
                            </td>
                            <td>{index+1}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.emailId}</td>
                        </tr>
                    )}
                </table>
            </div>
        )
    }
}

export default ListEmployeeComponent