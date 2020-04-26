const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
var liId = 0
function chkBoxClicked(checkedVal){
	if(checkedVal)
	uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) -1;
else
	uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) +1;
return
}

function newListItem(liId){
	let spn = document.createElement("span");
	spn.innerHTML = "New Item "+ liId
	const li = document.createElement('li')
	li.innerHTML = `
    <input type="checkbox" onChange = chkBoxClicked(this.checked) /> `
  li.Id = "li_"+liId
   li.appendChild(spn);
  return li
}

function newTodo() {
	liId = liId+1
   //increment the innerHtml of item count span
   itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) + 1;
   uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) +1;
  // create a new List item with the check box
  let newItem = newListItem(liId);
  list.appendChild(newItem); 
  }
