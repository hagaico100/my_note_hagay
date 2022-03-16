import React, { useState } from "react";

function CreateNote(props){
    
   const [note, setNote] = useState({
        
        title: "",
        text: ""
    })

function handleChange(event) {
    const{name, value} = event.target;
    setNote(prevNote => {
       return {...prevNote,
        [name] : value
    };
    });
    
}

function sendNote(event) {
event.preventDefault();
props.onAdd(note);
setNote({title: "",
    text: ""})
}

    return <form>
        <input name="title" onChange={handleChange} value={note.title} placeholder="הכנס כותרת"/>
        <textarea name="text" onChange={handleChange} value={note.text} placeholder="הכנס את התזכורת"/>
        <button onClick={sendNote}> הוסף </button>
    </form>
 }
 export default CreateNote;