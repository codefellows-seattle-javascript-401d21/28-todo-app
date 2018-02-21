import React from 'react';
import NoteCreateForm from '../note-create-form/index';
import NoteList from '../note-list/index';

class Dashboard extends React.Component{
   constructor(props){
     super(props);
     this.state = {
        notes: [],
     };
    let memberFunctions = Object.getOwnPropertyNames(Dashboard.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
   }
  handleAddNote(note){
    note.editing = false;
    note.id = Math.random();
    note.completed = false;

    this.setState(previousState => {
      return {notes :[...previousState.notes,note]};
    });
  }


  
  render(){
    return(
      <div>
        <h1>Dashboard</h1>
        <NoteCreateForm handleAddNote={this.handleAddNote}/>
        <NoteList notes={this.state.notes}/>
      </div>
    );

  }
}

export default Dashboard;