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
	localStorage.setItem("relationshipIDSelected", relationshipIDSelected);
	localStorage.setItem("PersonRelationships", JSON.stringify(PersonRelationships));
	localStorage.setItem("xNum", xNum);
	localStorage.setItem("xString", xString);
	localStorage.setItem("xBoolean", xBoolean);
	console.log("saved variables to local storage");
}

function genderGetter(proOrSub) {
    if (proOrSub === "pro") { //pro: pronoun//
        if (PersonSexes[relationshipIDSelected] === "M") {
            return "he";
        } else if (PersonSexes[relationshipIDSelected] === "F") {
            return "she";
        }
    } else if (proOrSub === "sub") { //sub: subject//
        if (PersonSexes[relationshipIDSelected] === "M") {
            return "him";
        } else if (PersonSexes[relationshipIDSelected] === "F") {
            return "her";
        }
    }
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

if (revent === "") {
	window.location.href = "./home.html";
}

if (revent === "casinoTooYoung") { //if player is too young to go into the casino//
	console.log("revent: " + revent);
	revent = "";
	Logs = "I just remembered I am a small child.";
	eventTitle("I'm gonna need to see some ID");
	eventText("You have to be over the age of 18 to enter the casino.");
	document.getElementById("eventOutcome").innerHTML = "";
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "tooYoungToGetJob") {
	revent = "";
	localStorage.setItem("revent", revent);
	eventTitle("But why");
	eventText("You're too young to get a job.");
	eventOutcome("Child labour is thoroughly illegal. Unless...");
	button1("OK");
	console.log("event display completed");
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "cantGoToSchoolWhileHasJob") {
	revent = "";
	localStorage.setItem("revent", revent);
	eventTitle("Shucks");
	eventText("You can't go to school while you have a full-time job.");
	eventOutcome("Quit your job, then come back.");
	button1("OK");
	console.log("event display completed");
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "notAtSchoolYet") {
	revent = "";
	localStorage.setItem("revent", revent);
	eventTitle("Goo Goo Ga Ga");
	eventText("You aren't at school yet.");
	eventOutcome("You'll be enrolled automatically once you turn five.");
	button1("OK");
	console.log("event display completed");
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
}

if (revent === "lotteryLowRiskWon") { //lottery low risk won//
	console.log("revent: " + revent);
	revent = "";
	document.getElementById("eventTitle").innerHTML = "Converse";
	document.getElementById("eventText").innerHTML = "You won! $400 has been deposited into your account.";
	Joy += 10;
	document.getElementById("eventOutcome").innerHTML = "Joy + 10";
	console.log("event display completed");
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";
})}	else if (revent === "lotteryLowRiskLost")  { //lottery low risk lost//
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Lottery";
	document.getElementById("eventText").innerHTML = "Shucks, you lost the lottery. $50 has been deducted from your account.";
	document.getElementById("eventOutcome").innerHTML = "";
	console.log("event display completed");
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";
})} else if (revent === "lotteryLowRiskFlatBroke") { //lottery low risk flat broke (i.e. can't afford)//
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Lottery";
	document.getElementById("eventText").innerHTML = "You just remembered you can't afford to play the lottery.";
	document.getElementById("eventOutcome").innerHTML = "";
	console.log("event display completed");
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";
})} else if (revent === "lotteryMediumRiskWon")  { //lottery medium risk won//
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Lottery";
	document.getElementById("eventText").innerHTML = "You won!! $3,000 has been deposited into your account.";
	Joy += 20;
	document.getElementById("eventOutcome").innerHTML = "Joy + 20";
	console.log("event display completed");
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";
})} else if (revent === "lotteryMediumRiskLost")  { //lottery medium risk lost//
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Lottery";
	document.getElementById("eventText").innerHTML = "Shucks, you lost the lottery. $50 has been deducted from your account.";
	document.getElementById("eventOutcome").innerHTML = "";
	console.log("event display completed");
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";
})} else if (revent === "lotteryMediumRiskFlatBroke") { //lottery medium risk flat broke (i.e. can't afford)//
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Lottery";
	document.getElementById("eventText").innerHTML = "You just remembered you can't afford to play the lottery.";
	document.getElementById("eventOutcome").innerHTML = "";
	console.log("event display completed");
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";
})} else if (revent === "lotteryHighRiskWon")  { //lottery high risk won//
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Lottery";
	document.getElementById("eventText").innerHTML = "Oh my god! You won!!! $5,000,000 has been deposited into your account.";
	Joy += 70;
	document.getElementById("eventOutcome").innerHTML = "Joy + 70";
	console.log("event display completed");
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";
})} else if (revent === "lotteryHighRiskLost")  { //lottery high risk lost//
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Lottery";
	document.getElementById("eventText").innerHTML = "Shucks, you lost the lottery. $50 has been deducted from your account.";
	document.getElementById("eventOutcome").innerHTML = "";
	console.log("event display completed");
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";
})} else if (revent === "lotteryHighRiskFlatBroke") { //lottery high risk flat broke (i.e. can't afford)//
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Lottery";
	document.getElementById("eventText").innerHTML = "You just remembered you can't afford to play the lottery.";
	document.getElementById("eventOutcome").innerHTML = "";
	console.log("event display completed");
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";
})}

