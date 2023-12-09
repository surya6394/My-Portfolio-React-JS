import React, { useState } from 'react'

function Notes() {

    // Initializing state with an array of items
    const [notes, setNotes] = useState(['note1','note2','note3']);

    // State for the new item input
    const [newNotes, setNewNotes] = useState('');

    // Event handler to Update the new note input
    const handleNewItemChange = (event) => {
        setNewNotes(event.target.value);
    }

    // event handler to add new note to the list
    const addNote = () => {
        //Using the spread operator to create a new array with the existing items and the new item
        setNotes([...notes, newNotes]);

        // Clearing the input after adding the new item
        setNewNotes('');
    }



  return (
    <>
    
    <div>
        <ul>
            {notes.map((items, index) => (
                <li key={index}>{items}</li>
            ))}
        </ul>

        <input type="text" value={newNotes} onChange={handleNewItemChange} />
        <button onClick={addNote}>Add Note</button>
    </div>

    </>
  )
}

export default Notes;