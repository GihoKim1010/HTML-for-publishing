var new_PW;
var new_ID;
var new_PW2;
var new_Name;
var new_Email;
var new_Year;
var new_Month;
var new_Day;
var new_gender;

window.onload = function () {
    new_ID = document.getElementById("newID");
    new_PW = document.getElementById("newPW");
    new_PW2 = document.getElementById("newPW2");
    new_Name = document.getElementById("newName");
    new_Email = document.getElementById("newEmail");
    new_Year = document.getElementById("newYear");
    new_Month = document.getElementById("newMonth");
    new_Day = document.getElementById("newDay");
    new_gender = document.getElementsByName("gender");
}


function submitID() {

    var num_ID = new_ID.value.length;
    var num_PW = new_PW.value.length;
    var num_PW2 = new_PW2.value.length;
    var num_Name = new_Name.value.length;
    var num_Year = new_Year.value.length;
    var num_Month = new_Month.value.length;
    var num_Day = new_Day.value.length;

    if(new_PW.value!=new_PW2.value){
        alert("비밀번호가 다릅니다.")
        console.log("비밀번호 서로 다름.")
    }else if (6 <= num_ID && num_ID <= 12 &&
        4 <= num_PW && num_PW <= 12 &&
        4 <= num_PW2 && num_PW2 <= 12 &&
        2 <= num_Name && num_Name <= 4 &&
        num_Year == 4 &&
        1 <= num_Month && num_Month <= 2 &&
        1 <= num_Day && num_Day <= 2) {
        alert("회원가입 성공!")
        console.log("회원가입 성공!")
    }else {
        alert("글자수를 확인해주세요.")
        console.log("글자 수 입력 오류.")
    }

    for (var i = 0; i < new_gender.length; i++) {
        // new_gender[i] 의 checked 멤버 변수에 해당 radio 가 체크된 상태면 true 가 리턴되므로 둘다 true 면 체크상태라는 뜻
        if (new_gender[i].checked == true) {
            var selectedGender = "";
            selectedGender = new_gender[i].value; // 해당 라디오 버튼의 값을 변수에 저장
        }
    }
}