if (revent === "relConversation") { //conversation with relationship//
	console.log("revent: " + revent); //god why is everything related to relationships so complicated//
	revent = "";
	if (PersonRelationships[relationshipIDSelected] >= -20) {
		document.getElementById("eventTitle").innerHTML = "I love to converse";
		let rIB = getRandomIntInclusive(5, 10); //relationship increased by//
		if (rIB >= 5 && rIB <= 7) {
			document.getElementById("eventText").innerHTML = "You had a short chat with your "+PersonRoles[relationshipIDSelected]+", "+PersonNames[relationshipIDSelected]+".";
			Logs = "I had a short chat with my "+PersonRoles[relationshipIDSelected]+", "+PersonNames[relationshipIDSelected]+".";
		} else {
			document.getElementById("eventText").innerHTML = "You had a deep conversation with your "+PersonRoles[relationshipIDSelected]+", "+PersonNames[relationshipIDSelected]+".";
			Logs = "I had a deep conversation with "+PersonNames[relationshipIDSelected]+".";
		}
		PersonRelationships[relationshipIDSelected] += rIB;
		document.getElementById("eventOutcome").innerHTML = "Relationship + "+rIB;
	} else if (PersonRelationships[relationshipIDSelected] >= -60 && PersonRelationships[relationshipIDSelected] < -20) {
		document.getElementById("eventTitle").innerHTML = "Okay";
		let rIB = getRandomIntInclusive(5, 10); //relationship decreased by//
		document.getElementById("eventText").innerHTML = "You tried to have a chat with your "+PersonRoles[relationshipIDSelected]+", "+PersonNames[relationshipIDSelected]+", but "+genderGetter("pro")+" just ignored you.";
		Logs = "I tried to have a chat with "+PersonNames[relationshipIDSelected]+", but "+genderGetter("pro")+" just ignored me.";
		PersonRelationships[relationshipIDSelected] -= rIB;
		Joy -= rIB;
		document.getElementById("eventOutcome").innerHTML = "Relationship - "+rIB+", Joy - "+rIB;
	} else if (PersonRelationships[relationshipIDSelected] < -60) {
		document.getElementById("eventTitle").innerHTML = "Ouch";
		let rIB = getRandomIntInclusive(10, 20); //relationship decreased by//
		document.getElementById("eventText").innerHTML = "You tried to have a chat with your "+PersonRoles[relationshipIDSelected]+", "+PersonNames[relationshipIDSelected]+", but "+genderGetter("pro")+" just told you to go away.";
		Logs = "I tried to have a chat with "+PersonNames[relationshipIDSelected]+", but "+genderGetter("pro")+" just told me to go away.";
		PersonRelationships[relationshipIDSelected] -= rIB;
		Joy -= rIB/2;
		document.getElementById("eventOutcome").innerHTML = "Relationship - "+rIB+", Joy - "+rIB;
	}
	console.log("event display completed");
	saveToLocalStorage();
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";
	})
} else if (revent === "relGiveMoney") { //give relationship money//
	console.log("revent: " + revent);
	revent = "";
	let spendMoneyOn1 = ["give back to those in need", "take their family out for a nice lunch", "get something nice, just for them", "save up for something big"];
	let spendMoneyOn2 = ["give back to those in need", "take their family out for a nice lunch", "get something nice, just for them", "save up for something big", "pay the bills", "pay off their debt", "travel", "go gambling", "go on a massive shopping spree"]
	function spendMoneyOnAgeAssurance(level) { //gets what they spend the money on, taking into account how much money was given, as well as their age//
		if (level === 1) {
			if (PersonAges[relationshipIDSelected] < 18) {
				return spendMoneyOn1[getRandomIntInclusive(0,3)];
			} else {
				return spendMoneyOn1[getRandomIntInclusive(0,4)];
			}
		} else if (level === 2) {
			if (PersonAges[relationshipIDSelected] < 18) {
				return spendMoneyOn2[getRandomIntInclusive(0,3)];
			} else {
				return spendMoneyOn2[getRandomIntInclusive(0,8)];
			}
		}
	}
	if (PersonRelationships[relationshipIDSelected] < -50) {
		eventTitle("I don't want your filthy money");
		eventText(PersonNames[relationshipIDSelected]+" told you to keep your money.");
		let x = getRandomIntInclusive(3, 6);
		PersonRelationships[relationshipIDSelected] += x;
		eventOutcome("Relationship + "+x+", Money - "+xNum);
		Logs = "I tried to give "+PersonNames[relationshipIDSelected]+" $"+xNum+", but "+genderGetter("sub")+" told me to keep it.";
		xNum = 0;
	} else if (PersonRelationships[relationshipIDSelected] >= -50 && PersonRelationships[relationshipIDSelected] <= 60) {
		let y = getRandomIntInclusive(500, 1250);
		if (xNum <= y && xNum >= 50) {
			eventTitle("Wow, thank you!");
			eventText(PersonNames[relationshipIDSelected]+" thanked you for the money. They told you they were going to "+spendMoneyOnAgeAssurance(1)+".");
			let x = getRandomIntInclusive(7, 14);
			Logs = "I gave "+PersonNames[relationshipIDSelected]+" $"+xNum+".";
			PersonRelationships[relationshipIDSelected] += x;
			eventOutcome("Relationship + "+x+", Money - "+xNum);
		} else if (xNum >= y) {
			eventTitle("Really? Are you sure?");
			eventText(PersonNames[relationshipIDSelected]+" thanked you endlessly for the money. They said they were going to use it to "+spendMoneyOnAgeAssurance(2)+".");
			let x = getRandomIntInclusive(12, xNum/20);
			if (x > 30) {
				x = 30;
			}
			Logs = "I gave "+PersonNames[relationshipIDSelected]+" $"+xNum+".";
			PersonRelationships[relationshipIDSelected] += x;
			eventOutcome("Relationship + "+x+", Money - "+xNum);
		} else if (xNum < 50) {
			eventTitle("What money");
			eventText("You had so little money that you accidentally swallowed it before you could give it to them.");
			eventOutcome("Money - "+xNum);
			Logs = "I went to give "+PersonNames[relationshipIDSelected]+" $"+xNum+", but I accidentally swallowed it before I could give it to them.";
		}
		Money -= xNum;
		xNum = 0;
	} else if (PersonRelationships[relationshipIDSelected] > 60) {
		let y = getRandomIntInclusive(500, 1250);
		if (xNum <= y && xNum > 50) {
			eventTitle("Wow, thank you!");
			eventText(PersonNames[relationshipIDSelected]+" thanked you for the money. They told you they were going to "+spendMoneyOnAgeAssurance(1)+".");
			let x = getRandomIntInclusive(8, 12);
			PersonRelationships[relationshipIDSelected] += x;
			eventOutcome("Relationship + "+x+", Money - "+xNum);
			Logs = "I gave "+PersonNames[relationshipIDSelected]+" $"+xNum+".";
		} else if (xNum >= y) {
			eventTitle("I can't, really");
			eventText(PersonNames[relationshipIDSelected]+" were grateful, but they refused. They said that they would feel awful taking that much money from you.");
			eventOutcome("Money +- 0");
			Logs = "I tried to give "+PersonNames[relationshipIDSelected]+" $"+xNum+", but "+genderGetter("pro")+" turned it down.";
			xNum = 0;
		} else if (xNum < 50) {
			eventTitle("What money");
			eventText("You had so little money that you accidentally swallowed it before you could give it to them.");
			eventOutcome("Money - $"+xNum);
		}
		Money -= xNum;
		xNum = 0;
	}
	console.log("event display completed");
	saveToLocalStorage();
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";
	})
}

