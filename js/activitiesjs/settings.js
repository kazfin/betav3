//Author(s): Ethan Scott//

function setzoom() {
    if (document.getElementById("zoombox").value < 10) {
        document.getElementById("zoombox").value = 10;
    } else if (document.getElementById("zoombox").value > 500) {
        document.getElementById("zoombox").value = 500;
    }
    zoom = parseInt(document.getElementById("zoombox").value);
    document.body.style.zoom=(zoom/100);this.blur();
    localStorage.setItem("zoom", zoom);
    console.log(zoom);
}

function resetToDefaults() {
    //zoom//
    zoom = 100;
    document.body.style.zoom=(zoom/100);this.blur();
    localStorage.setItem("zoom", zoom);
    document.getElementById("zoombox").value = 100;
    console.log(zoom);
}

document.getElementById("zoombox").value = zoom;

document.getElementById("setzoom").addEventListener("click", setzoom);
document.getElementById("resetToDefaults").addEventListener("click", resetToDefaults);