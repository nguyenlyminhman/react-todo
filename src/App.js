import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
class App extends Component {
  constructor(props) {
    super(props);
  }

  renderNoteForm = () => {
   return this.props.isEdit === true ? <NoteForm /> : <div /> 
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row">
            <NoteList />
            {this.renderNoteForm()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}

export default connect(mapStateToProps)(App);