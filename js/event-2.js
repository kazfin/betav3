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
	localStorage.setItem("rnumber", rnumber);
	localStorage.setItem("rfunction", rfunction);
	localStorage.setItem("JobPerformance", JobPerformance);
	console.log("saved variables to local storage");
}

function eventTitle(eventTitle) {
	document.getElementById("eventTitle2").innerHTML = eventTitle;
}
function eventText(eventText) {
	document.getElementById("eventText2").innerHTML = eventText;
}
function eventOutcome(eventOutcome) {
	document.getElementById("eventOutcome2").innerHTML = eventOutcome;
}
function button1(button1) {
	document.getElementById("button1-2").innerHTML = button1;
}
function button2(button2) {
	document.getElementById("button2-2").innerHTML = button2;
}
function eventCreditText(eventCreditText) {
	document.getElementById("eventCreditText2").innerHTML = eventCreditText;
}

if (revent === "job-quit-confirm") {
	eventTitle("Confirm");
	eventText("Are you sure you want to quit your job?");
	eventOutcome("This cannot be undone. Your Performance and Salary will be reset.");
	button1("Yes");
	button2("No");
	console.log("event display completed");
	document.getElementById("button1-2").addEventListener('click', () => {
		revent = "job-quit-perform";
		saveToLocalStorage();
		window.location.href = "./event.html";})
	document.getElementById("button2-2").addEventListener('click', () => {
		revent = "";
		saveToLocalStorage();
		window.location.href = "./job.html";})
} else if (revent === "destroy-save-confirm") {
	eventTitle("It's me, the game");
	eventText("Are you sure you want to do this man? This cannot be undone. All my memories will be gone.");
	eventOutcome("I won't know what achievements, or how many stars or DNA you have anymore, not to mention your settings!<br>Unless you have a hard copy of your current save file, or you're comfortable will losing all of your data, don't do this.");
	button1("I'm sure, clear data");
	button2("Nevermind");
	console.log("event display completed");
	document.getElementById("button1-2").addEventListener('click', () => {
		localStorage.clear();
		window.location.href = "./index.html";})
	document.getElementById("button2-2").addEventListener('click', () => {
		revent = "";
		saveToLocalStorage();
		window.location.href = "./save.html";})
}