
// REFERENCES 

// https://web.dev/read-files/
// https://web.dev/file-system-access/
// https://github.com/GoogleChromeLabs/browser-fs-access
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
// https://dev.to/rushankhan1/build-a-cli-with-node-js-4jbi
// https://stackoverflow.com/questions/43708127/javascript-get-the-filename-and-extension-from-input-type-file

window.onload = function () {
  console.log("Waiting for files. . .");

  

  // ADD ASYNC WAIT
  // FOLDER UPLOAD
  const FINALPRODUCTION = document.getElementById("production-folder");
  FINALPRODUCTION.addEventListener(
    "change",
    function (event) {
      var output = document.querySelector("ul");
      var files = event.target.files;

      for (var i = 0; i < files.length; i++) {
        var item = document.createElement("li");
        
        item.style.listStyleType="none";
        item.innerHTML = "/" + files[i].webkitRelativePath;
        output.appendChild(item);
      }

      var parsedFiles = JSON.stringify(files);
      console.log("Showing File Target " + files[0]);
      console.log("Grabbing File" + " " + files[0].name + " "  + files[0].type);
    },
    false
  );

  // DOWNLOAD LOAD FILE SUBMISSION
  const DOWNLOADLOADF = document.getElementById("download-load-f");

  DOWNLOADLOADF.addEventListener("click", function (event) {
    console.log("User clicked download load file btn.");
  });
};
