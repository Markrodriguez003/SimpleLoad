/* 

REFACTOR THIS SO THE SELECT JUST GRABS THE TARGET SELECT LABEL AND USES 
THAT TO POPULATE SELECT FILE
*/

//********************************************************* */


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