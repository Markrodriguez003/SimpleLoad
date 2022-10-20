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
  console.log("Waiting for files. . .");

  // SELECT OPTION FOR AUTHOR
  const AUTHOR_SELECT = document.getElementById("author");
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
  // SELECT OPTION FOR DOCTYPE
  const DOCTYPE_SELECT = document.getElementById("doctype");
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

  // DOWNLOAD LOAD FILE SUBMISSION
  const DOWNLOADLOADF = document.getElementById("download-load-f");
  const FINALPRODUCTION = document.getElementById("production-folder");

  DOWNLOADLOADF.addEventListener("click", function (e) {
    console.log("User clicked download load file btn.");

    e.stopPropagation();
    e.preventDefault();

    var output = document.querySelector("ul");
    var files = FINALPRODUCTION.files;

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

    // DOWNLOADLOADF.href = WriteCSVfile(files[5].name);
    // console.log("THIS IS THE URL --> " + WriteCSVfile(files[5].name));
    
  });
}; // EOL for OnLoad

//********************************************************* */
// FUNCTIONS //
//********************************************************* */

// READING AND WRITING FILES FUNC
function WriteCSVfile(data) {
  var textFile = null;

  var data = new Blob([data], { type: "text/plain" });

  // If we are replacing a previously generated file we need to
  // manually revoke the object URL to avoid memory leaks.
  if (textFile !== null) {
    window.URL.revokeObjectURL(textFile);
  }

  textFile = window.URL.createObjectURL(data);

  return textFile;
}
