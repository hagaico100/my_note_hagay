import React, {useState} from "react";
import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";



function App(){
  const [allNotes, setAllNotes] = useState([]);

  function addNote(note) {
    setAllNotes(prevNote => {
      return [...prevNote, note];
    })
    }
 
    function delNote(id){
      setAllNotes(prevNote => {
        return prevNote.filter((element, index) => {
          return  index !== id;
        });
      });
    }
    
 return <div> 
 <Header /> 
<CreateNote onAdd={addNote}/>
 {allNotes.map( (element, index) =>
 <Note 
    key= {index}
    id={index}
    title={element.title}
    content={element.text}
    onDel= {delNote}
  /> 
 )}
 <Footer /> 
 </div> 
}

export default App;