
// REFERENCES 
//********************************************************* */
// https://web.dev/read-files/
// https://web.dev/file-system-access/
// https://github.com/GoogleChromeLabs/browser-fs-access
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
// https://dev.to/rushankhan1/build-a-cli-with-node-js-4jbi
// https://stackoverflow.com/questions/43708127/javascript-get-the-filename-and-extension-from-input-type-file

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
  "Antonio Hernandez"


]
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
  "Waiver"

]

// MAIN
//********************************************************* */
window.onload = function () {
  console.log("Waiting for files. . .");


//********************************************************* */

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

        item.style.listStyleType = "none";
        item.innerHTML = "/" + files[i].webkitRelativePath;
        output.appendChild(item);
      }

      var parsedFiles = JSON.stringify(files);
      console.log("Showing File Target " + files[0]);
      console.log("Grabbing File" + " " + files[0].name + " " + files[0].type);
    },
    false
  );

//********************************************************* */

  // SELECT OPTION FOR AUTHOR
  const AUTHOR_SELECT = document.getElementById("author");
  AUTHOR_SELECT.addEventListener(
    "click",
    function (event) {
      for (var y = 0; y < author.length; y++) {
        var option = document.createElement("option");
        option.innerHTML = author.sort()[y];
        option.value = author[y]
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
        option.value = dTypes[x]
        DOCTYPE_SELECT.appendChild(option);
      }
    },
    false
  );
//********************************************************* */


  // DOWNLOAD LOAD FILE SUBMISSION
  const DOWNLOADLOADF = document.getElementById("download-load-f");

  DOWNLOADLOADF.addEventListener("click", function (event) {
    console.log("User clicked download load file btn.");
  });
};


//********************************************************* */
