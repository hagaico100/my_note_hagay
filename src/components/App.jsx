import React from "react";
import ReactDOM  from "react-dom";
import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer";
import notes from "../notes";
import CreateNote from "./CreateNote";

function App(){
 return <div> 
 <Header /> 
<CreateNote />
 {notes.map( element =>
 <Note 
    title={element.title}
    content={element.content}
  /> 
 )}

 <Footer /> 
 </div> 
}
export default App;