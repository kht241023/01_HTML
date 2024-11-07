function checkGrade() {
  const score = document.getElementById("inputScore").value;
  // input 이 아닌 p나 span이나 h1 같은 태그들은 value 값이 없음!!!
  // 메세지가 출력되는 공간에는 value가 없기 때문에 작성하지 않음
  const msg = document.getElementById("gradeMsg");

  msg.innerText = "성적 : ";

  if (score >= 90) {
    msg.innerText += "A"; //성적 :  이라는 글자에 A라는 글자를 이어붙여 출력
    msg.className = "A"; //대 소문자 구분을 하기때문에 명확하게 작성
  } else if (score >= 80) {
    msg.innerText += "B";
    msg.className = "B";
  } else if (score >= 70) {
    msg.innerText += "C";
    msg.className = "C";
  } else if (score >= 60) {
    msg.innerText += "D";
    msg.className = "D";
  } else {
    msg.innerText += "F";
    msg.className = "F";
  }
}
