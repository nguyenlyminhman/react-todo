import React, { Component } from 'react';
import './App.css';

import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';




class App extends Component {

  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div>
      <Nav />
      <div className="container">
        <div className="row">
          <NoteList />
          <NoteForm />
        </div>
      </div>
    </div>
    );
  }
}

export default App;