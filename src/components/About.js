import React from 'react'

function About() {
  return (
    <div className='about'>
    <p>This website was created to exhibit the skills of the developer. This web application allows you to save texts such as notes, tasks, contact information and various other important things. </p>

    <h2>How does this work ?</h2>

    <p>Using this application is quite simple, you have to type the title and description in the fields provided in the "Home" page of this website. Then click on the “Add Note” button below to save the note.</p>

    <p>Your notes are saved in the local storage of your browser. Which means, your notes are safe even if you reload the page or shut down the browser. You can find those notes on the “Notes” page.</p>
    
    <p>You can delete the note which you don’t want anymore by simply clicking on the “delete” button inside the container of that particular note.</p>
    </div>
  )
}

export default About
