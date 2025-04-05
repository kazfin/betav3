//Author(s): Ethan Scott//

function getRandomIntInclusive(min, max) { //function to grab random integers//
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let lookforFamilyAge = 0;
function lookforFamily(who, why) {
	if (why === "Age") {
	for (let x = 0; x < PersonRoles.length; x++) {
		if (PersonRoles[x] === who) {
			lookforFamilyAge = PersonAges[x];
			return true;
		}
	}
	lookforFamilyAge = 16;
	return false;
	} else if (why === "Where") {
		for (let x = 0; x < PersonRoles.length; x++) {
			if (PersonRoles[x] === who) {
				return x + 1;
			}
		}
		return false;
	}
}

function randomFamilyGetter() { //this took so long so help me god have mercy//
	let noOfRelatives = getRandomIntInclusive(1, 5); //can have from 1 to 5 family members//
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
	let where = "";
	if (PersonRoles.includes("Cousin") && (!PersonRoles.includes("Aunt") && !PersonRoles.includes("Uncle"))) {
		where = lookforFamily("Cousin", "Where");
		if (getRandomIntInclusive(1, 2) === 1) { //pushes either an aunt or an uncle//
			PersonRoles.splice(where - 1, 0, "Aunt");
			PersonRoles.splice(where - 2, 0, "Grandfather");
		} else {
			PersonRoles.splice(where - 1, 0, "Uncle");
			PersonRoles.splice(where - 2, 0, "Grandmother");
		}
	}
	if ((PersonRoles.includes("Aunt") || PersonRoles.includes("Uncle")) && (!PersonRoles.includes("Grandmother") && !PersonRoles.includes("Grandfather"))) {
		if (PersonRoles.includes("Aunt")) {
			where = lookforFamily("Aunt", "Where");
			if (getRandomIntInclusive(1,2) === 1) {
				PersonRoles.splice(where - 1, 0, "Grandmother");
			} else {
				PersonRoles.splice(where - 1, 0, "Grandfather");
			}
		} else if (PersonRoles.includes("Uncle")) {
			where = lookforFamily("Uncle", "Where");
			if (getRandomIntInclusive(1,2) === 1) {
				PersonRoles.splice(where - 1, 0, "Grandmother");
			} else {
				PersonRoles.splice(where - 1, 0, "Grandfather");
			}
		}
	}
	if (PersonRoles.includes("Grandmother") && (PersonRoles.includes("Aunt") || PersonRoles.includes("Uncle"))) {
		if (PersonRoles.includes("Uncle")) {
			if (lookforFamily("Uncle", "Where") > lookforFamily("Grandmother", "Where")) {
				PersonRoles.splice(lookforFamily("Uncle", "Where"), 1);
				where = lookforFamily("Grandmother", "Where");
				PersonRoles.splice(where + 1, 0, "Uncle");
			}
		}
		if (PersonRoles.includes("Aunt")) {
			if (lookforFamily("Aunt", "Where") > lookforFamily("Grandmother", "Where")) {
				PersonRoles.splice(lookforFamily("Aunt", "Where"), 1);
				where = lookforFamily("Grandmother", "Where");
				PersonRoles.splice(where + 1, 0, "Aunt");
			}
		}
	}
	if (PersonRoles.includes("Grandfather") && (PersonRoles.includes("Aunt") || PersonRoles.includes("Uncle"))) {
		if (PersonRoles.includes("Uncle")) {
			if (lookforFamily("Uncle", "Where") > lookforFamily("Grandfather", "Where")) {
				PersonRoles.splice(lookforFamily("Uncle", "Where"), 1);
				where = lookforFamily("Grandfather", "Where");
				PersonRoles.splice(where + 1, 0, "Uncle");
			}
		}
		if (PersonRoles.includes("Aunt")) {
			if (lookforFamily("Aunt", "Where") > lookforFamily("Grandfather", "Where")) {
				PersonRoles.splice(lookforFamily("Aunt", "Where"), 1);
				where = lookforFamily("Grandfather", "Where");
				PersonRoles.splice(where + 1, 0, "Aunt");
			}
		}
	}
	//family namer//
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
	if (PersonRoles[i] === "Mother") {
		PersonAges.push(getRandomIntInclusive(16, 45));
	} else if (PersonRoles[i] === "Father") {
		PersonAges.push(getRandomIntInclusive(16, 60));
	} else if (PersonRoles[i] === "Grandmother" || PersonRoles[i] === "Grandfather") {
		if (lookforFamily("Mother", "Age") === true) {
			PersonAges.push(getRandomIntInclusive(lookforFamilyAge + 16, 80));
		} else if (lookforFamily("Father", "Age") === true) {
			PersonAges.push(getRandomIntInclusive(lookforFamilyAge + 16, 80));
		}
	} else if (PersonRoles[i] === "Brother" || PersonRoles[i] === "Sister") {
		if (lookforFamily("Mother", "Age") === true) {
			PersonAges.push(getRandomIntInclusive(0, lookforFamilyAge - 16));
		} else if (lookforFamily("Father", "Age") === true) {
			PersonAges.push(getRandomIntInclusive(0, lookforFamilyAge - 16));
		}
	} else if (PersonRoles[i] === "Uncle" || PersonRoles[i] === "Aunt") {
		if (lookforFamily("Grandmother", "Age") === true) {
			PersonAges.push(getRandomIntInclusive(16, lookforFamilyAge - 16));
		} else if (lookforFamily("Grandfather", "Age") === true) {
			PersonAges.push(getRandomIntInclusive(16, lookforFamilyAge - 16));
		}
	} else if (PersonRoles[i] === "Cousin") {
		if (lookforFamily("Uncle", "Age") === true) {
			PersonAges.push(getRandomIntInclusive(0, lookforFamilyAge - 16));
		} else if (lookforFamily("Aunt", "Age") === true) {
			PersonAges.push(getRandomIntInclusive(0, lookforFamilyAge - 16));
		}
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
	let Skills = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	let SkillsAre = ["Language", "Logic", "Memory", "Wit", "Expression", "Fitness", "Professionalism", "Humour", "Storytelling", "Cinematography", "Leadership", "Music", "Analytics", "CriticalThought", "VisualSpatial", "Interpersonal", "Intrapersonal"];
	localStorage.setItem("Skills", Skills);
	localStorage.setItem("SkillsAre", SkillsAre);

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