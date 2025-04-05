//Author(s): Ethan Scott//

function jobIcon(source) {
	document.getElementById("jobIcon").src = source;
}
function careerBranch(num, source) {
	document.getElementById("career-branch-"+num).src = source;
}
function changeText(elemID, content) {
	document.getElementById(elemID).innerHTML = content;
}
function removeBranch(num) {
	document.getElementById("career-branch-"+num).remove();
}

function workExpCalculator(jobItsFor) {
	let workExperienceExclusivizer = workExperience;
	let workCount = [];
	while (workExperienceExclusivizer.includes(jobItsFor)) {
		workExperienceExclusivizer.splice(workExperienceExclusivizer.indexOf(jobItsFor), 1);
		workCount.push(jobItsFor);
	}
	console.log(workCount+", "+workCount.length);
	return workCount.length;
}

changeText("jobQualificationAge", "Hover over a branch to see its qualifications.");
changeText("jobQualificationEducation", "");
changeText("jobQualificationJobExp", "");
changeText("jobQualificationPay", "");
changeText("jobExtra", "");
changeText("jobBonus", "");

Logs = "I looked into local jobs at my local locality.";

if (Job === "int-designer-select") {
	jobIcon("assets/armchair.svg");
	careerBranch(1, "assets/jobs/appr-int-designer.png");
	careerBranch(2, "assets/jobs/int-designer.png");
	careerBranch(3, "assets/jobs/sr-int-designer.png");
	removeBranch(4);
	removeBranch(5);
	removeBranch(6);
	changeText("jobOpportunityName", "Interior Designer");
	changeText("jobQualificationAge", "Age: Appr - 18 | Stnd - 18 | Sr - 24");
	changeText("jobQualificationEducation", "Education: Appr - High School | Stnd - Bachelors in Interior Design | Sr - Masters in Interior Design");
	changeText("jobQualificationJobExp", "Work experience: Appr - None | Stnd - None | Sr - 4 yrs Stnd Interior Designer");
	changeText("jobQualificationPay", "Pay: Appr - $45,000 /yr | Stnd - $60,000 /yr | Sr - $90,000 /yr");
	changeText("jobExtra", "Extras: Clean criminal record");
	changeText("jobBonus", "Bonuses: None");
	console.log("successfully updated job qualifications")
} else if (Job === "engineer-select") {
	jobIcon("assets/cog.svg");   
	careerBranch(1, "assets/jobs/appr-engineer.png");
	careerBranch(2, "assets/jobs/engineer.png");
	careerBranch(3, "assets/jobs/sr-engineer.png");
	removeBranch(4);
	removeBranch(5);
	removeBranch(6);
	changeText("jobOpportunityName", "Engineer");
	changeText("jobQualificationAge", "Age: Appr - 18 | Stnd - 24 | Sr - 26");
	changeText("jobQualificationEducation", "Education: Appr - Bachelors in Engineering | Stnd - Bachelors in Engineering & Mathematics | Sr - Masters in Engineering & Mathematics");
	changeText("jobQualificationJobExp", "Work experience: Appr - None | Stnd - 3 yrs Appr Engineer | Sr - 5 yrs Stnd Engineer");
	changeText("jobQualificationPay", "Pay: Appr - $90,000 /yr | Stnd - $110,000 /yr | Sr - $140,000 /yr");
	changeText("jobExtra", "Extras: Clean criminal record");
	changeText("jobBonus", "Bonuses: None");
	console.log("successfully updated job qualifications")
} else if (Job === "ffw-select") {
	jobIcon("assets/chef-hat.svg");   
	careerBranch(1, "assets/jobs/cashier.png");
	careerBranch(2, "assets/jobs/cook.png");
	careerBranch(3, "assets/jobs/branch-manager.png");
	removeBranch(4);
	removeBranch(5);
	removeBranch(6);
	changeText("jobOpportunityName", "Fast Food Worker");
	changeText("jobQualificationAge", "Age: Cashier - 16 | Cook - 16 | Mngr - 21");
	changeText("jobQualificationEducation", "Education: Cashier - None | Cook - None | Mngr - High School");
	changeText("jobQualificationJobExp", "Work experience: Cashier - None | Cook - None | Mngr - 3 yrs Cashier OR Cook");
	changeText("jobQualificationPay", "Pay: Cashier - $30,000 /yr | Cook - $40,000 /yr | Mngr - $70,000 /yr");
	changeText("jobExtra", "Extras: Cashier - Charisma >= 60 | Cook - Skill Cooking >= 60 | Mngr - Skill Management >= 70");
	changeText("jobBonus", "Bonuses: None");
	console.log("successfully updated job qualifications")
} else if (Job === "scientist-select") {
	jobIcon("assets/atom.svg");   
	careerBranch(1, "assets/jobs/chemist.png");
	careerBranch(2, "assets/jobs/physicist.png");
	careerBranch(3, "assets/jobs/biologist.png");
	careerBranch(4, "assets/jobs/chemical-engineer.png");
	careerBranch(5, "assets/jobs/particle-physicist.png");
	careerBranch(6, "assets/jobs/biochemist.png");
	changeText("jobOpportunityName", "Scientist");
	changeText("jobQualificationAge", "Age: 21");
	changeText("jobQualificationEducation", "Education: Chemist - Bachelors in Chemistry | Physicist - Bachelors in Physics | Biologist - Bachelors in Biology | ChemEngineer - Bachelors in Mathematics & Masters in Chemistry | ParPhysicist - Masters in Physics & Bachelors in Engineering | BioChemist - Masters in Biology & Chemistry");
	changeText("jobQualificationJobExp", "Work experience: Chemist - None | Physicist - None | Biologist - None | ChemEngineer - 5 yrs Chemist | ParPhysicist - 5 yrs Physicist | BioChemist - 4 yrs Biologist & 4 yrs Chemist");
	changeText("jobQualificationPay", "Pay: Chemist - $100,000 /yr | Physicist - $110,000 /yr | Biologist - $120,000 /yr | ChemEngineer - $160,000 /yr | ParPhysicist - $160,000 /yr | BioChemist - $190,000 /yr");
	changeText("jobExtra", "Extras: Chemist - Skill Chemistry >= 60 | Physicist - Skill Physics >= 60 | Biologist - Skill Biology >= 60 | ChemEngineer - Skill Chemistry >= 80 & Skill Engineering >= 60 | ParPhysics - Skill Physics >= 90 | BioChemist - Skill Biology >= 80 & Skill Chemistry >= 80");
	changeText("jobBonus", "Bonuses: None");
	console.log("successfully updated job qualifications")
};

