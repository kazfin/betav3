//Author(s): Ethan Scott//

let x = "";

document.getElementById("developerbutton").addEventListener("click", function() {
    if (document.getElementById("developerbox").value === "password.5") {
        document.getElementById("developerbox").value = "- - - - -";
        document.getElementById("namebox").disabled = false;
        document.getElementById("namebutton").disabled = false;
        document.getElementById("developerbox").disabled = true;
        document.getElementById("developerbutton").disabled = true;
        document.getElementById("log").innerHTML = "access granted - p is valid";
    } else {
	document.getElementById("log").innerHTML = "access denied - p is invalid";
    document.getElementById("developerbox").value = "";
    }
});

document.getElementById("namebutton").addEventListener("click", function() {
        document.getElementById("log").innerHTML = "editing v";
        document.getElementById("valuebox").disabled = false;
        document.getElementById("valuebutton").disabled = false;
            document.getElementById("valuebutton").addEventListener("click", function() {
                    document.getElementById("log").innerHTML = "v is valid, changes not made. check console.";
                    localStorage.setItem(document.getElementById("namebox").value, document.getElementById("valuebox").value);
                    document.getElementById("log").innerHTML = "v is valid, changes made successfuly.";
            });
    }
);