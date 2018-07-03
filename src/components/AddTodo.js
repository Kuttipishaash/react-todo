import React from 'react';
import { Component } from 'react';
import {addTodo} from "../actions";

export default class AddTodo extends Component {
    state = {
        addFormValue: ""
    };

    handleInputChange = event =>{
        this.setState({addFormValue: event.target.value});
    };

    handleFormSubmit = event =>{
        const {addFormValue}= this.state;
        const {addTodo} = this.props;
        event.preventDefault();
        addTodo({title: addFormValue});
        this.setState({addFormValue: ""});
    };

    render() {
        const {addFormValue} = this.state;
        return (
            <form onSubmit={this.handleFormSubmit}>
            <div className="input-group mb-3">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Enter todo"
                        value={addFormValue}
                        onChange={this.handleInputChange}/>
                <div className="input-group-append">
                    <button className="btn btn-primary" type="submit">Add</button>
                </div>
            </div>
            </form>
        );
    }
}