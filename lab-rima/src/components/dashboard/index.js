import React from 'react';
import NoteForm from '../note-create-form/index';
import NoteList from '../note-list/index';


class Dashboard extends React.Component{
  constructor(props){
    super(props);

    this.status = {
      notes = [],
    }

    let memberFunctions = Object.getOwnPropertyNames(Dashboard.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleAddNote(note){
    note.id = uuid.v1();
    note.completed = true;
    note.editing = false;

    this.setState(previousState => {
      return {notes: [...previousState.notes, note]};
    });
  }

  handleRemoveNote(note){
    this.setState(previousState => {
      previousState.notes.filter(n => n.id !== note.id);
    });
  }

  render(){
    return(
      <div className="dashboard">
        <h3>To Do List</h3>
        <NoteForm handleAddNote={this.handleAddNote} />
        <NoteList handleRemoveNote={this.handleRemoveNote} />
      </div>
    );
  }
}

export default Dashboard;
