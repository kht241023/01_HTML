function 빵구매(abc) {
  const price = 빵가격(abc);
  const result = document.getElementById("result");
  if (price > 0) {
    result.innerText =
      abc + " 구매 완료되었습니다. 가격은 " + price + " 원 입니다.";
  } else {
    result.innerText = "아직 판매 예정입니다.";
  }
}

function 빵가격(abc) {
  if (abc === "크루아상") {
    return 3000;
  } else if (abc === "식빵") {
    return 2000;
  } else if (abc === "베이글") {
    return 2500;
  } else {
    return 0;
  }
}
