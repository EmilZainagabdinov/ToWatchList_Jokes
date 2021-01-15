import React, {Component} from 'react';
import Button from "../UI/Button/Button";
import "./ToWatchListItem.css";

class ToWatchListItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.movie !== this.props.movie;
  };

  render() {
    return (
        <div className="movieToWatch">
          <input
              className="MovieToWatchName"
              type="text"
              value={this.props.movie}
              onChange={event => this.props.edit(event, this.props.id)}
          />
          <Button
              type="remove"
              label="&times;"
              onClick={() => this.props.remove(this.props.id)}
          />
        </div>
    );
  }
}

export default ToWatchListItem;