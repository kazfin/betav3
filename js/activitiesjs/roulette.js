//Author(s): Ethan Scott//

let colourSelected = "";

document.getElementById("red").addEventListener('click', () => {
    colourSelected = "red";
    document.getElementById("red").style.opacity = "100%";
    document.getElementById("black").style.opacity = "25%";
    document.getElementById("placebet").disabled = false;
    document.getElementById("numenable").disabled = false;
});

document.getElementById("black").addEventListener('click', () => {
    colourSelected = "black";
    document.getElementById("black").style.opacity = "100%";
    document.getElementById("red").style.opacity = "25%";
    document.getElementById("placebet").disabled = false;
    document.getElementById("numenable").disabled = false;
});


document.getElementById("numenable").addEventListener('click', () => {
    if (document.getElementById("numenable") === true) {
        console.log("kachigga");
        document.getElementById("numbox").enabled = true;
    };
});