
const btnAddNote = document.querySelector('.notebook .add-note');
btnAddNote.addEventListener('click', () => {
    const textArea = document.querySelector('.notebook .note-text');
    const li = document.createElement('li');
    li.innerText = textArea.value;
    document.querySelector('.notebook .notes').appendChild(li);
    textArea.value = '';    
});