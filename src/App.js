import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

var apikey = "c0558a-9ac24e-e69337-481320-5741bc"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      input: ''
    }
    this.todoadd = this.todoadd.bind(this);
    this.emptytodo = this.emptytodo.bind(this);
    this.Change = this.Change.bind(this);
  }

  Change(event){
    console.log(event.target.value);
    this.setState({
      input: event.target.value
    });
  }

  todoadd(event) {
      event.preventDefault();
        var s = this;
        var data = {
          text: s.state.input
        };

        var makereq = new XMLHttpRequest();
        makereq.onreadystatechange = function(){
            if (this.readyState === 4 && this.status === 200) {
              var t = [...s.state.todos, JSON.parse(this.responseText)]
              t.sort(function (a, b){

                return a.text.localeCompare(b.text);
              })
              s.setState({
                todos: t
                })
              s.setState({
                input: ''
              });
            } else if (this.readyState === 4) {
              console.log(this.responseText);
            }
        };
        makereq.open("POST", "https://api.kraigh.net/todos/", true);
        makereq.setRequestHeader("Content-type", "application/json");
        makereq.setRequestHeader("x-api-key", apikey);
        makereq.send(JSON.stringify(data));

  }


   emptytodo(id){
     console.log(id);
        var s = this;


        var removereq = new XMLHttpRequest();
        removereq.onreadystatechange = function(){
          if (this.readyState === 4 && this.status === 200) {
            const rtodo = s.state.todos.filter((todotask) => {
              if (todotask.id !== id){
                return todotask;
              }
            });
            s.setState({ todos: rtodo });
          } else if (this.readyState === 4) {
            console.log(this.responseText);
          }
        }
        removereq.open("DELETE", "https://api.kraigh.net/todos/" + id, true);
        removereq.setRequestHeader("Content-type", "application/json");
        removereq.setRequestHeader("x-api-key", apikey);
        removereq.send();

      }



  render() {
    return (
      <section id= "itemstodo"> <NewTodo todoadd={this.todoadd} input={this.state.input} Change={this.Change}/>
      {this.state.todos.map((todotask) =>
        <Todo key={todotask.id} id={todotask.id} completed={todotask.completed}
        text={todotask.text} emptytodo={this.emptytodo}/>
      )}
      </section>

    );
  }

  cdm(){
    var s = this;
    var denotereq = new XMLHttpRequest();
    denotereq.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        var todos = JSON.parse(this.responseText);
        s.setState({todos: todos});
      } else if (this.readyState === 4){
        console.log(this.responseText);
      }
    }
    denotereq.open("GET", "https://api.kraigh.net/todos", true);
    denotereq.setRequestHeader("x-api-key",apikey);
    denotereq.send();
  }


}


export default App;
