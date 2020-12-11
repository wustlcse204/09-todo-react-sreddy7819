import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  render() {
    return (
      <section id="itemstodo">
      <aside id="placenewones">
        <form id="formfornewones">
          <input id="textback" type="text" placeholder ="Write new To-Do"></input>
          <button id="submitclick">click</button>
        </form>
      </aside>


    </section>
    );
  }
}

export default NewTodo;