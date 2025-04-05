//Author(s): Ethan Scott//

function careerBranchHover(num) {
	return document.getElementById("career-branch-"+num);
}

changeText("jobQualificationAge", "Hover over a branch to see its qualifications.");
changeText("jobQualificationEducation", "");
changeText("jobQualificationJobExp", "");
changeText("jobQualificationPay", "");
changeText("jobExtra", "");
changeText("jobBonus", "");

careerBranchHover(1).addEventListener("mouseover", (event) => {
	changeText("jobQualificationAge", "Age: 18");
	changeText("jobQualificationEducation", "Education: High School");
	changeText("jobQualificationJobExp", "Work experience: None");
	changeText("jobQualificationPay", "Pay: $45,000 /yr");
	changeText("jobExtra", "Extras: Clean criminal record");
	changeText("jobBonus", "Bonuses: None");
});
careerBranchHover(2).addEventListener("mouseover", (event) => {
	changeText("jobQualificationAge", "Age: 18");
	changeText("jobQualificationEducation", "Education: Bachelors in Interior Design");
	changeText("jobQualificationJobExp", "Work experience: None");
	changeText("jobQualificationPay", "Pay: $60,000 /yr");
	changeText("jobExtra", "Extras: Clean criminal record");
	changeText("jobBonus", "Bonuses: None");
});
careerBranchHover(3).addEventListener("mouseover", (event) => {
	changeText("jobQualificationAge", "Age: 24");
	changeText("jobQualificationEducation", "Education: Masters in Interior Design");
	changeText("jobQualificationJobExp", "Work experience: 4 yrs Stnd Interior Designer");
	changeText("jobQualificationPay", "Pay: $90,000 /yr");
	changeText("jobExtra", "Extras: Clean criminal record");
	changeText("jobBonus", "Bonuses: None");
});