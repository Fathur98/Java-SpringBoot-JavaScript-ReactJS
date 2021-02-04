import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            emailId: ''
        }
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {
            firstName: this.state.firstName, 
            lastName: this.state.lastName, 
            emailId: this.state.emailId
        };

        EmployeeService.createEmployee(employee).then(res =>{
            this.props.history.push('/');
        });
    }

    firstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    lastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    emailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1 className="heading" style={{textAlign:'center'}}><b>TAMBAH NASABAH</b></h1>
                <form>
                    <div className="form-group">
                        <label for="firstName">NAMA</label>
                        <input type="text" className="form-control" id="firstName" name="firstName" onChange={this.firstNameHandler}/>
                    </div>
                    <div className="form-group">
                        <label for="lastName">ALAMAT</label>
                        <input type="text" className="form-control" id="lastName" name="lastName" onChange={this.lastNameHandler}/>
                    </div>
                    <div className="form-group">
                        <label for="emailId">EMAIL</label>
                        <input type="email" className="form-control" id="emailId" name="emailId" onChange={this.emailHandler}/>
                    </div>
                    <br/>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={this.saveEmployee}>Save</button>
                        {' '}
                        <button className="btn btn-primary" onClick={this.cancel.bind(this)}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateEmployeeComponent