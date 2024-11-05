/* 두 수가 같은지 비교 */

const v1 = document.getElementById("number1");
const v2 = document.getElementById("number2");
const r1 = document.getElementById("result1");

function 비교하기1() {
  r1.innerText = v1.value == v2.value;
}
