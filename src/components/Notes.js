
import React,{useState, useEffect} from 'react'
import {Link} from "react-router-dom"

function Notes() {
   const [notes, setNotes]= useState(JSON.parse(localStorage.getItem("notes")))
   

   
   useEffect(() => {
    setInterval(() => {
      setNotes(JSON.parse(localStorage.getItem("notes")))
      
    },1);
   },[]);
const notesNull = ()=>{
  return <h1 id='notesNull'>Add a note from <Link to="/">Home</Link> Page to Display here.</h1>
}
  
  return (
    <div id='notes'>
      <h1 id='yourNotes'>Your Notes</h1>
      <div className="allNotes">
 {notes.length===0?notesNull():notes.map((m)=>{
const deleteNote= ()=> {
  let todos= JSON.parse(localStorage.getItem("notes"))
  let newTodos= todos.filter((todo)=> todo.key!==m.key)
  setNotes(newTodos)
  localStorage.setItem("notes", JSON.stringify(newTodos))
}

  return  <div className='noteItem'>
    <div className="note">
    <h3 className='noteTitle'>{m.title}</h3>
    <p className='noteDesc'>{m.description}</p>
    </div>
    <button id='delete' onClick={deleteNote}>Delete</button>
    </div>
 })
 }
 </div>
    </div>
  )


  

}

export default Notes
