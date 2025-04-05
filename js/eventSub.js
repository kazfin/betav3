//Author(s): Ethan Scott//

function saveToLocalStorage() {
	localStorage.setItem("Job", Job);
	localStorage.setItem("hasJob", hasJob);
	localStorage.setItem("Salary", Salary);
	localStorage.setItem("Logs", Logs);
	localStorage.setItem("Joy", Joy);
	localStorage.setItem("Intellect", Intellect);
	localStorage.setItem("Health", Health);
	localStorage.setItem("Looks", Looks);
	localStorage.setItem("Money", Money);
	localStorage.setItem("revent", revent);
	localStorage.setItem("reventSub", JSON.stringify(reventSub));
	localStorage.setItem("rnumber", rnumber);
	localStorage.setItem("rfunction", rfunction);
	localStorage.setItem("JobPerformance", JobPerformance);
	localStorage.setItem("workExperience", workExperience);
	console.log("saved variables to local storage");
}

function eventTitle(eventTitle) {
	document.getElementById("eventTitle").innerHTML = eventTitle;
}
function eventText(eventText) {
	document.getElementById("eventText").innerHTML = eventText;
}
function eventOutcome(eventOutcome) {
	document.getElementById("eventOutcome").innerHTML = eventOutcome;
}
function button1(button1) {
	document.getElementById("button1").innerHTML = button1;
}
function eventCreditText(eventCreditText) {
	document.getElementById("eventCreditText1").innerHTML = eventCreditText;
}

if (reventSub.length === 0) {
	window.location.href = "./event.html";
} else {
	console.log("reventSub is not empty");
	console.log(reventSub);
}

if (reventSub.includes("local-load-successfuly")) {
	console.log("reventSub: " + reventSub);
	reventSub.splice(reventSub.indexOf("local-load-successfuly"), 1);
	console.log("splice splice :smiling-imp:");
	eventTitle("Load Successful");
	eventText("Successfuly loaded.");
	document.getElementById("eventOutcome").innerHTML = "";
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
			if (reventSub.length > 0) {
				window.location.href = "./eventSub.html";
			} else if (reventSub.length === 0) {
				window.location.href = "./event.html";
			}
		});
}

if (reventSub.includes("primary-school-grad")) { //if player graduated primary school//
	console.log("reventSub: " + reventSub);
	reventSub.splice(reventSub.indexOf("primary-school-grad"), 1);
	console.log("splice splice :smiling-imp:");
	Logs = "I graduated primary school!";
	eventTitle("Add that to your resume");
	eventText("You graduated primary school!");
	document.getElementById("eventOutcome").innerHTML = "";
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
			if (reventSub.length > 0) {
				window.location.href = "./eventSub.html";
			} else if (reventSub.length === 0) {
				window.location.href = "./event.html";
			}
		});
} else if (reventSub.includes("high-school-grad")) { //if player graduated high school//
	console.log("reventSub: " + reventSub);
	reventSub.splice(reventSub.indexOf("high-school-grad"), 1);
	console.log("splice splice :smiling-imp:");
	Logs = "I graduated high school!";
	eventTitle("Time to pay taxes");
	eventText("You graduated high school!");
	document.getElementById("eventOutcome").innerHTML = "";
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
			if (reventSub.length > 0) {
				window.location.href = "./eventSub.html";
			} else if (reventSub.length === 0) {
				window.location.href = "./event.html";
			}
		});
}

if (reventSub.includes("fired-full-time")) { //fired from full-time job//
	reventSub.splice(reventSub.indexOf("fired-full-time"), 1);
	Joy -= 8;
	eventTitle("Fired");
	eventText("You got fired from your job.");
	let x = 0;
	for (x = 0; x < workExperience.length; x++) {
		if (workExperience[x] === Job) {
			console.log(x);
		}
	}
	if (x >= 8) {
		eventOutcome("Your boss said it's because your performance was too low. On your way out, they gave you a severance package. Money + $"+Math.round(Salary/5));
		Money += Math.round(Salary/5);
	} else {
		eventOutcome("Your boss said it's because your performance was too low.");
	}
	Job = "";
	hasJob = false;
	Logs = "I got fired from my Job today.";
	saveToLocalStorage();
	button1("OK");
	console.log("event display completed");
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./random-event-finder.html";})
}

if (reventSub.includes("someone-died")) {
	function whilerator() {
		let y = 0;
		while (y < DeadPeople.length) {
			let x = 0;
			x += DeadPeopleRelationshipAtDeath[y];
			y += 1;
		}
		return x;
	}
	reventSub.splice(reventSub.indexOf("someone-died"), 1);
	let takeJoyOff = whilerator();
	Joy -= takeJoyOff/2;
	eventTitle("Fired");
	eventText("You got fired from your job.");
	eventOutcome("");
	saveToLocalStorage();
	button1("OK");
	console.log("event display completed");
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./random-event-finder.html";})
}

saveToLocalStorage();