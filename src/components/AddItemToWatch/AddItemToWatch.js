import React, {Component} from 'react';

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
              type="text"
              value={this.state.inputField}
              onChange={e => this.inputChange(e.target.value)}
          />
          <button
              onClick={() => {
                this.props.addItem(this.state.inputField);
                this.inputClear();
              }}
          >{this.props.label}</button>
        </div>
    );
  }
}

export default AddItemToWatch;