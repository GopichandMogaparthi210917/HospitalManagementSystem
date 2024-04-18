// Function to handle note form submission
function addNote(event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    // Get input value(s) from note form
    const noteContent = document.getElementById('note').value;
  
    // Create Note object
    const newNote = {
      note: noteContent
    };
  
    // Print the created Note object
    console.log('New Note:', newNote);
  }
  
  // Add event listener to note form
  document.getElementById('add-note-form').addEventListener('submit', addNote);  