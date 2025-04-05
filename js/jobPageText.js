//Author(s): Ethan Scott//

function jobTitle(body) {
	document.getElementById("jobTitle").innerHTML = body;
}
function salaryText() {
	let disposableIncome = 0;
	if (Intellect <= 20) {
		disposableIncome = (Salary / 100) * 20;
	} else if (Intellect > 20 && Intellect < 80) {
		disposableIncome = (Salary / 100) * 30;
	} else if (Intellect >= 80) {
		disposableIncome = (Salary / 100) * 40;
	}
	document.getElementById("salaryText").innerHTML = "You salary is $"+Salary+"/yr. <i>Actual disposable income ($"+disposableIncome+") may be less.</i>";
}

function performance() {
	document.getElementById("performanceText").innerHTML = "Performance: "+JobPerformance;
	if (JobPerformance <= 30) {
		performanceText.style.color = "#ff0000";
	} else if (JobPerformance >= 85) {
		performanceText.style.color = "#0be900";
	}
}

performance();
salaryText();

if (Job === "appr-int-designer") { //interior designer//
	jobTitle("Apprentice Interior Designer");
} else if (Job === "int-designer") {
	jobTitle("Interior Designer");
} else if (Job === "sr-int-designer") {
	jobTitle("Sr. Interior Designer");
} else if (Job === "appr-engineer") {
	jobTitle("Apprentice Engineer");
} else if (Job === "engineer") {
	jobTitle("Engineer");
} else if (Job === "sr-engineer") {
	jobTitle("Sr. Engineer");
} else if (Job === "ffw-cashier") {
	jobTitle("Fast Food Cashier");
} else if (Job === "ffw-cook") {
	jobTitle("Fast Food Cook");
} else if (Job === "ffw-manager") {
	jobTitle("Fast Food Branch Manager");
} else if (Job === "chemist") {
	jobTitle("Chemist");
} else if (Job === "physicist") {
	jobTitle("Physicist");
} else if (Job === "biologist") {
	jobTitle("Biologist");
} else if (Job === "chemical-engineer") {
	jobTitle("Chemical Engineer");
} else if (Job === "particle-physicist") {
	jobTitle("Particle Physicist");
} else if (Job === "biochemist") {
	jobTitle("Biochemist");
}