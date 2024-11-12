function 색상변경(color) {
  const 배경색 = document.getElementById("bd");
  switch (color) {
    case "lightblue":
      배경색.style.backgroundColor = "lightblue";
      break;
    case "lightcoral":
      배경색.style.backgroundColor = "lightcoral";
      break;
    case "lightyellow":
      배경색.style.backgroundColor = "lightyellow";
      break;
    case "lightgreen":
      배경색.style.backgroundColor = "lightgreen";
      break;
    case "lightgrey":
      배경색.style.backgroundColor = "lightgrey";
      break;
  }
}
