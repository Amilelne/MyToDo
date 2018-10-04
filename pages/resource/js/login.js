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
    function sign_up(){
        var XHR = new XMLHttpRequest();
        var FD = new FormData();
        var username = document.getElementById('username').value;
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
        var username = document.getElementById('username').value;
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
    var signIn = document.getElementById('signIn')
    signUp.addEventListener('click', function(){
        sign_up();
    });
    signIn.addEventListener('click', function(){
        sign_in();
    })
});