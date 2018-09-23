import React, { Component } from 'react';
import './App.css';
import "react-bootstrap";
import TaskForm from "../Components/TaskForm";
import ListTask from "../Components/ListTask";
import Counter from "../Components/Counter";
import ButtonDelete from "../Components/ButtonDelete";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Welcome my Friend
          </h1>
        </header>
        <Counter
          item={this.state.tasks.length}
        />
        <TaskForm
          uptask={this.updateTask}
        />
        <ListTask
          items={this.state.tasks}
          deltask={this.delateTask}
        />
        <ButtonDelete
          delAll={this.deleteAllTasks}
        />
      </div>
    )
  };

  updateTask = (newTask) => {
    this.setState({
      tasks: [
        newTask,
        ...this.state.tasks
      ]
    })
  };

  delateTask = (indexTask) => {
    const oldTasks = this.state.tasks
    oldTasks.splice(indexTask, 1)
    this.setState({
      tasks: oldTasks
    })
  };
  
  deleteAllTasks = () => {
    this.setState({
      tasks: []
    })
  };
};
