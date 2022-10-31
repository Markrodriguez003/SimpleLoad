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
// FULL PATH REF
// https://stackoverflow.com/questions/15201071/how-to-get-full-path-of-selected-file-on-change-of-input-type-file-using-jav
//https://www.sitepoint.com/understanding-module-exports-exports-node-js/



// On Chrome/Chromium based apps like electron you can just use the target.files:! 

// SCRIPTS
//********************************************************* */
var printF = require("../scripts/printFiles");
var select = require("../scripts/select");
var writeCSV = require("../scripts/writeCSV");
var formSubmission = require ("../scripts/formSubmission.js");
var formatCSV = require("../scripts/formatCSV.js");
var $ = require("jquery")
//********************************************************* */
// MAIN
//********************************************************* */
window.onload = function () {
  console.log("Waiting for files. . . ");

  //********************************************************* */
  // BROWSE FILE INPUT (FOR LOADING PRODUCTION FOLDER)
  // const PRODUCTIONLOAD = document.getElementById("production-folder");
  const PRODUCTIONLOAD = $("#production-folder");

  PRODUCTIONLOAD.change(function(e){
    console.log($(this).val());
    console.log(e.target.files[0]);

    
  })




  // DOWNLOAD BUTTON FOR LOADED, PROCESSED & FORMATTED .CSV
  const DOWNLOAD_LOADF = document.getElementById("load-f");

  // EVENT LISTENER FOR ABOVE BROWSE FILE INPUT
  // PRODUCTIONLOAD &&
  //   PRODUCTIONLOAD.addEventListener("change", function (e) {
  //     console.log("Using clicked to submit load file");
  //     // console.log('fileP --> ' + this.val() )
  //     console.log('fileP --> ' + e.target.files[0] )

  //   });
  //********************************************************* */

  // DOWNLOAD LOAD FILE SUBMISSION EVENT LISTENER
  DOWNLOAD_LOADF &&
    DOWNLOAD_LOADF.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      console.log("User clicked download load file btn.");

      // GRABS ALL FILES USER LOADED USING LOAD FILE INPUT
      var rawFiles = PRODUCTIONLOAD.files;

      //********************************************************* */

      // SEND PRODUCTION FILES TO A FUNCTION THAT PRINTS FILES TO PAGE
      // PUT IN SCROLLABLE CAROUSEL AND/OR PAGINATION (n/Flength)
      printF.printFiles(rawFiles);
      //********************************************************* */

      //  SAVES & VALIDATES FORM DATA (TRUE OR FALSE)
      var formData = formSubmission(); // CHANGE TO FORM VALIDATOR

      //********************************************************* */

      // FORM DATA VALIDATION CONDITIONAL
      if (formData.pass === true) {
      // SAVES FORMATTED DATA BY PASSING VALIDATED DATA + FORM DATA
      var formattedData = formatCSV(formData, rawFiles);

      // GRABS DOWNLOAD PRODUCTION LOAD FILE BUTTON/ANCHOR
      var downloadCsvBtn = document.getElementById("download-load-f");

      // ASSIGNS DOWNLOAD .CSV URL TO DOWNLOAD PRODUCTION LOAD FILE
      downloadCsvBtn.href = writeCSV(formattedData);

      // TURNS ON DOWNLOAD PRODUCTION LOAD FILE BUTTON
      downloadCsvBtn.style.display = "block";

      // CHANGES COLOR TO GREEN IF DOWNLOAD PRODUCTION LOAD FILE BUTTON
      downloadCsvBtn.style.backgroundColor = "limegreen";
      } else {
      console.log("FORM DID NOT VALIDATE!");
      }
    });

  //********************************************************* */

  // REFRESH PAGE BUTTON
  const refreshButton = document.querySelector(".resetBtn");

  // BUTTON THAT CLEARS FORM AND REFRESHES ENTIRE PAGE.
  refreshButton.addEventListener("click", (e) => {
    e.preventDefault(); // Eliminates previous HTTP headers
    location.reload(); // Refresh entire page
  });

  //********************************************************* */
}; // EOL for OnLoad
