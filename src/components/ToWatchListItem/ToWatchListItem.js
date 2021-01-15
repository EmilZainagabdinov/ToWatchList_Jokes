import React, {Component} from 'react';

class ToWatchListItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.movie !== this.props.movie;
  };

  render() {
    return (
        <div className="movieToWatch">
          <input type="text" value={this.props.movie} onChange={event => this.props.edit(event, this.props.id)}/>
          <button onClick={() => this.props.remove(this.props.id)}>X</button>
        </div>
    );
  }
}

export default ToWatchListItem;