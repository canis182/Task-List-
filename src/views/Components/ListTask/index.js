import React, { Component } from "react";
import "./index.css";
import Task from "../Task";

export default class ListTask extends Component {
    render() {
        const TaskElements = this.props.items.map((name, index) => {
            return <Task
                key={name.toString()}
                item={name}
                deltask={this.props.deltask}
                taskIndex={index}
            />
        })
        return (
            <div id="List">
                {TaskElements}
            </div>
        )
    };
};


