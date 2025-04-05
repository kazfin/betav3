//Author(s): Ethan Scott//

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

document.getElementById("whoGivingMoneyTo").innerHTML = "You are giving money to your "+PersonRoles[relationshipIDSelected]+", "+PersonNames[relationshipIDSelected];

document.getElementById("giveMoney").addEventListener('click', () => {
    if (document.getElementById("amount").value > Money) {
        document.getElementById("amount").value = Money;
    } else if (document.getElementById("amount").value < 0) {
        document.getElementById("amount").value = 0;
    }
    xNum = document.getElementById("amount").value;
    localStorage.setItem("xNum", xNum);
    revent = "relGiveMoney";
    localStorage.setItem("revent", revent);
    window.location.href = "./event.html";
});