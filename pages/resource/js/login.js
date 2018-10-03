function show(){
    document.getElementById('login').classList.remove('hide');
    console.log("show");
}
function hide(){
    document.getElementById('login').classList.add('hide');
}
function login(){
    // remove the tasks
   var wrapper =  document.getElementsByClassName('task');
   var len = wrapper.length;
   for(var i=0; i<len; i++){
       wrapper[i].parentNode.removeChild(wrapper[i]);
   }
}
function sign_in(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username != null && password != null){
        document.getElementById('login').submit();
    }
}
function sign_up(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
}