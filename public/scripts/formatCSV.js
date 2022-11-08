// REFERENCES
// https://code-maven.com/create-and-download-csv-with-javascript
// https://www.geeksforgeeks.org/how-to-create-and-download-csv-file-in-javascript/
// https://stackoverflow.com/questions/4617935/is-there-a-way-to-include-commas-in-csv-columns-without-breaking-the-formatting

// const { resolve } = require("path");
// const path = require("path");
// const fs = require("fs");

export default function formatCSV(formData, files) {
  var cvsHeaders = [
    "filepath", // FILES
    "client", // FORM
    "matter", // FORM
    "author", // FORM
    "doctype", // FORM
    "document name", // FILES
    "document extension", // FILES
    "folder", // FORM
  ];

  function charFix(string) {
  //   // return string.replace(/\ /g, `\\`);

    return string.replace(/,/g, "','")
      // replace(/\\/g, '\\\\').
      // replace(/\u0008/g, '\\b').
      // replace(/\b/g, '\\b').
      // replace(/\t/g, '\\t').
      // replace(/\n/g, '\\n').
      // replace(/\f/g, '\\f').
      // replace(/ `\` /g, '\' ').
      // replace(/\r/g, '\r').
      // replace(/'/g, '\\\'').
      // replace(/ \ /g, '\\').
      // replace(/,/g, "").
      // replace(/"/g, '\\"');
  }

  // CREATE EMPTY VAR OF .CSV DATA
  var csv = [];

  // PUSH HEADERS INTO .CSV DATA
  csv.push(cvsHeaders.join(","));
  // ROW THAT WILL BE USED TO INSERT DATA INTO .CSV
  var row = [];
  // FOR LOOP TO INSERT DATA OF EACH FILE + FORM DATA INTO 1 ROW
  // VAR THAT WILL TEMPORARILY HOLD ROW DATA
  for (var i = 0; i < files.length; i++) {


    // USING FUNCTION
    // row.push(`\"\r${charFix(files[i].webkitRelativePath)}\"`);
    // row.push(formData.client);
    // row.push(formData.matter);
    // row.push(formData.author);
    // row.push(formData.doctype);
    // row.push(`\"""${charFix(files[i].name)}\"""`);
    // row.push(`\"""${charFix(files[i].type)}\"""`);
    // row.push(`\"""${charFix(formData.netdocs)}\"""`);

    // ?
    // row.push(`\n`);
    // row.push(`"\"" \r${charFix(files[i].webkitRelativePath)}"\""`);
    // row.push(formData.client);
    // row.push(formData.matter);
    // row.push(formData.author);
    // row.push(formData.doctype);
    // row.push(`"\""${charFix(files[i].name)}"\""`);
    // row.push(`"\""${charFix(files[i].type)}"\""`);
    // row.push(`"\""${charFix(formData.netdocs)}"\""`);

    // ASK NETDOCS ABOUT COMMAS "/netdocs/Production_1,24/b\n"
    row.push(`\r /${files[i].webkitRelativePath}`.replace(/,/g, ""));
    row.push(formData.client.replace(/,/g, ""));
    row.push(formData.matter.replace(/,/g, ""));
    row.push(formData.author.replace(/,/g, ""));
    row.push(formData.doctype.replace(/,/g, ""));
    row.push(files[i].name.replace(/,/g, ""));
    row.push(files[i].type);
    row.push(formData.netdocs.replace(/,/g, ""));

    //PUSH NEW ROW INTO CSV
    csv.push(row.join(","));
    // CLEAR TEMP. ROW
    row.length = 0;
  }

  return csv;
}

// TESTING
// let testData = `Test, , Fix me,  /Files\Folders\gpu0//FOLDER2\rprdocution\n\p\h\r , /works`; // WORKS
// let testDatab = testData.replace(/works/g, "GREEN"); // WORKS
// let testDatab = testData.replace(/ \ /g, "?");
// console.log("gold: " +  slashesFix(testData));

// csv.push(`\"Test, ${testDatab}  \"`); // WORKS

// var test = "Hello, works! /netdocs \netdocs";
// test = test.replace(/,/g, "");
// csv.push( test);
