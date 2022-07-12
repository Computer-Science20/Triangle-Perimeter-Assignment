//Triangle Perimeter
//Variables to store HTML
	let x1Input = document.getElementById("x1-input");
	let y1Input = document.getElementById("y1-input");
    let x2Input = document.getElementById("x2-input");
    let y2Input = document.getElementById("y2-input");
    let x3Input = document.getElementById("x3-input");
    let y3Input = document.getElementById("y3-input");
    let outputSpan = document.getElementById("output");
    let perimeter = document.getElementById("perimeter");

    //Get the input values
	let x1 = +x1Input;
	let y1 = +y1Input;
	let x2 = +x2Input;
    let y2 = +y2Input;
	let x3 = +x3Input;
	let y3 = +y3Input;
  
	// Calculate the side lengths & perimeter
    function calcBtn() {
	let AB = dist(x1, y1, x2, y2);
	let AC = dist(x1, y1, x3, y3);
	let BC = dist(x2, y2, x3, y3);
	return perimeter = AB + AC + BC;
    }

	// Output the results
        outputSpan.innerHTML = perimeter