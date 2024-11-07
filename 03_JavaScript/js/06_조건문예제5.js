function checkSeason() {
  const month = document.getElementById("month").value;
  const msg = document.getElementById("seasonMsg");
  //if(month ==3 || month == 4 || month == 5)
  if (month >= 3 && month <= 5) {
    //3 ~ 5
    msg.innerText = "봄";
    msg.className = "spring";
  } else if (month >= 6 && month <= 8) {
    msg.innerText = "여름";
    msg.className = "summer";
  } else if (month >= 9 && month <= 11) {
    msg.innerText = "가을";
    msg.className = "fall";
  } else if (month == 12 || month == 1 || month == 2) {
    msg.innerText = "겨울";
    msg.className = "winter";
  } else {
    msg.innerText = "1월부터 12월 사이를 작성해주세요.";
    msg.className = ""; //빈칸을 작성해서 기존에 작성된 class 밀어버리기
  }
}

/*
if(       ) - else if(       ) - else
const month
const msg
3 ~ 5월
봄입니다.
spring 클래스 추가
6 ~ 8월
여름입니다.
summer 클래스 추가
9월 ~ 11월
가을입니다.
fall 클래스 추가
12월 1월 2월
month == 12 || month == 1 || month == 2
겨울입니다.
winter 클래스 추가
나머지
1에서 12 사이의 숫자를 입력하세요 <- 텍스트 보이기
클래스 초기화 
초기화방법 
className = ""; 설정
*/
