//Author(s): Ethan Scott (and I guess some fuckin ai)//

//i'm gonna be 100% real i just copied this directly from gemini i have no fucking idea what this does//

// Downloading data from localStorage to a file

function downloadLocalStorageAsFile() {

    reventSub.push("local-load-successfuly");
    localStorage.setItem("reventSub", JSON.stringify(reventSub));
  
    const data = JSON.stringify(localStorage); 
  
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Bad Life Simulator Save.bls'; //proprietary? not really. it's still literally just a json//
    a.click();
  
    URL.revokeObjectURL(url); 

    reventSub.splice(reventSub.indexOf("local-load-successfuly"), 1);
    localStorage.setItem("reventSub", JSON.stringify(reventSub));
  }
  
  // Reading data from a file and saving to localStorage
  
  function readAndSaveFileToLocalStorage(file) {
    const reader = new FileReader();
  
    reader.onload = function(event) {
      try {
        const data = JSON.parse(event.target.result);
        for (const key in data) {
          localStorage.setItem(key, data[key]);
        }
        console.log("Data loaded from file and saved to localStorage.");
      } catch (error) {
        console.error("Error parsing JSON data: ", error);
      }
    };
  
    reader.readAsText(file);
  }
  
  // Example usage:
  
  // Download localStorage data to a file
  document.getElementById('jsonSave').addEventListener('click', downloadLocalStorageAsFile);

    // Handle file input for loading data
    document.getElementById('idkthething').addEventListener('change', (event) => {
        readAndSaveFileToLocalStorage(event.target.files[0]);
        window.location.href = "./eventSub.html";
      });

document.getElementById("destroySave").addEventListener("click", function() {
      revent = "destroy-save-confirm";
      localStorage.setItem("revent", revent);
      window.location.href = "./event-2.html";
});