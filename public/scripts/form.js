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

//********************************************************* */

// const testarry = require("../scripts/doctype-select");
//********************************************************* */
// DATA
//********************************************************* */
// AUTHORS
const author = [
  "Mark Rodriguez",
  "Jessica Yanes",
  "Melissa Yanes",
  "Brian Lechich",
  "Andrew Herron",
  "Peter Homer",
  "Janet Figueroa",
  "Maryanne Rodriguez",
  "Daisy Thomas",
  "Michelle Osorio",
  "Natalie Drubin",
  "June La Barge",
  "Charlie Brumby",
  "Kevin Jacobs",
  "Paul Robinson",
  "Andrew Vitali",
  "Chris King",
  "Greg Trask",
  "Jose Ortiz",
  "Howard Goldfarb",
  "Crystal Jimenez",
  "George Befeler",
  "Luis Delgado",
  "Min Azahares",
  "Antonio Hernandez",
];
// DOCTYPE SELECT OPTION DATA
const dTypes = [
  "Order",
  "Motion",
  "Appeal",
  "Doc",
  "Production",
  "Agreement",
  "Letter",
  "Lease",
  "HR",
  "Firm",
  "Discovery",
  "Template",
  "Affidavit",
  "Amendment",
  "Invoice",
  "Bill",
  "Notice",
  "Lease",
  "Certificate",
  "Complaint",
  "Note",
  "Promissory",
  "Receipt",
  "Deed",
  "Eviction",
  "Financial",
  "Application",
  "Form",
  "Warranty",
  "Article",
  "Will",
  "Lien",
  "Addendum",
  "Loan",
  "Release",
  "COAL",
  "Contract",
  "Shares",
  "Resolution",
  "Resume",
  "Firm",
  "Reference",
  "Caselaw",
  "Proposal",
  "Guarantee",
  "Waiver",
];

// MAIN
//********************************************************* */
window.onload = function () {
  console.log("Waiting for files. . . ");

  // SELECT OPTION FOR AUTHOR
  const AUTHOR_SELECT = document.getElementById("author");
  AUTHOR_SELECT &&
    AUTHOR_SELECT.addEventListener(
      "click",
      function (event) {
        for (var y = 0; y < author.length; y++) {
          var option = document.createElement("option");
          option.innerHTML = author.sort()[y];
          option.value = author[y];
          AUTHOR_SELECT.appendChild(option);
        }
      },
      false
    );

  //********************************************************* */
  // SELECT OPTION FOR DOCTYPE EVENT LISTENER
  const DOCTYPE_SELECT = document.getElementById("doctype");
  DOCTYPE_SELECT &&
    DOCTYPE_SELECT.addEventListener(
      "click",
      function (event) {
        for (var x = 0; x < dTypes.length; x++) {
          var option = document.createElement("option");
          option.innerHTML = dTypes.sort()[x];
          option.value = dTypes[x];
          DOCTYPE_SELECT.appendChild(option);
        }
         
      },
      false
    );
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

      var output = document.querySelector("ul");
      var files = FINALPRODUCTION.files;

      // PRINTING THEM TO BROWSER
      for (var i = 0; i < files.length; i++) {
        var item = document.createElement("li");

        item.style.listStyleType = "none";
        item.innerHTML = "/" + files[i].webkitRelativePath;
        output.appendChild(item);
      }

      // TESTING OUTPUT VIA CONSOLE
      console.log(
        "Grabbing File" +
          " " +
          files[5].name +
          " " +
          files[5].type +
          " " +
          files[5].size +
          " " +
          files[5].lastModified
      );

      var exampleData =
        "Loading File" +
        " " +
        files[5].name +
        " " +
        files[5].type +
        " " +
        files[5].size +
        " " +
        files[5].lastModified;


        
      console.log("Author: " + AUTHOR_SELECT.value  + "Doctype: " + DOCTYPE_SELECT.value)  
      formatCSV(files);
      var link = document.getElementById("download-load-f");
      link.href = writeCSV(JSON.stringify(exampleData));
      // link.href = writeCSV(ADD FORMATTER FUNCTION HERE INSTEAD OF FUNC ABOVE));
      link.style.display = "block";
      link.style.backgroundColor = "limegreen";
    });

  //********************************************************* */

  // WRITE CSV LOAD FILE FUNC

  function writeCSV(data) {
    console.log("Writing csv load file. . . ");
    var loadFile = null;
    var data = new Blob([data], { type: "text/csv" });

    if (loadFile !== null) {
      window.URL.revokeObjectURL(loadFile);
    }

    loadFile = window.URL.createObjectURL(data);

    console.log("This is the D/L URL --> " + loadFile);

    DOWNLOAD_LOADF.style.display = "none";
    return loadFile;
  }

  function formatCSV(data){

    console.log("Formatting .csv file!");

    var formattedCSV = data;

    return formattedCSV;
  }

  //********************************************************* */
  //********************************************************* */
  //********************************************************* */
  //*******************EOL************************ */
  //********************************************************* */
  //********************************************************* */
  //********************************************************* */
}; // EOL for OnLoad
