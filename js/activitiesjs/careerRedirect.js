//Author(s): Ethan Scott//

document.getElementById("career").addEventListener("click", function() {
	if (Age < 16) {
		revent = "tooYoungToGetJob";
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	} else if (Age >= 16) {
		if (hasJob === true) {
			window.location.href = "./job.html";
		} else if (hasJob === false) {
			window.location.href = "./job-search-pg1.html";
		}
	}
});

document.getElementById("education").addEventListener("click", function() {
	if (Age > 4 && Age < 18) {
		window.location.href = "./school.html";
	} else if(Age < 5) {
		revent = "notAtSchoolYet";
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	} else if (hasJob === true) {
		revent = "cantGoToSchoolWhileHasJob";
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	}
});