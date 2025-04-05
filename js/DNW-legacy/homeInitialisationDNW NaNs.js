//Author(s): Ethan Scott//

//family ager is rife with NaNs//

function getRandomIntInclusive(min, max) { //function to grab random integers//
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomFamilyGetter() { //this took so long oh help me god have mercy//
	let noOfRelatives = getRandomIntInclusive(1, 7); //can have from 1 to 7 family members//
	let whatRelative = ["Mother", "Father", "Brother", "Sister", "Cousin", "Uncle", "Aunt", "Grandfather", "Grandmother"];
	PersonRoles.push(whatRelative[getRandomIntInclusive(0, 1)]);
	noOfRelatives -= 1;
	if (noOfRelatives > 0) {
		if (getRandomIntInclusive(1, 6) != 1) {
			PersonRoles.push(whatRelative[getRandomIntInclusive(0, 1)]);
			noOfRelatives -= 1;
		}  
	}
	while (noOfRelatives > 0) {
		PersonRoles.push(whatRelative[getRandomIntInclusive(2, 8)]);
		noOfRelatives -= 1;
	}
	if (PersonRoles.includes("Cousin") && (!PersonRoles.includes("Aunt") || !PersonRoles.includes("Uncle"))) {
			PersonRoles.push(whatRelative[getRandomIntInclusive(5,6)]); //pushes either an aunt or an uncle//
	}
	if ((PersonRoles.includes("Aunt") || PersonRoles.includes("Uncle")) && (!PersonRoles.includes("Grandmother") || !PersonRoles.includes("Grandfather"))) {
		PersonRoles.push(whatRelative[getRandomIntInclusive(5,6)]); //pushes either an aunt or an uncle//
	}
	//family namer//
	let familyAge = [];
	for (let i = 0; i < PersonRoles.length; i++) { //does the rest. sets the ages, names, etc etc.//
			if (getRandomIntInclusive(1, 500) === 1) { //rare names are 1 in 500. so getting one of the six names is a 1 in 3,000 chance//
				PersonNames.push(RareNames[getRandomIntInclusive(0, 5)]); //rare names are full names, so there's no need to add a last name//
			} else {
				if (getRandomIntInclusive(1, 3) === 1) { //if parents are married and share a last name (1 in 3 chance)//
					let sharedLN = LastNames[getRandomIntInclusive(0, 56)]; //shared last name//
					if (whatRelative[i] === "Mother" || whatRelative[i] === "Father" || whatRelative[i] === "Brother" || whatRelative[i] === "Sister") {
						PersonNames.push(FirstNames[getRandomIntInclusive(0, 69)] + " " + sharedLN); //gets first name and last name. -1 is just so it gets the 0-based index properly while still being more readable at a glance as code. 1st name to the 70th name.//
					} else {
						PersonNames.push(FirstNames[getRandomIntInclusive(0, 69)] + " " + LastNames[getRandomIntInclusive(1, 57) - 1]);
					}
				} else {
					PersonNames.push(FirstNames[getRandomIntInclusive(1, 70) - 1] + " " + LastNames[getRandomIntInclusive(1, 57) - 1]);
				}
			}
}
//sexer//
for (let i = 0; i < PersonRoles.length; i++) {
	if (PersonRoles[i] === "Mother" || PersonRoles[i] === "Sister" || PersonRoles[i] === "Aunt" || PersonRoles[i] === "Grandmother") {
		PersonSexes.push("F");
	} else if (PersonRoles[i] === "Father" || PersonRoles[i] === "Brother" || PersonRoles[i] === "Uncle" || PersonRoles[i] === "Grandfather") {
		PersonSexes.push("M");
	} else if (PersonRoles[i] === "Cousin") {
		if (getRandomIntInclusive(1, 2) === 1) {
			PersonSexes.push("M");
		} else {
			PersonSexes.push("F");
		}
	}
	//ager//
	let thenumber = "";
	if (PersonRoles[i] === "Mother") {
		PersonAges.push(getRandomIntInclusive(16, 45));
	} else if (PersonRoles[i] === "Father") {
		PersonAges.push(getRandomIntInclusive(16, 70));
	} else if (PersonRoles[i] === "Brother" || PersonRoles[i] === "Sister") {
		if (PersonRoles.includes("Mother")) {
			thenumber = PersonAges[PersonRoles.indexOf("Mother")];
		} else { 
			thenumber = PersonAges[PersonRoles.indexOf("Father")];
		}
		PersonAges.push(Math.round(getRandomIntInclusive(0, thenumber - 16))); //getRandomINTinclusive already returns an integer but I realised that way too late so just go along with it//
	} else if (PersonRoles[i] === "Grandmother" || PersonRoles[i] === "Grandfather") {
		if (PersonRoles.includes("Mother")) {
				thenumber = PersonAges[PersonRoles.indexOf("Mother")]+16
			} else {
				thenumber = PersonAges[PersonRoles.indexOf("Father")]+16
			}
			PersonAges.push(Math.round(getRandomIntInclusive(thenumber, 80))); //also there's no way it wouldn't return an integer anyway even if it didn't already round it since age is always an integer and so is... 16//
	} else if (PersonRoles[i] === "Aunt" || PersonRoles[i] === "Uncle") {
		if (PersonRoles.includes("Grandmother") || PersonRoles.includes("Grandfather")) {
			if (PersonRoles.includes("Grandmother")) {
				thenumber = PersonAges[PersonRoles.indexOf("Grandmother")];
			} else if (PersonRoles.includes("Grandfather")) {
				thenumber = PersonAges[PersonRoles.indexOf("Grandfather")];
			}
			PersonAges.push(Math.round(getRandomIntInclusive(0, thenumber - 16)));
		} else {
			if (PersonRoles.includes("Mother")) {
				thenumber = PersonAges[PersonRoles.indexOf("Mother")];
			} else if (PersonRoles.includes("Father")) {
				thenumber = PersonAges[PersonRoles.indexOf("Father")];
			} else {
				thenumber = 30;
			}
			PersonAges.push(Math.round(getRandomIntInclusive(thenumber - 10, thenumber + 10)));
		}
	} else if (PersonRoles[i] === "Cousin") {
		if (PersonRoles.includes("Aunt")) {
			thenumber = PersonAges[PersonRoles.indexOf("Aunt")];
		} else if (PersonRoles.includes("Uncle")) {
			thenumber = PersonAges[PersonRoles.indexOf("Uncle")];
		} else if (PersonRoles.includes("Mother")) {
			thenumber = PersonAges[PersonRoles.indexOf("Mother")];
		} else if (PersonRoles.includes("Father")){
			thenumber = PersonAges[PersonRoles.indexOf("Father")];
		} else {
			thenumber = getRandomIntInclusive(20, 40);
		}
		PersonAges.push(Math.round(getRandomIntInclusive(0, thenumber - 16)));
	}
	//min and max//
	if (PersonAges[i] < 0) {
		PersonAges[i] = 0;
	} else if (PersonAges[i] > 80) {
		PersonAges[i] = 80;
	}
}
}

//to add a new variable, duplicate each of these functions and change the variable name. to change the default value, just change the number it defaults to below (do not change Age)//

//initialises variables for a new game//
    let Age = 0;
	let Joy = getRandomIntInclusive(25, 75);
	let Health = getRandomIntInclusive(25, 75);
	let Intellect = getRandomIntInclusive(20, 80);
	let Looks = getRandomIntInclusive(20, 80);
	let Money = 0;
	let Karma = 50;
	let rnumber = 0;
	let rfunction = "";
	let revent = "";
	let reventSub = []; //revents that go before the main revents. e.g. you get 
	let Logs = "";
    localStorage.setItem("Age", Age);
    localStorage.setItem("Joy", Joy);
    localStorage.setItem("Health", Health);
    localStorage.setItem("Intellect", Intellect);
    localStorage.setItem("Looks", Looks);
    localStorage.setItem("Karma", Karma);
    localStorage.setItem("Money", Money);
	localStorage.setItem("rnumber", rnumber);
	localStorage.setItem("rfunction", rfunction);
	localStorage.setItem("revent", revent);
	localStorage.setItem("reventSub", JSON.stringify(reventSub));
    localStorage.setItem("Logs", Logs);
	
//hidden variables//
	let Evality = 0; //the degree to which one is evil. different from karma in the sense that Evality is how much Joy you derive from the pain of others, showing a disregard for other people's safety and happiness.//
	let Complacency = getRandomIntInclusive(0, 90); //how stubborn the player is. Has the potenial damage relationships, but can lead to much higher degrees of success in fields such as business//
	let Charisma = getRandomIntInclusive(0, 90); //high charisma is generally something you want. it leads to greater success with relationships and also career, but high charisma can lead to Joy loss when doing something morally wrong. On the other hand, low charisma can lead to greater success with violent, antisocial crimes, such as murder.//
	let Discipline = getRandomIntInclusive(0, 90); //discipline helps to gain skills quicker//
	let Creativity = getRandomIntInclusive(0, 90); //creativity helps in creative jobs and hobbies//
	localStorage.setItem("Evality", Evality);
	localStorage.setItem("Complacency", Complacency);
	localStorage.setItem("Charisma", Charisma);
	localStorage.setItem("Discipline", Discipline);
	localStorage.setItem("Creativity", Creativity);
	
//obscure variables//
	let redirect = "";
	let orgRelationship = ["Police", 50, "Poison Control", 100, "Neighbourhood", 50, "Celebrities", 0]; //relationship with organisations. has default values. numbers to the right of the organisation name are the relationship with said organisation.//
	let Occupation = []; //different from Job. Not the player's career, but what they are otherwise occupied with, be it prison, vacation, human experimentation, et cetera.//
	let Crimes = [];
	let CriminalRecord = [];
	localStorage.setItem("redirect", redirect);
	localStorage.setItem("orgRelationship", JSON.stringify(orgRelationship));
	localStorage.setItem("Occupation", Occupation);
	localStorage.setItem("Crimes", Crimes);
	localStorage.setItem("CriminalRecord", CriminalRecord);
	
//achievement values//
	let Achievements = localStorage.getItem("Achievements");
	let AchRead = localStorage.getItem("AchRead");
	let Stars = localStorage.getItem("Stars");
	let DNA = localStorage.getItem("DNA");

	if (Achievements === null) { //checks if Achievements exists//
		Achievements = [];
		localStorage.setItem("Achievements", JSON.stringify(Achievements)); //JSON stringify it because arrays can only be stored in localstorage as strings for some reason. why. WHY. W H Y//
	} else {
		Achievements = JSON.parse(Achievements); //parse back to an array//
	}
	if (AchRead === null) { //checks if AchRead exists//
		AchRead = [];
		localStorage.setItem("AchRead", JSON.stringify(AchRead));
	} else {
		AchRead = JSON.parse(AchRead); //parse back to an array//
	}
	if (Stars === null) { //checks if Stars exists//
		Stars = 0;
		localStorage.setItem("Stars", Stars);
	} else {
		Stars = parseInt(Stars, 10); //parse back to a number//
	}
	if (DNA === null) { //checks if DNA exists//
		DNA = 0;
		localStorage.setItem("DNA", DNA);
	} else {
		DNA = parseInt(DNA, 10); //parse back to a number//
	}
	
//relationship values//
	//70 unique first names, 57 unique last names, and 6 unique rare names, so 3,996 full names in total//
	let FirstNames = ["Robert", "Aardvark", "Elizabeth", "Kevin", "Barbonious", "Joe", "John", "Mike", "Jesse", "Jaquavius", "Throquemorton", "Gertrude", "Beanus", "Scott", "Quinn", "Lupus", "Gregory", "Alex", "Lettuce", "Jack", "Miguel", "Monty", "Nathaniel", "Samantha", "Jacqui", "Helen", "Jaxon", "Jason", "Robert", "Charlotte", "Sarah", "Amanda", "Nerd", "Archibald", "Eloise", "Celia", "Cecilia", "Jude", "Cecil", "Felix", "Red", "Hazel", "Violet", "Rose", "Jasmine", "Scent", "Wilfred", "Will", "Persephone", "Stephanie", "Stephan", "Spehano", "Harry", "Laruen", "Amber", "Ampersand", "Bob", "Cook", "Junior", "John. F.", "Ted", "Nicholas", "Seth", "Robyn", "Drew", "Obama", "Dwayne", "Luigi", "Angel", "Biff"];
	let LastNames = ["Esquire Jr.", "Aardvarsk", "Kevins", "Smith", "Michael", "Sweat", "House", "Jaundice", "Lithuania", "White", "Jar", "Isable", "Scott", "Robertson", "Baker", "Barkson", "Lard", "Waterman", "Fat", "Pheromone", "Smart", "Samuel", "Green", "Swanson", "French", "Pu", "Doyle", "Mat", "Winklestein", "Wood", "Fieldson", "Thomas", "Heath", "Egg", "Salad", "Kennedy", "Bundy", "Mosby", "Johnston", "Nickels", "Brown", "Lips", "Roberts", "Lint", "Stinson", "Pearson", "Valentine", "Robinette Biden Jr.", "Moist", "Murdoch", "Lorne", "Pharmacist", "President", "French", "Ball", "Lemon", "Carbohydrate"];
	let RareNames = ["Rob Ery", "Guy Man", "Tinky Tonk Shank", "Marl", "Paul Salad", "™️"];

	let PersonNames = []; //the rest of the values are found by looking up the index (what position in the array the value is, starting from 0) of the NPC's name and grabbing the value at such index from the other arrays//
	let PersonRoles = [];
	let PersonRelationships = []; //how close you are with the person, ranging from -100 to 100//
	let PersonAges = [];
	let PersonSexes = [];
	let PersonTrait1 = [];
	let PersonTrait2 = [];
	let DeadPeople = [];
	let DeadPeopleRoleAtDeath = [];
	let DeadPeopleAgeAtDeath = [];
	let DiedRecently = [];
	let SocialBattery = 100;
	let relationshipIDSelected = 0; //this is just for the engine. it means nothing.//

	randomFamilyGetter();
	console.log(PersonNames);
	console.log(PersonRoles);
	console.log(PersonSexes);
	console.log("Person Ages:");
	console.log(PersonAges);
	console.log("Person Relationships:");
	console.log(PersonRelationships);

	localStorage.setItem("PersonNames", JSON.stringify(PersonNames));
	localStorage.setItem("PersonRoles", JSON.stringify(PersonRoles));
	localStorage.setItem("PersonRelationships", JSON.stringify(PersonRelationships));
	localStorage.setItem("PersonAges", JSON.stringify(PersonAges));
	localStorage.setItem("PersonSexes", JSON.stringify(PersonSexes));
	localStorage.setItem("PersonTrait1", JSON.stringify(PersonTrait1));
	localStorage.setItem("PersonTrait2", JSON.stringify(PersonTrait2));
	localStorage.setItem("DeadPeople", JSON.stringify(DeadPeople));
	localStorage.setItem("DeadPeopleRoleAtDeath", JSON.stringify(DeadPeopleRoleAtDeath));
	localStorage.setItem("DeadPeopleAgeAtDeath", JSON.stringify(DeadPeopleAgeAtDeath));
	localStorage.setItem("DiedRecently", JSON.stringify(DiedRecently));
	localStorage.setItem("SocialBattery", SocialBattery);
	localStorage.setItem("relationshipIDSelected", relationshipIDSelected);

//skill trees (there's a lot)//
	let SkillMathematics = 0;
	let SkillEnglish = 0;
	let SkillPhysics = 0;
	let SkillBiology = 0;
	let SkillChemistry = 0;
	let SkillFineMotor = 0;
	let SkillEngineering = 0;
	let SkillFitness = 0;
	let SkillProfessionalism = 0;
	let SkillCreativeWriting = 0;
	let SkillAnalyticalWriting = 0;
	let SkillFilmMaking = 0;
	let SkillPhotography = 0;
	let SkillSpeech = 0;
	let SkillStorytelling = 0;
	let SkillComposition = 0;
	let SkillInstrumentalism = 0;
	let SkillSinging = 0;
	let SkillManagement = 0;
	let SkillEmotionalExpression = 0;
	let SkillPersuasion = 0;
	let SkillCooking = 0;
	let SkillStrength = 0;
	localStorage.setItem("SkillMathematics", SkillMathematics);
	localStorage.setItem("SkillEnglish", SkillEnglish);
	localStorage.setItem("SkillPhysics", SkillPhysics);
	localStorage.setItem("SkillBiology", SkillBiology);
	localStorage.setItem("SkillChemistry", SkillChemistry);
	localStorage.setItem("SkillFineMotor", SkillFineMotor);
	localStorage.setItem("SkillFitness", SkillFitness);
	localStorage.setItem("SkillProfessionalism", SkillProfessionalism);
	localStorage.setItem("SkillCreativeWriting", SkillCreativeWriting);
	localStorage.setItem("SkillFilmMaking", SkillFilmMaking);
	localStorage.setItem("SkillPhotography", SkillSpeech);
	localStorage.setItem("SkillSpeech", SkillSpeech);
	localStorage.setItem("SkillStorytelling", SkillStorytelling);
	localStorage.setItem("SkillComposition", SkillComposition);
	localStorage.setItem("SkillInstrumentalism", SkillInstrumentalism);
	localStorage.setItem("SkillSinging", SkillSinging);
	localStorage.setItem("SkillManagement", SkillManagement);
	localStorage.setItem("SkillEmotionalExpression", SkillEmotionalExpression);
	localStorage.setItem("SkillPersuasion", SkillPersuasion);
	localStorage.setItem("SkillCooking", SkillCooking);
	localStorage.setItem("SkillStrength", SkillStrength);

//career variables//
	let hasJob = false;
	let Job = "";
	let PartTimeJob = "";
	let SpecialCareer = "";
	let JobPerformance = 0;
	let PartTimePerformance = 0;
	let SpecialPerformance = 0;
	let Salary = 0;
	let Degree = [];
	let workExperience = [];
	let InsuranceWJob = [];
	let InsurancePaidFor = [];
	localStorage.setItem("hasJob", false);
	localStorage.setItem("Job", Job);
	localStorage.setItem("PartTimeJob", PartTimeJob);
	localStorage.setItem("SpecialCareer", SpecialCareer);
	localStorage.setItem("JobPerformance", JobPerformance);
	localStorage.setItem("PartTimePerformance", PartTimePerformance);
	localStorage.setItem("SpecialPerformance", SpecialPerformance);
	localStorage.setItem("Salary", Salary);
	localStorage.setItem("Degree", JSON.stringify(Degree));
	localStorage.setItem("workExperience", JSON.stringify(workExperience));
	localStorage.setItem("InsurancePaidFor", JSON.stringify(InsurancePaidFor));

//console//
	console.log("new variables set.");
	console.log("new game successfuly set up.");

	document.getElementById("link").href = "./home.html";