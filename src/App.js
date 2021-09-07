import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import ToDoList from './components/toDoList';


class App extends React.Component {
  state = {}
  render() {
    return (
      <div>
        <ToDoList />
      </div>
    );
  }
}

export default App;
