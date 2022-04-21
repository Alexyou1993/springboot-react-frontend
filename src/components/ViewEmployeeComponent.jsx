import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3 bg-dark ">
                    <h3 className = "text-light text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label className="text-light"> First Name: </label>
                            <div className="text-light" style={{ marginLeft: "10px" }}> { this.state.employee.firstName }</div>
                        </div>
                        <div className = "row">
                            <label className="text-light" >  Last Name: </label>
                            <div className="text-light" style={{ marginLeft: "10px" }}> { this.state.employee.lastName }</div>
                        </div>
                        <div className = "row">
                            <label className="text-light"> Email ID: </label>
                            <div className="text-light" style={{ marginLeft: "10px" }}>  { this.state.employee.emailId }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent