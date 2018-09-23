import React, { Component } from "react";
import "./index.css";

export default class ListTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCompleted: false,
        };
    };
    handleCompletedClick = () => {
        this.setState({
            isCompleted: !this.state.isCompleted
        })
    };
    handleDeleteClick = () => {
        this.props.deltask(this.props.taskIndex)
    };
    render() {
        const section = (this.state.isCompleted) ? <s>{this.props.item}</s> : this.props.item;
        return (
            <div id="specific-task">
                <div id="task">
                    {section}
                </div>
                <div id="btn">
                    <a type="button" id="btn-ok" onClick={this.handleCompletedClick}></a>
                </div>
                <div id="btn">
                    <a type="button" id="btn-del" onClick={this.handleDeleteClick}></a>
                </div>
            </div>
        )
    };
};