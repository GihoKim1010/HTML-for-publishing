var input_id;
var input_pw;


window.onload = function () {
    input_id=document.getElementById("id");
    input_pw=document.getElementById("pw");

    clock=document.getElementById("clock"); //시계 기능 첨부.
    setInterval(x, 1000);  // 타이머 시작. 1000밀리초(1초)마다 함수 x가 작동.
}

function login(){
    var loginSpace=document.getElementById("loginSpace")

    if(input_id.value=="cat" && input_pw.value=="1234"){
        loginSpace.innerHTML=input_id.value + "회원님 반갑습니다.";
    }else{
        alert("로그인 실패");
    }
}


var clock;

// ㅇㅇㅇㅇ년 ㅇㅇ월 ㅇㅇ일 ㅇㅇ시 ㅇㅇ분 ㅇㅇ초 ㅇㅇㅇ 밀리초

function x(){
    var now = new Date();
    var result = 
        now.getFullYear() + "년 " 
        + now.getMonth() + "월 "
        + now.getDate() + "일 "
        + now.getHours() + "시 "
        + now.getMinutes() + "분 "
        + now.getSeconds() + "초 ";
    clock.innerHTML = result;
}