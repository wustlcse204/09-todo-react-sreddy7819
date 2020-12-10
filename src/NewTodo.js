import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  render() {
    return (
        <form id="formfornewones">
            <input id="textback" type="text" placeholder ="Write new To-Do" />
            <button id="submitclick ">click </button>

        </form>
       
    );
  }
}

export default NewTodo;