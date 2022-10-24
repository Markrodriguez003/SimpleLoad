// REFERENCES
//********************************************************* */
// https://web.dev/read-files/
// https://web.dev/file-system-access/
// https://github.com/GoogleChromeLabs/browser-fs-access
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
// https://dev.to/rushankhan1/build-a-cli-with-node-js-4jbi
// https://stackoverflow.com/questions/43708127/javascript-get-the-filename-and-extension-from-input-type-file
// https://blog.logrocket.com/how-to-build-a-progressive-web-app-pwa-with-node-js/
// https://w3c.github.io/FileAPI/#dfn-file
// https://web.dev/read-files/



import printFiles from "../scripts/printFiles.js";
import formSubmission from "../scripts/formSubmission.js";
import formatCSV from "../scripts/formatCSV.js";
import writeCSV from "../scripts/writeCSV.js"

// MAIN
//********************************************************* */
window.onload = function () {


  console.log("Waiting for files. . . ");

  //********************************************************* */

  const DOWNLOAD_LOADF = document.getElementById("load-f");
  const FINALPRODUCTION = document.getElementById("production-folder");

  // USER LOADS PRODUCTION EVENT LISTENER
  FINALPRODUCTION &&
    FINALPRODUCTION.addEventListener("click", function (e) {
      console.log("Using clicked to submit load file");
    });

  //********************************************************* */

  // DOWNLOAD LOAD FILE SUBMISSION EVENT LISTENER
  DOWNLOAD_LOADF &&
    DOWNLOAD_LOADF.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      console.log("User clicked download load file btn.");


      var files = FINALPRODUCTION.files;

      printFiles(files);

      var validatedData = formSubmission(files);
      if ( validatedData.pass === true) {
        
       var formattedData = formatCSV(validatedData, files);
        var link = document.getElementById("download-load-f");
        link.href = writeCSV(JSON.stringify(formattedData));
        link.style.display = "block";
        link.style.backgroundColor = "limegreen";
      } else {
        console.log("FORM DID NOT VALIDATE!");
      }




    });

  //********************************************************* */


 


  const refreshButton = document.querySelector('.resetBtn');

  const refreshPage = (e) => {
    e.preventDefault() // Eliminates HTTP headers
    location.reload(); // Refresh page

  }

  refreshButton.addEventListener('click', refreshPage)

  //********************************************************* */
  //********************************************************* */
  //********************************************************* */
  //*******************EOL************************ */
  //********************************************************* */
  //********************************************************* */
  //********************************************************* */
}; // EOL for OnLoad
