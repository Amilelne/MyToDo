function completeItem(){
  var completed = document.getElementById('completed');
  this.classList.remove('todo');
  this.classList.add('completed');
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;

  completed.appendChild(item);
}
function removeItem(){
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  parent.removeChild(item);
}
var completeSVG = '<svg t="1533108573634" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5833" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8c12.7 17.7 39 17.7 51.7 0l210.6-292c3.9-5.3 0.1-12.7-6.4-12.7z" p-id="5834" fill="#25b99a"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" p-id="5835" fill="#25b99a"></path></svg>';
var removeSVG = '<svg t="1533087814282" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6439" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M704 128c-8.384-49.536-50.56-64-92.8-64L407.872 64C365.632 64 328.448 78.464 320 128l0 64 384 0L704 128z" p-id="6440" fill="#25b99a"></path><path d="M204.8 412.416l0 473.216C204.8 934.144 228.288 960 281.6 960l460.8 0c53.376 0 76.8-25.856 76.8-74.368L819.2 412.416c53.952 0 76.8-29.76 76.8-78.208C896 285.696 872.512 256 819.2 256L550.4 256 204.8 256C151.488 256 128 285.696 128 334.208 128 382.656 151.488 412.416 204.8 412.416zM576 387.968C576 386.496 576.576 385.408 576.704 384l62.656 0C639.488 385.408 640 386.496 640 387.968l0 414.464c0 39.424-64 39.424-64 0L576 387.968zM384 387.968C384 386.496 384.448 385.408 384.64 384l59.136 0c0.128 1.408 0.704 2.496 0.704 3.968l0 414.464c0 39.424-60.48 39.424-60.48 0L384 387.968z" p-id="6441" fill="#25b99a"></path></svg>';
document.getElementById('add').addEventListener('click', function(){
  var value = document.getElementById('item').value;
  if(value){
    var item = document.createElement('li');
    item.innerText = value;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeSVG;
    complete.addEventListener('click',completeItem);

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeSVG;
    remove.addEventListener('click',removeItem);

    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);

    document.getElementById('todo').appendChild(item);
    document.getElementById('item').value = '';
  }
  else{
    console.log('Error');
  }
});
