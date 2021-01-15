import React, {Component} from 'react';
import Task1 from "./containers/Task1/Task1";
import Task2 from "./containers/Task2/Task2";
import './App.css';

class App extends Component {
  state = {
    taskSwitch: false,
  };

  toggleTask1 = () => {
    this.setState({
      taskSwitch: false
    });
  };

  toggleTask2 = () => {
    this.setState({
      taskSwitch: true
    });
  };

  render() {
    let task;

    if (!this.state.taskSwitch) {
      task = (
          <Task1 />
      );
    } else {
      task = (
          <Task2 />
      );
    }
      return (
        <div className="App">
          <button type="button" onClick={this.toggleTask1}>Task 1</button>
          <button type="button" onClick={this.toggleTask2}>Task 2</button>
          {task}
        </div>
    );
  };
}

export default App;