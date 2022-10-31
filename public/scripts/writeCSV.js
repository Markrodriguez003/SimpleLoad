// WRITE CSV LOAD FILE FUNC
module.exports = function(data) {
  // GRABS UPLOAD PRODUCTION DIRECTORY ANCHOR / BUTTON
  const LOADFILE = document.getElementById("load-f");

  // GRABS DOWNLOAD LOAD FILE ANCHOR / BUTTON
  const DOWNLOAD_LOADF = document.getElementById("download-load-f");

  console.log("Writing csv load file. . . ");

  // FINAL LOAD FILE
  var loadFile = null;

  // CREATES NEW BLOB (.CSV) FILE AND LOADS IT WITH FORMATTED FILES
  var _LData = new Blob([data], { type: "text/csv" });

  // MAKES SURE THAT THERE IS NO MEMORY LEAKS AND FILE IS ERASED AFTER
  if (loadFile !== null) {
    window.URL.revokeObjectURL(loadFile);
  }

  // CREATED A DOWNLOAD URL OF BLOB(.CSV FILE)
  loadFile = window.URL.createObjectURL(_LData);

  // TURNS OFF LOAD PRODUCTION ANCHOR / BUTTON
  LOADFILE.style.display = "none";

  // SETS .CSV DOWNLOAD URL & FILE TYP
  DOWNLOAD_LOADF.setAttribute(
    "href",
    "data:text/csv; charset=utf-8," + encodeURI(loadFile)
  );

  // SETS ANCHOR / BUTTON TO DOWNLOAD AND NAMES ASSIGNS FILE NAME FOR .CSV
  DOWNLOAD_LOADF.setAttribute("download", "loadfile.csv");

  // FIX THIS?, POSSIBLE INCLUDE THE ASSIGNING HREF OF DOWNLOAD BTN FROM MAIN.JS

  return loadFile; // FIX THIS, POSSIBLE INCLUDE THE ASSIGNING HREF OF DOWNLOAD BTN FROM MAIN.JS
}
