function readValue() {
  //채팅이 출력되는 배경 css 가져오기
  // id를 작성하더라도 css 에서 작성하는
  // 아이디 표기 방법을 사용
  //                                  #아이디속성명 들어가기
  const bg = document.querySelector("#chatting-bg");
  //채팅 입력 input css 가져오기
  const inputChat = document.querySelector("#user-input");
  //html js를 연결지을 것

  //입력된 값이 없을 경우
  // 1. 진짜 안적었음 (input 안에 내용물이 없어요.)
  // 2. 공백만 보냄

  /****  문자열.trim() : 문자열의 좌우 공백을 제거  ****/
  /**
   * inputChat.value.trim().length == 0
   * inputChat.value                    -> input 채팅내용하는 창 안에 들어있는 값의
   *                .trim()             -> 좌우 공백을 제거하고
   *                       .length      -> 총 글자수가
   * inputChat.value.trim().length == 0 -> 0일 때
   */
  if (inputChat.value.trim().length == 0) {
    //입력한게 없거나 띄어쓰기만 보내려 한다면
    alert("채팅 내용을 입력해주세요."); //장난치지말고 채팅내용 입력해서 보내기!

    //채팅내용을 입력 안했으면 돌려보내기
    return;
  }

  bg.innerHTML += `<p><span>${inputChat.value}</span></p>`;
  /***
   * bg.scrollTop : 스크롤 윗부분 위치
   * bg.scrollHeight : 채팅을 감싸고 있는 div의 전체 높이를 표현
   *
   * bg.scrollTop = 값 : 스크롤 윗부분을 값 위치로 이동
   * bg.scrollTop = bg.scrollHeight = 값이 너무 크면 맨 밑으로 스크롤 이동
   *
   *
   */
  bg.scrollTop = bg.scrollHeight;
  //전체 div 높이를 가져옴으로 스크롤을 맨 아래로 내려버리는 트릭
  inputChat.value = "";
}

/*
input 아이디값이 user-input 인 요소에서
키보드가 작동하는 상황이 감지되었을 때
올라온 키가 'Enter' 키 이면 readValue() 함수를 불러오기
*/

/*
keydown  : 키가 눌러졌을 때 
keypress : 키가 눌러지고 있을 때
keyup    : 눌러지던 키가 떼어졌을 때
*/
// addEventListener 이용해서 keyup 이벤트를 확인하고
// 이외 다양한 이벤트를 알아볼 것
function 키누르기(event) {
  if (event.key === "Enter") {
    readValue();
  }
}
