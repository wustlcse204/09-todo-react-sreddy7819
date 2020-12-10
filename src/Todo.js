import React, { Component, Fragment } from 'react';
import './Todo.css';
var apikey = "c0558a-9ac24e-e69337-481320-5741bc"
class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {
      completed: this.props.completed
    }
    this.ctd = this.ctd.bind(this);
    this.emptytodo = this.emptytodo.bind(this);
  }

  ctd(event){
    console.log(this.props.id);
    var data = {
      completed: true
    }

    var s = this;

    var creq = new XMLHttpRequest();
    creq.onreadystatechange = function () {
      if (this.readyState === 4 && this.status == 200) {

        s.setState({
          completed: true
        })
      } else if (this.readyState === 4) {
        console.log(this.responseText);
      }
    }
    creq.open("PUT", "https://api.kraigh.net/todos/" + s.props.id, true);
    creq.setRequestHeader("Content-type", "application/json");
    creq.setRequestHeader("x-api-key", apikey);
    creq.send(JSON.stringify(data));

  }

  emptytodo(event){
    this.props.emptytodo(this.props.id);
  }

  render() {
      let tdclass = "todo";
      if (this.state.completed) {
        tdclass = "todo completed"
      }
      return (
        <article id={this.props.id} className={tdclass}>
          <button className="done" onClick={this.ctd}></button>
          <p>{this.props.text}</p>
          <button className="remove" onClick={this.emptytodo}></button>
        </article>
    );
  }
}
export default Todo;
