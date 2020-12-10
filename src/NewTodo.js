import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  render() {
    return (
      <div id="placenewones">
        <form id="formfornewones" onSubmit={this.props.todoadd}>
          <input id="textback" type="text" placeholder="Write new To-Do" value={this.props.input} Change={this.props.Change}/>
          <button id="submitclick">click</button>
        </form>
      </div>
    );
  }
}

export default NewTodo;