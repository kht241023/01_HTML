const num1 = document.getElementById("num1"); //num2
const num2 = document.getElementById("num2"); //num2
const rst = document.getElementById("result"); //result
//더하기 기능
function sum() {
  const v1 = Number(num1.value);
  const v2 = Number(num2.value);
  const total = v1 + v2;
  rst.innerText = "합 : " + total;
}

//곱셈 기능
function mul() {
  const v1 = Number(num1.value);
  const v2 = Number(num2.value);
  const total = v1 * v2;
  rst.innerText = "곱 : " + total;
}
function evenOdd() {
  const v1 = Number(num1.value);
  const v2 = Number(num2.value);
  // 홀 짝 유무 확인
  const sumResult = v1 + v2;
  const isEven = sumResult % 2 == 0 ? "짝수" : "홀수";
  rst.innerText = "합 " + sumResult + " 은(는) " + isEven + "입니다.";
}
