function checkPw() {
  const pw = document.getElementById("inputPw").value;
  const pwConfirm = document.getElementById("inputPwConfirm").value;

  //   삼항 연산자를 사용해서 일치 여부를 alert 출력
  const success = "비밀번호가 일치합니다.";
  const fail = "비밀번호가 일치하지 않습니다.";

  // 좌 우 값이 일치하는지 확인만 하면 되기 때문에 좌 우 에 어떤 값이 무조건 와야한다 라는 규칙 없음!
  pw == "pass1234!" && "pass1234!" == pwConfirm ? alert(success) : alert(fail);
}