if (revent === "job-appr-int-designer-accepted") { //accepted as apprentice interior designer//
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Interior Designer";
	document.getElementById("eventText").innerHTML = "You were accepted for the position of Apprentice Interior Designer!";
	Salary = 45000;
	JobPerformance = 25;
	hasJob = true;
	Job = "appr-int-designer";
	Logs = "I got the position of Apprentice Interior Designer! My salary is now $45,000 /yr!";
	document.getElementById("eventOutcome").innerHTML = "Salary = $45,000 /yr";
	console.log("event display completed");
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-appr-int-designer-rejected") { //rejected as apprentice interior designer//
	console.log("revent: "+ revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Interior Designer";
	document.getElementById("eventText").innerHTML = "Unfortunately, you were rejected for the position of Apprentice Interior Designer. You are unqualified.";
	hasJob = false;
	Job = "";
	document.getElementById("eventOutcome").innerHTML = "";
	Logs = "I did not become an apprentice interior designer. Instead, I became unemployed.";
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-int-designer-accepted")  { //accepted as interior designer//
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Interior Designer";
	document.getElementById("eventText").innerHTML = "You were accepted for the position of Interior Designer!";
	Salary = 60000;
	JobPerformance = 25;
	hasJob = true;
	Job = "int-designer";
	Logs = "I got the position of Interior Designer! My salary is now $60,000 /yr!";
	document.getElementById("eventOutcome").innerHTML = "Salary = $60,000 /yr <br>";
	console.log("event display completed");
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-int-designer-rejected") { //rejected as interior designer//
	console.log("revent: "+ revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Interior Designer";
	document.getElementById("eventText").innerHTML = "Unfortunately, you were rejected for the position of Interior Designer. You are unqualified.";
	hasJob = false;
	Job = ""
	document.getElementById("eventOutcome").innerHTML = "";
	Logs = "I did not become an interior designer. Instead, I became dissapointed.";
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-sr-int-designer-accepted")  { //accepted as senior interior designer//
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Interior Designer";
	document.getElementById("eventText").innerHTML = "You were accepted for the position of Senior Interior Designer!";
	Salary = 90000;
	JobPerformance = 25;
	hasJob = true;
	Job = "sr-int-designer";
	Logs = "I got the position of Senior Interior Designer! My salary is now $90,000 /yr!";
	document.getElementById("eventOutcome").innerHTML = "Salary = $90,000 /yr";
	saveToLocalStorage();
	console.log("event display completed");
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-sr-int-designer-rejected") { //rejected as senior interior designer//
	console.log("revent: "+ revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Interior Designer";
	document.getElementById("eventText").innerHTML = "Unfortunately, you were rejected for the position of Senior Interior Designer. You are unqualified.";
	hasJob = false;
	Job = "";
	document.getElementById("eventOutcome").innerHTML = "";
	Logs = "I did not become a senior interior designer. Instead, I became broke.";
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
}
if (revent === "job-appr-engineer-accepted") {
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Engineer";
	document.getElementById("eventText").innerHTML = "You were accepted for the position of Apprentice Engineer!";
	Salary = 90000;
	JobPerformance = 25;
	hasJob = true;
	Job = "appr-engineer";
	Logs = "I got the position of Apprentice Engineer! My salary is now $45,000 /yr!";
	document.getElementById("eventOutcome").innerHTML = "Salary = $90,000 /yr";
	console.log("event display completed");
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-appr-engineer-rejected") {
	console.log("revent: "+ revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Engineer";
	document.getElementById("eventText").innerHTML = "Unfortunately, you were rejected for the position of Apprentice Interior Designer. You are unqualified.";
	hasJob = false;
	Job = "";
	document.getElementById("eventOutcome").innerHTML = "";
	Logs = "I did not become an apprentice engineer. Instead, I became unemployed.";
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-engineer-accepted")  {
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Engineer";
	document.getElementById("eventText").innerHTML = "You were accepted for the position of Engineer!";
	Salary = 110000;
	JobPerformance = 25;
	hasJob = true;
	Job = "engineer";
	Logs = "I got the position of Engineer! My salary is now $110,000 /yr!";
	document.getElementById("eventOutcome").innerHTML = "Salary = $110,000 /yr <br>";
	console.log("event display completed");
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-engineer-rejected") {
	console.log("revent: "+ revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Engineer";
	document.getElementById("eventText").innerHTML = "Unfortunately, you were rejected for the position of Engineer. You are unqualified.";
	hasJob = false;
	Job = ""
	document.getElementById("eventOutcome").innerHTML = "";
	Logs = "I did not become an engineer. Instead, I became dissapointed.";
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-sr-engineer-accepted")  {
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Engineer";
	document.getElementById("eventText").innerHTML = "You were accepted for the position of Senior Engineer!";
	Salary = 140000;
	JobPerformance = 25;
	hasJob = true;
	Job = "sr-engineer";
	Logs = "I got the position of Senior Engineer! My salary is now $140,000 /yr!";
	document.getElementById("eventOutcome").innerHTML = "Salary = $140,000 /yr";
	saveToLocalStorage();
	console.log("event display completed");
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-sr-engineer-rejected") {
	console.log("revent: "+ revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Engineer";
	document.getElementById("eventText").innerHTML = "Unfortunately, you were rejected for the position of Senior Engineer. You are unqualified.";
	hasJob = false;
	Job = "";
	document.getElementById("eventOutcome").innerHTML = "";
	Logs = "I did not become a senior engineer. Instead, I became broke.";
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
}
if (revent === "job-ffw-cashier-accepted") {
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Fast Food Cashier";
	document.getElementById("eventText").innerHTML = "You were accepted for the position of Fast Food Cashier!";
	Salary = 30000;
	JobPerformance = 25;
	hasJob = true;
	Job = "ffw-cashier";
	Logs = "I got the position of Fast Food Cashier! My salary is now $30,000 /yr!";
	document.getElementById("eventOutcome").innerHTML = "Salary = $30,000 /yr";
	console.log("event display completed");
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-ffw-cashier-rejected") {
	console.log("revent: "+ revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Fast Food Cashier";
	document.getElementById("eventText").innerHTML = "Unfortunately, you were rejected for the position of Fast Food Cashier. You are unqualified.";
	hasJob = false;
	Job = "";
	document.getElementById("eventOutcome").innerHTML = "";
	Logs = "I did not become a fast food cashier. Instead, I became unemployed.";
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-ffw-cook-accepted")  {
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Fast Fook Cook";
	document.getElementById("eventText").innerHTML = "You were accepted for the position of Fast Fook Cook!";
	Salary = 40000;
	JobPerformance = 25;
	hasJob = true;
	Job = "ffw-cook";
	Logs = "I got the position of Fast Food Cook! My salary is now $40,000 /yr!";
	document.getElementById("eventOutcome").innerHTML = "Salary = $40,000 /yr <br>";
	console.log("event display completed");
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-ffw-cook-rejected") {
	console.log("revent: "+ revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Fast Food Cook";
	document.getElementById("eventText").innerHTML = "Unfortunately, you were rejected for the position of Fast Food Cook. You are unqualified.";
	hasJob = false;
	Job = ""
	document.getElementById("eventOutcome").innerHTML = "";
	Logs = "I did not become an Fast Food Cook. Instead, I became dissapointed.";
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-ffw-manager-accepted")  {
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Fast Food Branch Manager";
	document.getElementById("eventText").innerHTML = "You were accepted for the position of Fast Food Branch Manager!";
	Salary = 70000;
	JobPerformance = 25;
	hasJob = true;
	Job = "ffw-manager";
	Logs = "I got the position of Fast Food Branch Manager! My salary is now $70,000 /yr!";
	document.getElementById("eventOutcome").innerHTML = "Salary = $70,000 /yr";
	saveToLocalStorage();
	console.log("event display completed");
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-ffw-manager-rejected") {
	console.log("revent: "+ revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Fast Food Branch Manager";
	document.getElementById("eventText").innerHTML = "Unfortunately, you were rejected for the position of Fast Food Branch Manager. You are unqualified.";
	hasJob = false;
	Job = "";
	document.getElementById("eventOutcome").innerHTML = "";
	Logs = "I did not become a Fast Food Branch Manager. Instead, I became broke.";
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
}
if (revent === "job-chemist-accepted") {
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Chemist";
	document.getElementById("eventText").innerHTML = "You were accepted for the position of Chemist!";
	Salary = 100000;
	JobPerformance = 25;
	hasJob = true;
	Job = "chemist";
	Logs = "I got the position of Chemist! My salary is now $100,000 /yr!";
	document.getElementById("eventOutcome").innerHTML = "Salary = $100,000 /yr";
	console.log("event display completed");
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-chemist-rejected") {
	console.log("revent: "+ revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Chemist";
	document.getElementById("eventText").innerHTML = "Unfortunately, you were rejected for the position of Chemist. You are unqualified.";
	hasJob = false;
	Job = "";
	document.getElementById("eventOutcome").innerHTML = "";
	Logs = "I did not become a Chemist. Instead, I became unemployed.";
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-physicist-accepted")  {
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Physicist";
	document.getElementById("eventText").innerHTML = "You were accepted for the position of Physicist!";
	Salary = 110000;
	JobPerformance = 25;
	hasJob = true;
	Job = "physicist";
	Logs = "I got the position of Physicist! My salary is now $110,000 /yr!";
	document.getElementById("eventOutcome").innerHTML = "Salary = $110,000 /yr <br>";
	console.log("event display completed");
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-physicist-rejected") {
	console.log("revent: "+ revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Physicist";
	document.getElementById("eventText").innerHTML = "Unfortunately, you were rejected for the position of Physicist. You are unqualified.";
	hasJob = false;
	Job = ""
	document.getElementById("eventOutcome").innerHTML = "";
	Logs = "I did not become a Physicist. Instead, I became dissapointed.";
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-biologist-accepted")  {
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Biologist";
	document.getElementById("eventText").innerHTML = "You were accepted for the position of Biologist!";
	Salary = 120000;
	JobPerformance = 25;
	hasJob = true;
	Job = "biologist";
	Logs = "I got the position of Biologist! My salary is now $120,000 /yr!";
	document.getElementById("eventOutcome").innerHTML = "Salary = $120,000 /yr";
	saveToLocalStorage();
	console.log("event display completed");
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-biologist-rejected") {
	console.log("revent: "+ revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Biologist";
	document.getElementById("eventText").innerHTML = "Unfortunately, you were rejected for the position of Biologist. You are unqualified.";
	hasJob = false;
	Job = "";
	document.getElementById("eventOutcome").innerHTML = "";
	Logs = "I did not become a Biologist. Instead, I became broke.";
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-chemical-engineer-accepted")  {
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Chemical Engineer";
	document.getElementById("eventText").innerHTML = "You were accepted for the position of Chemical Engineer!";
	Salary = 160000;
	JobPerformance = 25;
	hasJob = true;
	Job = "chemical-engineer";
	Logs = "I got the position of Chemical Engineer! My salary is now $160,000 /yr!";
	document.getElementById("eventOutcome").innerHTML = "Salary = $160,000 /yr";
	saveToLocalStorage();
	console.log("event display completed");
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-chemical-engineer-rejected") {
	console.log("revent: "+ revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Chemical Engineer";
	document.getElementById("eventText").innerHTML = "Unfortunately, you were rejected for the position of Chemical Engineer. You are unqualified.";
	hasJob = false;
	Job = "";
	document.getElementById("eventOutcome").innerHTML = "";
	Logs = "I did not become a Chemical Engineer. Instead, I became broke.";
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-particle-physicist-accepted")  {
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Particle Physicist";
	document.getElementById("eventText").innerHTML = "You were accepted for the position of Particle Physicist!";
	Salary = 160000;
	JobPerformance = 25;
	hasJob = true;
	Job = "particle-physicist";
	Logs = "I got the position of Particle Physicist! My salary is now $160,000 /yr!";
	document.getElementById("eventOutcome").innerHTML = "Salary = $160,000 /yr";
	saveToLocalStorage();
	console.log("event display completed");
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-particle-physicist-rejected") {
	console.log("revent: "+ revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Particle Physicist";
	document.getElementById("eventText").innerHTML = "Unfortunately, you were rejected for the position of Particle Physicist. You are unqualified.";
	hasJob = false;
	Job = "";
	document.getElementById("eventOutcome").innerHTML = "";
	Logs = "I did not become a Particle Physicist. Instead, I became broke.";
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-biochemist-accepted")  {
	console.log("revent: " + revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Biochemist";
	document.getElementById("eventText").innerHTML = "You were accepted for the position of Biochemist!";
	Salary = 190000;
	JobPerformance = 25;
	hasJob = true;
	Job = "biochemist";
	Logs = "I got the position of Biochemist! My salary is now $190,000 /yr!";
	document.getElementById("eventOutcome").innerHTML = "Salary = $190,000 /yr";
	saveToLocalStorage();
	console.log("event display completed");
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-biochemist-rejected") {
	console.log("revent: "+ revent)
	revent = ""
	document.getElementById("eventTitle").innerHTML = "Biochemist";
	document.getElementById("eventText").innerHTML = "Unfortunately, you were rejected for the position of Biochemist. You are unqualified.";
	hasJob = false;
	Job = "";
	document.getElementById("eventOutcome").innerHTML = "";
	Logs = "I did not become a Biochemist. Instead, I became broke.";
		document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
}

if (revent === "job-crunch-perform") { //did crunch time at job//
	revent = "";
	Joy -= 10;
	JobPerformance += 20;
	Logs = "I hunkered down and did some crunch time at work today.";
	saveToLocalStorage();
	eventTitle("Crunch time");
	eventText("You did some extra crunch time at your job.");
	eventOutcome("Joy -10, Performance +20");
	button1("OK");
	console.log("event display completed");
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-crunch-less") { //too shit to do crunch time at job :(//
	revent = "";
	Logs = "I didn't have the energy to do crunch time at my job today.";
	saveToLocalStorage();
	eventTitle("Oh");
	eventText("You can't do crunch time at your job.");
	eventOutcome("Your stats are too low. Intellect must be >= 60 and Joy must be >= 50.");
	button1("OK");
	console.log("event display completed");
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-unpaid-overtime-perform") {
	revent = "";
	Joy -= 7;
	JobPerformance += 10;
	Logs = "I volunteered to do unpaid overtime at work.";
	saveToLocalStorage();
	eventTitle("Unpaid Overtime");
	eventText("You volunteered to do some unpaid overtime at your job.");
	eventOutcome("Joy -7, Performance +10");
	button1("OK");
	console.log("event display completed");
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-unpaid-overtime-less") {
	revent = "";
	Logs = "I'm too sad to do overtime at my job.";
	saveToLocalStorage();
	eventTitle("Oh");
	eventText("You can't do overtime at your job.");
	eventOutcome("Your stats are too low. Joy must be over 60.");
	button1("OK");
	console.log("event display completed");
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-paid-overtime-perform") {
	revent = "";
	Joy -= 12;
	JobPerformance += 5;
	Money += (Salary/20/2); //2.5% of Salary//
	Logs = "I did paid overtime at my job.";
	saveToLocalStorage();
	eventTitle("Paid Overtime");
	eventText("You did some paid overtime at your job.");
	eventOutcome("Joy -12, Performance +5, Money +"+(Salary/20/2));
	button1("OK");
	console.log("event display completed");
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-paid-overtime-less") {
	revent = "";
	Logs = "I'm too sad to do overtime at my job.";
	saveToLocalStorage();
	eventTitle("Oh");
	eventText("You can't do paid overtime at your job.");
	eventOutcome("Your stats are too low. Joy must be over 70.");
	button1("OK");
	console.log("event display completed");
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-unpaid-overtime-less") {
	revent = "";
	Logs = "I'm too sad to do overtime at my job.";
	saveToLocalStorage();
	eventTitle("Oh");
	eventText("You can't do overtime at your job.");
	eventOutcome("Your stats are too low. Joy must be over 60.");
	button1("OK");
	console.log("event display completed");
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-pto-perform") {
	revent = "";
	Joy += 5;
	JobPerformance -= 5;
	Logs = "I decided to take PTO from my work today and I have so much more free time now.";
	saveToLocalStorage();
	eventTitle("Paid Time Off");
	eventText("You took some paid time off from your job.");
	eventOutcome("Joy +5, Performance -5");
	button1("OK");
	console.log("event display completed");
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-pto-less") { //too shit to take pto at job :(//
	revent = "";
	Logs = "I can't take PTO from my work. My boss says I need to improve my performance first."
	saveToLocalStorage();
	eventTitle("Oh");
	eventText("You can't take paid time off at your job.");
	eventOutcome("Your stats are too low. Performance must be over 70.");
	button1("OK");
	console.log("event display completed");
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-raise-perform") {
	revent = "";
	Joy += 5;
	JobPerformance -= 60;
	Logs = "I got a raise at work today! My salary is now $"+Salary*1.1+"/yr (+$"+(Salary*0.1)+").";
	eventTitle("Raise");
	eventText("You got a raise! Your salary is now $"+Salary*1.1+"/yr (+$"+(Salary*0.1)+").");
	eventOutcome("Joy +5, Performance -60");
	button1("OK");
	Salary += (Salary/10);
	Salary = Math.round(Salary); //rounds Salary to the nearest integer (whole number)//
	saveToLocalStorage();
	console.log("event display completed");
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-raise-less") {
	revent = "";
	Logs = "I asked my boss for a raise, but they told me no.";
	saveToLocalStorage();
	eventTitle("Oh");
	eventText("You boss rejected your request for a raise.");
	eventOutcome("Your stats are too low. Performance must be over 70.");
	button1("OK");
	console.log("event display completed");
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
} else if (revent === "job-quit-perform") {
	revent = "";
	Salary = 0;
	JobPerformance = 0;
	Job = "";
	hasJob = false;
	Logs = "I quit my job.";
	saveToLocalStorage();
	eventTitle("Job Quit");
	eventText("You have successfully quit your job.");
	eventOutcome("Salary = 0");
	button1("OK");
	console.log("event display completed");
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./home.html";})
}

if (revent === "toddlerhood-O1") { //if player is a toddler and picked option 1 (this was the best way to run this code I swear)//
	if (rnumber === 1) {
		eventTitle("Nooo");
		eventText("She says no. You go home depressed and don’t leave your room for 11 days.");
		eventOutcome("Joy -10");
		eventCreditText("Mildly Concerning");
		Joy -= 10;
		rnumber = 0;
		revent = "";
		document.getElementById("button1").addEventListener("click", function() {
			Logs = "I didn't leave my room for 11 days.";
			saveToLocalStorage();
			window.location.href = "./home.html";})
	} else if (rnumber === 2) {
		eventTitle("Soft Start");
		eventText("You thank them anyways.");
		eventOutcome("+8 Relationship with the gifter");
		eventCreditText("Goblin");
		rnumber = 0;
		revent = "";
		document.getElementById("button1").addEventListener("click", function() {
			Logs = "I got a bunch of pillows for my birthday, but I thanked them regardless.";
			saveToLocalStorage();
		window.location.href = "./home.html";})
	} else if (rnumber === 3) {
		eventTitle("The Stolen Teddy");
		eventText("The teacher returns your teddy, but the other toddler glares at you.");
		eventOutcome("Joy +5, Karma -2");
		eventCreditText("Orsted1");
		Joy += 5;
		Karma -= 2;
		rnumber = 0;
		revent = "";
		document.getElementById("button1").addEventListener("click", function() {
			Logs = "I successfuly retrieved my favourite teddy bear from a malicious peer of mine.";
			saveToLocalStorage();
			window.location.href = "./home.html";})
	}
}

if (revent === "toddlerhood-O2") {
	if (rnumber === 1) {
		eventTitle("I will always get my way");
		eventText("You cry, and eventually your mum gives in and buys you one.");
		eventOutcome("Joy + 5, Relationship with mother - 5, Karma - 10");
		eventCreditText("Mildly Concerning");
		Joy -= 5;
		Karma - 10;
		rnumber = 0;
		document.getElementById("button1").addEventListener("click", function() {
			Logs = "I always get what I want and no one is to stop me.";
			saveToLocalStorage();
		window.location.href = "./home.html";})
	} else if (rnumber === 2) {
		eventTitle("Soft Start");
		eventText("You thank them enthusiastically. They shit their pants.");
		eventOutcome("+8 Relationship with the gifter");
		eventCreditText("Goblin");
		rnumber = 0;
		document.getElementById("button1").addEventListener("click", function() {
			Logs = "I got a bunch of pillows for my birthday, but I thanked them so enthusiastically that they soiled themself.";
			saveToLocalStorage();
			window.location.href = "./home.html";})
	} else if (rnumber === 3) {
		eventTitle("The Stolen Teddy");
		eventText("You make a new friend who also likes the toy.");
		eventOutcome("Joy +3, Karma +5");
		eventCreditText("Orsted1");
		Joy += 3;
		Karma += 5;
		Evality -= 3;
		rnumber = 0;
		revent = "";
		document.getElementById("button1").addEventListener("click", function() {
			Logs = "I made a new friend today.";
			saveToLocalStorage();
			window.location.href = "./home.html";})
	}
}

if (revent === "toddlerhood-O3") {
	if (rnumber === 1) {
		eventTitle("Tongue has been bitten");
		eventText("Your mother points to the shop and asks you if you want to get one. You end up having a great day out together.");
		eventOutcome("Joy + 10, Relationship with mother + 10");
		eventCreditText("Mildly Concerning");
		Joy += 10;
		rnumber = 0;
		document.getElementById("button1").addEventListener("click", function() {
			Logs = "I had a great day out with my mother.";
			saveToLocalStorage();
			window.location.href = "./home.html";})
	} else if (rnumber === 2) {
		eventTitle("Soft Start");
		eventText("You pitch a fit and cry. Your parents scold you.");
		eventOutcome("-8 Relationship with gifter");
		eventCreditText("Goblin");
		rnumber = 0;
		document.getElementById("button1").addEventListener("click", function() {
			Logs = "I got a bunch of pillows for my birthday and got so upset that I soiled myself.";
			saveToLocalStorage();
			window.location.href = "./home.html";})
	} else if (rnumber === 3) {
		eventTitle("The Stolen Teddy");
		eventText("The toddler starts crying, and the teacher scolds you.");
		eventOutcome("Joy -5, Karma -5");
		eventCreditText("Orsted1");
		Joy -= 5;
		Karma -= 5;
		Evality += 5;
		rnumber = 0;
		revent = "";
		document.getElementById("button1").addEventListener("click", function() {
			Logs = "I caused great despair to another toddler at my daycare today. I got scolded for it, but all I was trying to do is get my property back.";
			saveToLocalStorage();
			window.location.href = "./home.html";})
	}
}

if (revent === "childhood-O1") {
	if (rnumber === 1) {
		eventTitle("Spelling Bee");
		eventText("You win!");
		eventOutcome("Intellect +10, Joy +5");
		eventCreditText("Orsted1");
		Intellect += 10;
		Joy += 5;
		rnumber = 0;
		revent = "";
		document.getElementById("button1").addEventListener("click", function() {
			Logs = "I won my school's spelling bee. This is where my life will peak.";
			saveToLocalStorage();
			window.location.href = "./home.html";})
	}
}

if (revent === "childhood-O2") {
	if (rnumber === 1) {
		eventTitle("Spelling Bee");
		eventText("You make it to the semifinals, but ultimately lose.");
		eventOutcome("Joy -2, Intellect +2");
		eventCreditText("Orsted1");
		Intellect += 2;
		Joy -= 2;
		rnumber = 0;
		revent = "";
		document.getElementById("button1").addEventListener("click", function() {
			Logs = "I lost my school's spelling bee. This is the lowest I've been in my entire life. I lost on the word ''sandwich''. How did I forget how to spell that. I thought there was a T in there somewhere.";
			saveToLocalStorage();
			window.location.href = "./home.html";})
	}
}

if (revent === "childhood-O3") {
	if (rnumber === 1) {
		eventTitle("Spelling Bee");
		eventText("Your teacher is disappointed, but you feel relieved.");
		eventOutcome("Joy +2, Karma -5");
		eventCreditText("Orsted1");
		Karma -= 5;
		Joy += 2;
		rnumber = 0;
		revent = "";
		document.getElementById("button1").addEventListener("click", function() {
			Logs = "I didn't go to my school's spelling bee. In fact, I forgot they were even holding one.";
			saveToLocalStorage();
			window.location.href = "./home.html";})
	}
}

if (revent === "teenagehood-O1") {
	if (rnumber === 1) {
		eventTitle("High School Romance");
		eventText("You start dating her and have a happy relationship.");
		eventOutcome("Joy +10, Looks +5, Popularity +5");
		eventCreditText("Orsted1");
		Joy += 10;
		Looks += 5;
		rnumber = 0;
		revent = "";
		Logs = "One of my classmates asked me out today, and I said yes.";
		saveToLocalStorage();
		document.getElementById("button1").addEventListener("click", function() {
			window.location.href = "./home.html";})
	}
}

if (revent === "teenagehood-O2") {
	if (rnumber === 1) {
		eventTitle("High School Romance");
		eventText("They respect your honesty, but things are a bit awkward for a while.");
		eventOutcome("Karma +5, Popularity -2");
		eventCreditText("Orsted1");
		Karma += 5;
		rnumber = 0;
		revent = "";
		document.getElementById("button1").addEventListener("click", function() {
			Logs = "I rejected a girl who asked me out at school today. Things have been a little bit tense between us ever since.";
			saveToLocalStorage();
			window.location.href = "./home.html";})
	}
}

if (revent === "teenagehood-O3") {
	if (rnumber === 1) {
		eventTitle("High School Romance");
		eventText("They cry, and your reputation suffers.");
		eventOutcome("Karma -10, Popularity -20");
		eventCreditText("Orsted1");
		Karma -= 10;
		rnumber = 0;
		revent = "";
		document.getElementById("button1").addEventListener("click", function() {
			Logs = "I made fun of a girl for asking me out at school. Everyone gave me dirty looks for the rest of the day.";
			saveToLocalStorage();
			window.location.href = "./home.html";})
	}
}

saveToLocalStorage();