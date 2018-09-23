import React, { Component } from "react";
import "./index.css";

export default class DelButton extends Component {
    handleDelateClick = () => {
        this.props.delAll()
    };
    
    render() {
        return (
            <div>
                <button id="buttonDel" onClick={this.handleDelateClick}>
                    Delete all tasks
                </button>
            </div>
        )
    };
};