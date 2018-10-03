function completeItem() {
  var completed = document.getElementById('completed');
  this.classList.remove('todo');
  this.classList.add('completed');
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;

  completed.appendChild(item);
}

function removeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  parent.removeChild(item);
}

var completeIcon = '<i class="fas fa-check"></i>';
var removeIcon = '<i class="fas fa-trash-alt"></i>';
document.getElementById('add').addEventListener('click', function() {
  var value = document.getElementById('item').value;
  if (value) {
    var item = document.createElement('li');
    item.innerText = value;
    item.classList.add('list-group-item');
    item.classList.add('list-group-item-action');
    item.classList.add('mt-2');
    item.classList.add('clearfix');

    var buttons = document.createElement('div');
    buttons.classList.add('btn');
    buttons.classList.add('float-right');

    var complete = document.createElement('button');
    complete.classList.add('btn-success');
    complete.classList.add('rounded-circle');
    //complete.classList.add('ml-2');
    complete.innerHTML = completeIcon;
    complete.addEventListener('click', completeItem);

    var remove = document.createElement('button');
    remove.classList.add('btn-danger');
    remove.classList.add('rounded-circle');
    remove.innerHTML = removeIcon;
    remove.addEventListener('click', removeItem);

    var divide = document.createElement('div')
    divide.classList.add('divide-line');
    divide.classList.add('d-inline');
    divide.classList.add('m-1');


    buttons.appendChild(remove);
    buttons.appendChild(divide);
    buttons.appendChild(complete);
    item.appendChild(buttons);

    document.getElementById('todo').appendChild(item);
    document.getElementById('item').value = '';
  } else {
    console.log('Error');
  }
});
