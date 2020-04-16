import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Movies from "./Movie/Movies";
import MovieForm from "./Movie/MovieForm";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      title: "React Movie Cards",
    };
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <div className="mt-5">
          <Switch>
            <Route path="/add-movie" component={MovieForm}></Route>
            <Route path="/" exact component={Movies}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}
