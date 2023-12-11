var input_id;
var input_pw;


window.onload = function () {
    input_id=document.getElementById("id");
    input_pw=document.getElementById("pw");
}

function login(){
    var loginSpace=document.getElementById("loginSpace")

    if(input_id.value=="cat" && input_pw.value=="1234"){
        loginSpace.innerHTML=input_id.value + "회원님 반갑습니다.";
    }else{
        alert("로그인 실패");
    }
}
