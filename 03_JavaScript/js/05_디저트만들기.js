const flour = "밀가루";
const sugar = "흑설탕";
const egg = "계란";
const chips = "마카다미아칩";
const recipeText = document.getElementById("recipe-text");

//2.
function 치즈케이크레시피() {
  recipeText.innerText = flour + " 와 " + sugar + " 를 넣어 반죽합니다.";
}

//3.
function 초코칩쿠키레시피() {
  recipeText.innerText =
    flour + " 와 " + sugar + ", " + chips + " 를 넣어 반죽합니다.";
  // sugar 다음에 초코칩 쿠키 추가
}
//4.
function 크림빵레시피() {
  recipeText.innerText =
    flour + " 와 " + egg + ", " + sugar + " 를 넣어 반죽합니다.";
  // flour 다음에 계란 추가
}
