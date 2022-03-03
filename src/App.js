import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Comment {
  constructor(props) {
    super(props)
    this.state = {
      todoItem: '',
      items: []
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('terpanggil')
  }

  handleChange

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.todoItem} onChange={this.handleChange} />
      <button>Add</button>
        </form>
      </div>
    )
  }
}


export default App;
