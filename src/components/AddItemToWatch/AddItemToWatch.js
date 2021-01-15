import React, {Component} from 'react';
import Button from "../UI/Button/Button";
import "./AddItemToWatch.css";

class AddItemToWatch extends Component {
  state ={
    inputField: ""
  };

  inputChange = string => {
    this.setState({
      inputField: string
    })
  };

  inputClear = () => {
    this.setState({
      inputField: ""
    })
  };

  render() {
    return (
        <div className="AddMovieForm">
          <input
              className="MovieInputField"
              placeholder="Type movie name here..."
              type="text"
              value={this.state.inputField}
              onChange={e => this.inputChange(e.target.value)}
          />
          <Button
              type="add"
              label="Add"
              onClick={() => {
                this.props.addItem(this.state.inputField);
                this.inputClear();
              }}
          />
        </div>
    );
  }
}

export default AddItemToWatch;