localStorage.setItem("Logs", Logs);

if (document.getElementById("career-branch-1") != null) {
document.getElementById("career-branch-1").addEventListener("click", function() { //if the player clicks on the first button (career-branch-1)//
	if (Job === "int-designer-select" && Degree.includes("highSchool") && Age >= 18 && CriminalRecord.length === 0) { //and they meet the qualifications//
		revent = "job-appr-int-designer-accepted"; //they get the job//
		console.log("successfully applied for job as apprentice interior designer");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html"; //redirects player to the events page//
	} else if (Job === "int-designer-select" && (!Degree.includes("highSchool") || Age < 18 || CriminalRecord.length != 0)) { //but if they don't meet the qualifications//
		revent = "job-appr-int-designer-rejected"; //they don't get the job//
		console.log("did not successfully apply for job. reason: unqualified");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	}
	if (Job === "engineer-select" && Degree.includes("bachelors-engineering") && Age >= 18 && CriminalRecord.length === 0) {
		revent = "job-appr-engineer-accepted"; //they get the job//
		console.log("successfully applied for job as apprentice engineer");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html"; //redirects player to the events page//
	} else if (Job === "engineer-select" && (!Degree.includes("bachelors-engineering") || Age < 18 || CriminalRecord.length != 0)) {
		revent = "job-appr-engineer-rejected"; //they don't get the job//
		console.log("did not successfully apply for job. reason: unqualified");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	}
	if (Job === "ffw-select" && Age >= 16 && Charisma >= 60) {
		revent = "job-ffw-cashier-accepted"; //they get the job//
		console.log("successfully applied for job as cashier");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html"; //redirects player to the events page//
	} else if (Job === "ffw-select" && (Age < 16 || Charisma < 60)) {
		revent = "job-ffw-cashier-rejected"; //they don't get the job//
		console.log("did not successfully apply for job. reason: unqualified");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	}
	if (Job === "scientist-select" && Age >= 21 && SkillChemistry >= 60 && Degree.includes("bachelors-chemistry")) {
		revent = "job-chemistry-accepted"; //they get the job//
		console.log("successfully applied for job as chemist");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html"; //redirects player to the events page//
	} else if (Job === "scientist-select" && (Age < 21 || SkillChemistry < 60 || !Degree.includes("bachelors-chemistry"))) {
		revent = "job-chemist-rejected"; //they don't get the job//
		console.log("did not successfully apply for job. reason: unqualified");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	}
});}

