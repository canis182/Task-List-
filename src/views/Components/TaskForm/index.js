import React, { Component } from "react";
import "./index.css";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ""
        };
    };
    handleSubmit(event) {
        event.preventDefault()
        const Task = this.state.task;
        this.props.uptask(Task);
    };
    handleTaskChange(event) {
        this.setState({ task: event.target.value })
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label id="ident" htmlFor="form">
                    Please enter your task
                </label>
                <br/>
                <input
                    id="form"
                    type="text"
                    placeholder="Task"
                    value={this.state.task}
                    required
                    pattern="^[a-zA-Z- ]+$"
                    onChange={this.handleTaskChange.bind(this)}
                />
                <button type="submit" id="button"> 
                    Ok 
                </button>
            </form>
        )
    };
};
