import React from "react";
 
function CreateNote(){
     
    return <form>
        <input name="title" placeholder="הכנס כותרת"/>
        <textarea name="text" placeholder="הכנס את הערה"/>
        <button>הוסף</button>
    </form>
 }
 export default CreateNote;