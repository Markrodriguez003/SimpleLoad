(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

// SCRIPTS
//********************************************************* */
var printF = require("../scripts/printFiles");
// import formSubmission from "../scripts/formSubmission.js";
// import formatCSV from "../scripts/formatCSV.js";
// import writeCSV from "../scripts/writeCSV.js";
//********************************************************* */
// MAIN
//********************************************************* */
window.onload = function () {
  console.log("Waiting for files. . . ");

  //********************************************************* */
  // BROWSE FILE INPUT (FOR LOADING PRODUCTION FOLDER)
  const PRODUCTIONLOAD = document.getElementById("production-folder");

  // DOWNLOAD BUTTON FOR LOADED, PROCESSED & FORMATTED .CSV
  const DOWNLOAD_LOADF = document.getElementById("load-f");

  // EVENT LISTENER FOR ABOVE BROWSE FILE INPUT
  PRODUCTIONLOAD &&
    PRODUCTIONLOAD.addEventListener("click", function (e) {
      console.log("Using clicked to submit load file");
    });
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
      printF.printMesg();
      //********************************************************* */

      //  SAVES & VALIDATES FORM DATA (TRUE OR FALSE)
      // var formData = formSubmission(); // CHANGE TO FORM VALIDATOR

      //********************************************************* */

      // FORM DATA VALIDATION CONDITIONAL
      // if (formData.pass === true) {
      // SAVES FORMATTED DATA BY PASSING VALIDATED DATA + FORM DATA
      // var formattedData = formatCSV(formData, rawFiles);

      // GRABS DOWNLOAD PRODUCTION LOAD FILE BUTTON/ANCHOR
      // var downloadCsvBtn = document.getElementById("download-load-f");

      // ASSIGNS DOWNLOAD .CSV URL TO DOWNLOAD PRODUCTION LOAD FILE
      // downloadCsvBtn.href = writeCSV(formattedData);

      // TURNS ON DOWNLOAD PRODUCTION LOAD FILE BUTTON
      // downloadCsvBtn.style.display = "block";

      // CHANGES COLOR TO GREEN IF DOWNLOAD PRODUCTION LOAD FILE BUTTON
      // downloadCsvBtn.style.backgroundColor = "limegreen";
      // } else {
      // console.log("FORM DID NOT VALIDATE!");
      // }
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

},{"../scripts/printFiles":2}],2:[function(require,module,exports){
// PRINTING FILES TO BROWSER
module.exports.printFiles = function (files) {
    console.log("PRINTING FORM")

    var output = document.querySelector("ul");

    for (var i = 0; i < files.length; i++) {
        var item = document.createElement("li");
        item.style.listStyleType = "none";
        item.innerHTML = "/" + files[i].webkitRelativePath;
        output.appendChild(item);
    }
    // var exampleData =
    //     "Loading File" +
    //     " " +
    //     files[5].webkitRelativePath +
    //     " " +
    //     files[5].name +
    //     " " +
    //     files[5].type +
    //     " " +
    //     files[5].size +
    //     " " +
    //     files[5].lastModified;
    // console.log(exampleData);

    return false;
}

module.exports.printMesg = function () { console.log("PRINTING MESSAGE!!!")}



},{}]},{},[1]);
