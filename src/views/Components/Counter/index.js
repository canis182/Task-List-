import React, { Component } from "react";
import "./index.css";

export default class Counter extends Component {
    render() {
        return (
            <div id="count">
                <p>Count: {this.props.item}</p>
            </div>
        )
    };
};