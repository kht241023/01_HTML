// document.get ~ 특정 아이디나 태그나 클래스명을 가져오는 설정
// 맨 위 작성 시작
// value 제외

const inputId = document.getElementById("inputId");
const inputPw = document.getElementById("inputPw");

function login() {
  // ID, PW input에 작성된 값 가져오기
  // 가져오기를 할 때 숫자로 합을 작성하지 않는 한 Number 사용하지 않음
  const id = inputId.value; //소비자가 작성한 아이디 값 최종적으로 가져오기
  const pw = inputPw.value; //소비자가 작성한 비밀번호 값 최종적으로 가져오기

  // 회원가입한 아이디가 member01
  //회원가입한 비밀번호가 pass01

  // 위 두가지가 소비자가 작성한 아이디 비밀번호와 일치해야지 로그인 성공 뜰 것
  // A && B ?   A 와 B모두 일치할 때    : A 나 B 중 하나라도 일치하지 않을 때
  const success = "로그인 성공!";
  const fail = "아이디 또는 비밀번호가 일치하지 않습니다.";

  "member01" == id && "pass01" == pw ? alert(success) : alert(fail);
}

function checkNumber() {
  const pn = document.getElementById("phone").value;
  const tn = document.getElementById("tel").value;
  const msg = document.getElementById("msg");

  // 삼항 연산자로 입력여부를 확인 한 후 메세지 표시 또는 메세지 숨기기
  pn || tn ? (msg.style.display = "none") : (msg.style.display = "block");
  // 둘 중하나라도 입력하면 전화번호나 휴대폰 번호를 입력해주세요 라는글자 숨기기
}
