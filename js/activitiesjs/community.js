//Author(s): Ethan Scott//

console.log(relationshipIDSelected)

document.getElementById("name").innerHTML = CommunityNames[relationshipIDSelected]+" ("+CommunitySexes[relationshipIDSelected]+")";
document.getElementById("age").innerHTML = "Age: "+CommunityAges[relationshipIDSelected];

Logs = "I looked at "+CommunityNames[relationshipIDSelected]+".";
localStorage.setItem("Logs", Logs);

document.getElementById("x").addEventListener('click', () => {
    relationshipIDSelected = 0;
    localStorage.setItem("relationshipIDSelected", relationshipIDSelected);
    window.location.href = "./home.html";
})

document.getElementById("left").addEventListener('click', () => {
    relationshipIDSelected = 0;
    localStorage.setItem("relationshipIDSelected", relationshipIDSelected);
    window.location.href = "./community.html";
})