const inputId = document.getElementById("inputId");
const inputPw = document.getElementById("inputPw");
const mp = document.getElementById("inputMp");
const tp = document.getElementById("inputTp");
const msg = document.getElementById("msg");

// 핸드폰 일반전화 둘 중 하나라도 작성했는지 확인하는 멘트
//만약에 작성을 하지 않았다 둘 중하나 입력하라는 문구가 나오고
// 작성했다면 문구가 안보이게
function signUp() {
  const abc = 10;
  // const 새로만들어준 이름을 아래에서 사용하지 않았기 때문에 글자가 흐리게 보이는 것
  // 글자를 선명하게 보기 위해서는 abc 라는 새로 만들어진 변수명을 아래에서 사용해야함
  const mobilePhone = mp.value;
  const telPhone = tp.value;
  mobilePhone || telPhone
    ? (msg.style.display = "none")
    : (msg.style.display = "block");
}

function login() {
  const id = inputId.value;
  const pw = inputPw.value;

  id == "khtzzang" && pw == "kht1004"
    ? alert("로그인성공!")
    : alert("로그인실패!");
}
