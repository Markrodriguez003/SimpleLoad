// REFERENCES
//********************************************************* */
// https://blog.logrocket.com/how-to-build-a-progressive-web-app-pwa-with-node-js/
// https://w3c.github.io/FileAPI/#dfn-file
// https://web.dev/read-files/
// FULL PATH REF
// https://stackoverflow.com/questions/15201071/how-to-get-full-path-of-selected-file-on-change-of-input-type-file-using-jav
//https://www.sitepoint.com/understanding-module-exports-exports-node-js/


// SCRIPTS
//********************************************************* */

import printFiles from "../scripts/printFiles.js";
import formValidator from "./formValidator.js";
import collapsible from "../scripts/collapsible.js";
import formatCSV from "../scripts/formatCSV.js";
import writeCSV from "../scripts/writeCSV.js";
import * as inputClear from "../scripts/inputClear.js";
import * as select from "../scripts/select.js";
import * as help_modal from "../scripts/help_modal.js";
import * as scroll from "../scripts/scroll.js";
import refresh from "../scripts/refresh.js"
import footerPrompt from "../scripts/footerPrompt.js";

// import electron from '../../node_modules/';

// const configDir =  (electron.app || electron.remote.app).getPath('userData');
// console.log(configDir);

//********************************************************* */
// MAIN
//********************************************************* */

window.onload = function () {
  console.log("Waiting for files. . . ");

  //********************************************************* */
  // PRINT FUNCTION THAT DISPLAYS ALL FILES FROM .CSV
  //********************************************************* */
  collapsible();
  //********************************************************* */
  // BROWSE FILE INPUT (FOR LOADING PRODUCTION FOLDER)
  const PRODUCTIONLOAD = document.getElementById("production-folder");

  // DOWNLOAD BUTTON FOR LOADED, PROCESSED & FORMATTED .CSV
  const DOWNLOAD_LOADF = document.getElementById("load-f");

  // EVENT LISTENER FOR ABOVE BROWSE FILE INPUT
  PRODUCTIONLOAD &&
    PRODUCTIONLOAD.addEventListener("change", function (e) {
      console.log("Using clicked to submit load file");
    });
  //********************************************************* */

  // DOWNLOAD LOAD FILE SUBMISSION EVENT LISTENER
  DOWNLOAD_LOADF &&
    DOWNLOAD_LOADF.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("User clicked download load file btn.");

      //********************************************************* */
      //  SAVES & VALIDATES FORM DATA (TRUE OR FALSE)
      var formData = formValidator(); // CHANGE TO FORM VALIDATOR
      //********************************************************* */
      // FORM DATA VALIDATION CONDITIONAL
      if (formData.pass === true) {
        // GRABS ALL FILES USER LOADED USING LOAD FILE INPUT
        var rawFiles = PRODUCTIONLOAD.files;

        //********************************************************* */
        // SEND PRODUCTION FILES TO A FUNCTION THAT PRINTS FILES TO PAGE
        // PUT IN SCROLLABLE CAROUSEL AND/OR PAGINATION (n/Flength)
        printFiles(rawFiles);

        // SAVES FORMATTED DATA BY PASSING VALIDATED DATA + FORM DATA
        var formattedData = formatCSV(formData, rawFiles);

        // GRABS DOWNLOAD PRODUCTION LOAD FILE BUTTON/ANCHOR
        var downloadCsvBtn = document.getElementById("download-load-f");

        // ASSIGNS DOWNLOAD .CSV URL TO DOWNLOAD PRODUCTION LOAD FILE
        downloadCsvBtn.href = writeCSV(formattedData);

        // TURNS ON DOWNLOAD PRODUCTION LOAD FILE BUTTON
        downloadCsvBtn.style.display = "block";

        // CHANGES COLOR TO GREEN IF DOWNLOAD PRODUCTION LOAD FILE BUTTON
        downloadCsvBtn.style.backgroundColor = "green";
      } else {
        console.log("FORM DID NOT VALIDATE!");
      }
    });
  //********************************************************* */

  // REFRESH PAGE BUTTON
  const refreshButton = document.getElementById("resetBtn");

  // BUTTON THAT CLEARS FORM AND REFRESHES ENTIRE PAGE.
  refreshButton.addEventListener("click", (e) => {
    e.preventDefault(); // Eliminates previous HTTP headers
    refresh();
  });

  //********************************************************* */
}; // EOL for OnLoad
