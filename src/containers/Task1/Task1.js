import React, {Component} from 'react';
import { nanoid } from 'nanoid';
import AddItemToWatch from "../../components/AddItemToWatch/AddItemToWatch";
import ToWatchList from "../../components/ToWatchList/ToWatchList";

class Task1 extends Component {
  state = {
    toWatchList: []
  };

  addItemToWatch = movie => {
    const movieName = movie;
    const itemId = nanoid();
    let stateCopy = [...this.state.toWatchList];

    stateCopy.push({movie: movieName, id: itemId});

    this.setState({
      toWatchList: stateCopy
    });
  };

  editItem = (event, id) => {
    const index = this.state.toWatchList.findIndex(movie => movie.id === id);
    let watchListItemCopy = {...this.state.toWatchList[index]};
    watchListItemCopy.movie = event.target.value;

    const watchListCopy = [...this.state.toWatchList];
    watchListCopy[index] = watchListItemCopy;

    this.setState({
      toWatchList: watchListCopy
    })
  };

  removeItem = id => {
    const index = this.state.toWatchList.findIndex(movie => movie.id === id);
    const watchListCopy = [...this.state.toWatchList];

    watchListCopy.splice(index, 1);

    this.setState({
      toWatchList: watchListCopy
    })
  };

  render() {
    return (
        <div className="TaskBlock">
          <AddItemToWatch
              label="Add"
              addItem={this.addItemToWatch}
          />
          <ToWatchList
              list={this.state.toWatchList}
              edit={this.editItem}
              remove={this.removeItem}
          />
        </div>
    );
  };
}

export default Task1;