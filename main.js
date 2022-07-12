document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get the Input Values
  let xA = +document.getElementById("xA-in").value;
  let yA = +document.getElementById("yA-in").value;
  let xB = +document.getElementById("xB-in").value;
  let yB = +document.getElementById("yB-in").value;
  let xC = +document.getElementById("xC-in").value;
  let yC = +document.getElementById("yC-in").value;
  console.log(xA, yA, xB, yB, xC, yC);

  // Calculate the side lengths and the perimeter
  let AB = dist(xA, yA, xB, yB);
  let AC = dist(xA, yA, xC, yC);
  let BC = dist(xB, yB, xC, yC);
  let ABC = AB + AC + BC;
  console.log(AB,AC, BC, ABC);

  // Output the Results
  document.getElementById("ab-out").innerHTML = AB;
  document.getElementById("ac-out").innerHTML = AC;
  document.getElementById("bc-out").innerHTML = BC;
  document.getElementById("abc-out").innerHTML = ABC;
}

function dist(x1, y1, x2, y2) {
  let rise = y2 - y1;
  let run = x2 - x1;
  return Math.sqrt(rise ** 2 + run ** 2);
}

