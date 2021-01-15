import React, {Component} from 'react';
import ToWatchListItem from "../ToWatchListItem/ToWatchListItem";
import "./ToWatchList.css";

class ToWatchList extends Component {
  render() {
    const movieList = this.props.list.map(item => {
      return (
          <ToWatchListItem
              key={item.id}
              movie={item.movie}
              id={item.id}
              edit={this.props.edit}
              remove={this.props.remove}
          />
      );
    });

    return (
        <div className="ToWatchList">
          {movieList}
        </div>
    );
  }
}

export default ToWatchList;