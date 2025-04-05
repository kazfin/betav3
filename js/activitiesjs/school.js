//Author(s): Ethan Scott//

if (Age >= 5 && Age <= 10) {
	document.getElementById("instName").innerHTML = institutionNames[0]+" State School";
} else if (Age >= 11 && Age <= 17) {
	document.getElementById("instName").innerHTML = institutionNames[1]+" State High School";
}