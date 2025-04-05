function workExpCalculator(jobItsFor) {
    let workCount = workExperience.filter(experience => experience === jobItsFor);
 	console.log(workCount);
	return workCount.length;
}

//this one was AI generated, but then I felt a bit icky about using it so I took a crack at it myself using a different method so I could feel proud of what I made//