if (document.getElementById("career-branch-2") != null) {
document.getElementById("career-branch-2").addEventListener("click", function() {
	if (Job === "int-designer-select" && Degree.includes("highSchool") && Age >= 20 && CriminalRecord.length === 0) {
		revent = "job-int-designer-accepted";
		console.log("successfully applied for job as standard interior designer");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	} else if (Job === "int-designer-select" && (!Degree.includes("highSchool") || Age < 20 || CriminalRecord.length != 0)) {
		revent = "job-int-designer-rejected";
		console.log("did not successfully apply for job. reason: unqualified");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	}
	if (Job === "engineer-select" && Degree.includes("bachelors-engineering") && Degree.includes("bachelors-mathematics") && Age >= 24 && workExpCalculator("appr-engineer") >= 3 && CriminalRecord.length === 0) {
		revent = "job-engineer-accepted"; //they get the job//
		console.log("successfully applied for job as apprentice engineer");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html"; //redirects player to the events page//
	} else if (Job === "engineer-select" && (!Degree.includes("bachelors-engineering") || !Degree.includes("bachelors-mathematics") || Age < 24 || workExpCalculator("appr-engineer") < 3 || CriminalRecord.length != 0)) {
		revent = "job-engineer-rejected"; //they don't get the job//
		console.log("did not successfully apply for job. reason: unqualified");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	}
	if (Job === "ffw-select" && Age >= 16 && Skills[SkillsAre.indexOf("Cooking")] >= 60) {
		revent = "job-ffw-cook-accepted"; //they get the job//
		console.log("successfully applied for job as cook");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html"; //redirects player to the events page//
	} else if (Job === "ffw-select" && (Age < 16 || Skills[SkillsAre.indexOf("Cooking")] < 60)) {
		revent = "job-ffw-cook-rejected"; //they don't get the job//
		console.log("did not successfully apply for job. reason: unqualified");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	}
	if (Job === "scientist-select" && Age >= 21 && SkillPhysics >= 60 && Degree.includes("bachelors-physics")) {
		revent = "job-physicist-accepted"; //they get the job//
		console.log("successfully applied for job as physicist");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html"; //redirects player to the events page//
	} else if (Job === "scientist-select" && (Age < 21 || SkillPhysics < 60 || !Degree.includes("bachelors-physics"))) {
		revent = "job-physicist-rejected"; //they don't get the job//
		console.log("did not successfully apply for job. reason: unqualified");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	}
});}

