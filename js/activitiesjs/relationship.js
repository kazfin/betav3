//Author(s): Ethan Scott//

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

console.log(relationshipIDSelected)

document.getElementById("name").innerHTML = PersonNames[relationshipIDSelected];
document.getElementById("role").innerHTML = "Role: "+PersonRoles[relationshipIDSelected]+" ("+PersonSexes[relationshipIDSelected]+")";
document.getElementById("age").innerHTML = "Age: "+PersonAges[relationshipIDSelected];
document.getElementById("relationshipText").innerHTML = "Relationship: "+PersonRelationships[relationshipIDSelected];
document.getElementById("conversation").innerHTML = "Have a conversation with "+genderGetter("sub");
document.getElementById("compliment").innerHTML = "Compliment "+genderGetter("sub");
document.getElementById("spendtime").innerHTML = "Spend time with "+genderGetter("sub");

Logs = "I looked at my "+PersonRoles[relationshipIDSelected]+".";
localStorage.setItem("Logs", Logs);

if (PersonRelationships[relationshipIDSelected] >= 40) {
    document.getElementById("threaten").remove();
}

document.getElementById("x").addEventListener('click', () => {
    relationshipIDSelected = 0;
    localStorage.setItem("relationshipIDSelected", relationshipIDSelected);
    window.location.href = "./home.html";
});

document.getElementById("left").addEventListener('click', () => {
    relationshipIDSelected = 0;
    localStorage.setItem("relationshipIDSelected", relationshipIDSelected);
    window.location.href = "./relationships.html";
});

document.getElementById("conversation").addEventListener('click', () => {
    revent = "relConversation";
    localStorage.setItem("revent", revent);
    window.location.href = "./event.html";
});

document.getElementById("givemoney").addEventListener('click', () => {
    window.location.href = "./give-money.html";
});

if (Age <= 8 || PersonAges[relationshipIDSelected] <= 8) {
    document.getElementById("givemoney").remove();
}