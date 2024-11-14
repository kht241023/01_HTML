function submitForm() {
  //필수 약관 동의 확인
  const serviceChecked = document.getElementById("service").checked;
  const privacyChecked = document.getElementById("privacy").checked;

  //모든 필수 약관에 동의 하지 않았다면
  // !true = false   !false = true
  // if 안에가 true 가 되어야지 alert 동작
  /*
  if (serviceChecked && privacyChecked) {
    alert("두개다 선택하셨네요.");
  } else { // !serviceChecked && !privacyChecked
    alert("모든 필수 약관에 동의해주세요.");
  }
    */

  // !serviceChecked = 서비스 약관에 동의하지 않음 의미
  // !privacyChecked = 개인정보 보호 약관에 동의하지 않음을 의미
  // && 모든 필수 약관에 체크를 안해야지 필수 약관 동의해달라는 표기가 보임
  // || 둘 중 하나라도 필수 약관에 체크를 하지 않았다면 모두 체크하라는
  // 표기가 보여질 것
  // serviceChecked 가 false 인 경우 느낌표를 붙이면 true로 변경해줌

  // !serviceChecked = 서비스 항목에 체크를 안했을 때가 false인데
  // 서비스 항목에 체크를 안했을 때가 false인데 앞에 !붙여서 true로 변한 것
  if (!serviceChecked || !privacyChecked) {
    alert("모든 필수 약관에 동의해주세요.");
    return;
  }

  // 선택된 취미를 배열로 저장하는 for문 사용
  const hchecked = document.querySelectorAll(".hobby");
  let hobbies = "";
  let count = 0;

  for (let i = 0; i < hchecked.length; i++) {
    if (hchecked[i].checked) {
      hobbies += hchecked[i].value + " "; //선택한 취미를 옆으로 모두 이어 붙이기
      count++; //취미 개수 증가
    }
  }

  // 위 코드는 결과 표시를 보기위한 진행중
  //결과 표시
  const result = document.getElementById("result");
  if (count > 0) {
    result.innerText = `선택된 취미 : ${hobbies} \n 선택된 취미 개수 : ${count}`;
  } else {
    result.innerText = "선택된 취미가 없습니다.";
  }
}
