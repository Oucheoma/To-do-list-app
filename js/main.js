let addToDoButton = document.getElementById('addToDo')
let toDoContainer = document.getElementById('toDoContainer')
let inputField = document.getElementById('inputField')


addToDoButton.addEventListener('click', handleEvent)
inputField.addEventListener('keypress', handleEvent)
function handleEvent (e){
    if (e.type === 'click' || e.key === 'Enter'){ // allows to add new tasks if i press it add list button or click enter
        var paragraph = document.createElement('p');
        paragraph.style.cursor ='pointer'
        paragraph.classList.add('to-dos') // added the to-dos style to JS
        paragraph.innerText = inputField.value;
        toDoContainer.appendChild(paragraph);
        inputField.value= ' ';
        paragraph.addEventListener('click', function(){
            paragraph.style.textDecoration ='line-through'
            // paragraph.style.cursor ='pointer'
        })
        paragraph.addEventListener('dblclick', function(){
            toDoContainer.removeChild(paragraph)
            // paragraph.style.cursor ='pointer'
        })
    }
}
    












// addToDoButton.addEventListener('click', function(){
//     var paragraph = document.createElement('p');
//     paragraph.style.cursor ='pointer'
//     paragraph.classList.add('to-dos') // added the to-dos style to JS
//     paragraph.innerText = inputField.value;
//     toDoContainer.appendChild(paragraph);
//     inputField.value= ' ';
//     paragraph.addEventListener('click', function(){
//         paragraph.style.textDecoration ='line-through'
//         // paragraph.style.cursor ='pointer'
//     })
//     paragraph.addEventListener('dblclick', function(){
//         toDoContainer.removeChild(paragraph)
//         // paragraph.style.cursor ='pointer'
//     })
// })