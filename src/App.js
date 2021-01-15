import React, {Component} from 'react';
import Button from "./components/UI/Button/Button";
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
          <>
            <h5>Task 1</h5>
            <Task1 />
          </>
      );
    } else {
      task = (
          <>
            <h5>Task 2</h5>
            <Task2 />
          </>
      );
    }
      return (
        <div className="App">
          <div className="SwitchBlock">
            <Button
              type="taskSwitch"
              label="Task 1"
              onClick={this.toggleTask1}
            />
            <Button
              type="taskSwitch"
              label="Task 2"
              onClick={this.toggleTask2}
            />
          </div>
          {task}
        </div>
    );
  };
}

export default App;