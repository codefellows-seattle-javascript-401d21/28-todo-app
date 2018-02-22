import React from 'react';
import NoteItem from '../note-item/index';

class NoteList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="note-list">
        <ul>
          {this.props.notes.map(note => {
            <NoteItem note={note}>
          });}
        </ul>
      </div>
    );
  }
}

export default NoteList;