if (document.getElementById("career-branch-3") != null) {
document.getElementById("career-branch-3").addEventListener("click", function() {
	if (Job === "int-designer-select" && Degree.includes("masters-int-design") && workExpCalculator("int-designer") >= 4 && CriminalRecord.length === 0) {
		revent = "job-sr-int-designer-accepted";
		console.log("successfully applied for job as standard interior designer");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	} else if (Job === "int-designer-select" && (!Degree.includes("masters-int-design") || workExpCalculator("int-designer") < 4 || CriminalRecord.length != 0)) {
		revent = "job-sr-int-designer-rejected";
		console.log("did not successfully apply for job. reason: unqualified");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	}
	if (Job === "engineer-select" && Degree.includes("masters-engineering") && Degree.includes("masters-mathematics") && workExpCalculator("engineer") >= 5 && Age >= 26 && CriminalRecord.length === 0) {
		revent = "job-sr-engineer-accepted"; //they get the job//
		console.log("successfully applied for job as apprentice engineer");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html"; //redirects player to the events page//
	} else if (Job === "engineer-select" && (!Degree.includes("masters-engineering") || !Degree.includes("masters-mathematics")|| workExpCalculator("engineer") < 5 || Age < 26 || CriminalRecord.length != 0)) {
		revent = "job-sr-engineer-rejected"; //they don't get the job//
		console.log("did not successfully apply for job. reason: unqualified");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	}
	if (Job === "ffw-select" && Age >= 21 && SkillManagement >= 70) {
		revent = "job-ffw-manager-accepted"; //they get the job//
		console.log("successfully applied for job as branch manager");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html"; //redirects player to the events page//
	} else if (Job === "ffw-select" && (Age < 21 || SkillManagement < 70)) {
		revent = "job-ffw-manager-rejected"; //they don't get the job//
		console.log("did not successfully apply for job. reason: unqualified");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	}
	if (Job === "scientist-select" && Age >= 21 && SkillBiology >= 60 && Degree.includes("bachelors-biology")) {
		revent = "job-biologist-accepted"; //they get the job//
		console.log("successfully applied for job as biologist");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html"; //redirects player to the events page//
	} else if (Job === "scientist-select" && (Age < 21 || SkillBiology < 60 || !Degree.includes("bachelors-biology"))) {
		revent = "job-biologist-rejected"; //they don't get the job//
		console.log("did not successfully apply for job. reason: unqualified");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	}
});}

if (document.getElementById("career-branch-4") != null) {
document.getElementById("career-branch-4").addEventListener("click", function() {
	if (Job === "scientist-select" && Age >= 21 && SkillChemistry >= 80 && SkillEngineering >= 60 && workExpCalculator("chemist") >= 5 && Degree.includes("bachelors-mathematics") && Degree.includes("masters-chemistry")) {
		revent = "job-chemical-engineer-accepted"; //they get the job//
		console.log("successfully applied for job as chemical engineer");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html"; //redirects player to the events page//
	} else if (Job === "scientist-select" && (Age < 21 || SkillChemisty < 80 || SkillEngineering < 60 || workExpCalculator("chemist") < 5 || !Degree.includes("bachelors-mathematics") || !Degree.includes("masters-chemistry"))) {
		revent = "job-chemical-engineer-rejected"; //they don't get the job//
		console.log("did not successfully apply for job. reason: unqualified");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	}
});}

if (document.getElementById("career-branch-5") != null) {
document.getElementById("career-branch-5").addEventListener("click", function() {
	if (Job === "scientist-select" && Age >= 21 && SkillPhysics >= 90 && workExpCalculator("physicist") >= 5 && Degree.includes("masters-physics") && Degree.includes("bachelors-engineering")) {
		revent = "job-particle-physicist-accepted"; //they get the job//
		console.log("successfully applied for job as biologist");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html"; //redirects player to the events page//
	} else if (Job === "scientist-select" && (Age < 21 || SkillPhysics < 90 || workExpCalculator("physicist") < 5 || !Degree.includes("masters-physics") || !Degree.includes("bachelors-engineering"))) {
		revent = "job-particle-physicist-rejected"; //they don't get the job//
		console.log("did not successfully apply for job. reason: unqualified");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	}
});}

if (document.getElementById("career-branch-6") != null) {
document.getElementById("career-branch-6").addEventListener("click", function() {
	if (Job === "scientist-select" && Age >= 21 && SkillBiology >= 80 && SkillChemistry >= 80 && workExpCalculator("biologist") >= 4 && workExpCalculator("chemist") >= 4 && Degree.includes("masters-biology") && Degree.includes("masters-chemistry")) {
		revent = "job-biochemist-accepted"; //they get the job//
		console.log("successfully applied for job as biochemist");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html"; //redirects player to the events page//
	} else if (Job === "scientist-select" && (Age < 21 || SkillBiology < 80 || SkillChemistry < 80 || workExpCalculator("biologist") < 4 || workExpCalculator("chemist") < 4 || !Degree.includes("masters-biology") || !Degree.includes("masters-chemistry"))) {
		revent = "job-biochemist-rejected"; //they don't get the job//
		console.log("did not successfully apply for job. reason: unqualified");
		localStorage.setItem("revent", revent);
		window.location.href = "./event.html";
	}
});}