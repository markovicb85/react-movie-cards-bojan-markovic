import React, { Component } from "react";
import Input from "./Input";

class MovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: ""
    
    errors:{
      name: "",
      value: ""
    }

  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleChange(name) {
    if ()
    cons error = {...this.state.errors, erros{name: name, }}
    this.setState({error});
    
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();

    
  }



  render() {
    return (
      <div className="text-center">
        <h1>Add new movie</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="path"
            label="Path"
            value=""
            onChange={this.handleChange}
            error={this.state.error}
          />
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default MovieForm;
