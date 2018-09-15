import React, { Component } from 'react';
import './App.css';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="mainContainer">
        <AddTodo />
        <TodoList />
      </div>      
    );
  }
}

export default App;