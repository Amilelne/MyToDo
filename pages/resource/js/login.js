function show(){
    document.getElementById('login').classList.remove('hide');
}
function hide(){
    document.getElementById('login').classList.add('hide');
}

// login success
function login_success(username){
    document.getElementById('headInfo').innerText = "welcome," + username;
}
function user_login(){
    // remove the todos
   var wrapper =  document.getElementById('todo');
   wrapper.innerHTML = null;
   // remove the completions
   wrapper = document.getElementById('completed');
   wrapper.innerHTML = null;
}
window.addEventListener('load',function(){
    var username = null;
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
    // If user doesn't login, just store the todos at local
    function local_todo(value){
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
    }
    function post_todo(){
        var XHR = new XMLHttpRequest();
        var FD = new FormData();
        var value = document.getElementById('item').value;
        FD.append('item', value);
        FD.append('username', username);
        // fail
        XHR.addEventListener('error', function(){
            alert("fail");
        });
        XHR.onreadystatechange = function() {
            if(XHR.readyState == 4){
                if((XHR.status >= 200 && XHR.status < 300) || XHR.status == 304){
                    console.log("add todo at local");
                    local_todo(value);
                }else{
                    alert("It failed");
                }
            }
        }
        if(username != null){
            XHR.open("POST", '/api/todos');
            XHR.send(FD);
        }
        else{
            alert("Sorry, please login first!");
        }
    }
    // sign up
    function sign_up(){
        var XHR = new XMLHttpRequest();
        var FD = new FormData();
        username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        password = md5(password);
        FD.append('username', username);
        FD.append('password', password);
        
        // fail
        XHR.addEventListener('error', function(){
            alert("fail, please register again");
        });
        XHR.onreadystatechange = function() {
            if(XHR.readyState == 4){
                if((XHR.status >= 200 && XHR.status < 300) || XHR.status == 304){
                    alert(XHR.responseText);
                }else{
                    alert("It failed");
                }
            }
        }
        if(username != null && password != null){
            XHR.open("POST", '/api/signup');
            XHR.send(FD);
        }
        else{
            alert("Sorry, username and password cannot be empty!");
        }
    }
    // sign in
    function sign_in(){
        var XHR = new XMLHttpRequest();
        var FD = new FormData();
        username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        password = md5(password);
        FD.append('username', username);
        FD.append('password', password);

        XHR.addEventListener('error', function(){
            alert("fail, please login again");
        });
        XHR.onreadystatechange = function() {
            if(XHR.readyState == 4){
                if((XHR.status >= 200 && XHR.status < 300) || XHR.status == 304){
                    hide();
                    login_success(username);
                    alert(XHR.responseText);
                }else{
                    alert("It failed");
                }
            }
        }
        if(username != null && password != null){
            XHR.open("POST", '/api/signin');
            XHR.send(FD);
        }
        else{
            alert("Sorry, username and password cannot be empty!");
        }
    }
    // submit the form for sign in or sign up
    var signUp = document.getElementById('signUp');
    var signIn = document.getElementById('signIn');
    var addTodo = document.getElementById('addTodo');
    signUp.addEventListener('click', function(){
        sign_up();
    });
    signIn.addEventListener('click', function(){
        sign_in();
    });
    addTodo.addEventListener('click', function(){
        if(username != null){
            post_todo();
        }
        else{
            var value = document.getElementById('item').value;
            local_todo(value);
        }
    });
});