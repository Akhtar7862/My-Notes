import React, {useState} from 'react';



function Home() {

  // const [my, setMy]= useState(JSON.parse(localStorage.getItem("notes")))
  const [note, setNote]= useState({title:"", description:"", key:""})
 
  setInterval(() => {
    note.key= Date.now()
  }, 1);

  const handlecChange= (e)=>{
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  const onclick= ()=>{
    let todo;
    if(localStorage.getItem("notes")=== null){
     todo=[]
     note.key=Date.now()
     todo.push(note)
     todo= JSON.stringify(todo)
     localStorage.setItem("notes", todo)
    }
    else{
      todo= JSON.parse(localStorage.getItem("notes"))
      note.key=Date.now()
      todo.push(note)
      todo= JSON.stringify(todo)
      localStorage.setItem("notes", todo)
    }
    document.getElementById("title").value=""
    document.getElementById("description").value=""
   
    
  }

  return (
    <div className='home'>
    
      <form>
        <div className="title">
          <label htmlFor="title"></label>
         <input type="text" name='title' id='title' placeholder='Title' onChange={handlecChange} />
        </div>
        <div className="description">
          <label htmlFor="description"></label>
         <textarea name="description" id="description" cols="30" rows="10" placeholder='Description' onChange={handlecChange}></textarea>
        </div>
      <button id='addBtn' onClick={onclick} disabled={note.title===""&& note.description===""?true: false}>Add Note</button>
      </form>
       </div>
 )
}

export default Home
