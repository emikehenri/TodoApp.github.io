const input = document.querySelector('#submit');
let todoList = []; // Change 'const' to 'let'

// Check if there is existing data in localStorage and load it
if (localStorage.getItem('todoList')) {
  todoList = JSON.parse(localStorage.getItem('todoList'));
  myList();
}

input.addEventListener('click', () => {
  const textInput = document.querySelector('#text');
  const text = textInput.value.trim();
  if (text !== '' && !todoList.includes(text)) {
    todoList.push(text); // Modify the 'todoList'
    myList();
    textInput.value = '';
    localStorage.setItem('todoList', JSON.stringify(todoList)); // Store the updated 'todoList'
  }
});

function myList() {
    const listSection = document.querySelector('#listSection');
    listSection.innerHTML = ''; // Clear the existing list before re-rendering
    
    for (let i = 0; i < todoList.length; i++) {
      const listItemElement = document.createElement('li');
      listItemElement.classList.add('list-group-item', 'bg-primary', 'fs-4', 'fw-bold','rounded-2','my-1','py-3');
  
      // Create a close button
      const closeButton = document.createElement('button');
      closeButton.classList.add('btn', 'btn-danger', 'btn-close','mx-auto','btn-lg');
      
      // Add a click event listener to remove the item when the close button is clicked
      closeButton.addEventListener('click', () => {
        todoList.splice(i, 1); // Remove the item from the array
        myList(); // Re-render the list
        localStorage.setItem('todoList', JSON.stringify(todoList)); // Update localStorage
      });
      
      // Append the close button to the list item
      listItemElement.appendChild(closeButton);
  
      // Append the todo text to the list item
      listItemElement.appendChild(document.createTextNode(todoList[i]));
  
      // Append the list item to the list section
      listSection.appendChild(listItemElement);
    }
  }
  
