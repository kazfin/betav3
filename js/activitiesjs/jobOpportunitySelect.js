//Author(s): Ethan Scott//

//interior designer//
document.getElementById("int-designer").addEventListener("click", function() {
	console.log("int-designer clicked");
	Job = "int-designer-select";
	hasJob = false;
	Logs = "I looked into becoming an interior designer.";
	localStorage.setItem("Job", Job);
	localStorage.setItem("hasJob", hasJob);
	localStorage.setItem("Logs", Logs);
	window.location.href = "./job-opportunity.html"; //redirects player to the application page they selected//
});
document.getElementById("engineer").addEventListener("click", function() {
	console.log("engineer clicked");
	Job = "engineer-select";
	hasJob = false;
	Logs = "I looked into becoming an engineer.";
	localStorage.setItem("Job", Job);
	localStorage.setItem("hasJob", hasJob);
	localStorage.setItem("Logs", Logs);
	window.location.href = "./job-opportunity.html";
});
document.getElementById("ffw").addEventListener("click", function() {
	console.log("fast food worker clicked");
	Job = "ffw-select";
	hasJob = false;
	Logs = "I looked into becoming an fast food worker.";
	localStorage.setItem("Job", Job);
	localStorage.setItem("hasJob", hasJob);
	localStorage.setItem("Logs", Logs);
	window.location.href = "./job-opportunity.html"
});
document.getElementById("scientist").addEventListener("click", function() {
	console.log("scientist clicked");
	Job = "scientist-select";
	hasJob = false;
	Logs = "I looked into becoming a scientist.";
	localStorage.setItem("Job", Job);
	localStorage.setItem("hasJob", hasJob);
	localStorage.setItem("Logs", Logs);
	window.location.href = "./job-opportunity.html"
});