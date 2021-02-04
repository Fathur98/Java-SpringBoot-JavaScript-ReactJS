import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            let employee = res.data;
            this.setState({
                firstName: employee.firstName,
                lastName: employee.lastName,
                emailId : employee.emailId
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {
            firstName: this.state.firstName, 
            lastName: this.state.lastName, 
            emailId: this.state.emailId
        };
        
        EmployeeService.updateEmployee(employee, this.state.id).then((res) => {
            this.props.history.push('/');
        });
    }
    
    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1 className="heading" style={{textAlign:'center'}}><b>UBAH NASABAH</b></h1>
                <form>
                    <div className="form-group">
                        <label for="firstName">NAMA</label>
                        <input type="text" className="form-control" id="firstName" name="firstName" value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                    </div>
                    <div className="form-group">
                        <label for="lastName">ALAMAT</label>
                        <input type="text" className="form-control" id="lastName" name="lastName" value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                    </div>
                    <div className="form-group">
                        <label for="emailId">EMAIL</label>
                        <input type="email" className="form-control" id="emailId" name="emailId" value={this.state.emailId} onChange={this.changeEmailHandler}/>
                    </div>
                    <br/>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={this.updateEmployee}>Save</button>
                        {' '}
                        <button className="btn btn-primary" onClick={this.cancel.bind(this)}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default UpdateEmployeeComponent
