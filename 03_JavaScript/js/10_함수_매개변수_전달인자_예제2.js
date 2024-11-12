const result = document.getElementById("result");
function 결정사() {
  const abc = prompt("소개팅 대상자를 입력하세요.");

  if (abc) {
    result.innerText = abc + " 님과 소개팅을 준비합니다.";
  } else {
    alert("소개팅 대상자가 없네요!");
  }
}
