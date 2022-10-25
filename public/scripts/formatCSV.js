// REFERENCES
// https://code-maven.com/create-and-download-csv-with-javascript
// https://www.geeksforgeeks.org/how-to-create-and-download-csv-file-in-javascript/

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

  // CREATE EMPTY VAR OF .CSV DATA
  var csv = [];
  // PUSH HEADERS INTO .CSV DATA
  csv.push(cvsHeaders.join(","));
  // csv.push("\r ");
  // csv.push("\r Hello, works!"); // causes errors!
  // var test = "Hello, works! /netdocs \netdocs";
  // test = test.replace(/,/g, "");
  // csv.push( test);

  // FOR LOOP TO INSERT DATA OF EACH FILE + FORM DATA INTO 1 ROW
  // VAR THAT WILL TEMPORARILY HOLD ROW DATA
  for (var i = 0; i < files.length; i++) {
    var row = [];
    row.push(files[i].webkitRelativePath.replace(/,/g, ""));
    // row.push(toString(formData.client.replace(/,/g, "")));
    // row.push(toString(formData.matter.replace(/,/g, "")));
    // row.push(formData.author.replace(/,/g, ""));
    // row.push(formData.doctype.replace(/,/g, ""));
    // row.push(files[i].name.replace(/,/g, ""));
    // row.push(files[i].type.replace(/,/g, ""));
    // row.push(formData.netdocs.replace(/,/g, ""));

    //PUSH NEW ROW INTO CSV
    csv.push(row.join(","));
    csv.push("\r");

    // CLEAR TEMP. ROW
    row.length = 0;
  }

  return csv;
}

/*

  // console.log("Amount of files: " + files.length);

  // console.log("Test raw Object: " + formData);
  // console.log("Test JSON.Stringified Object: " +JSON.stringify(formData));

  // console.log("****************************************");
  // console.log("The single raw files: " + files[1]);
  // console.log("The single JSON.Stringified file: " + JSON.stringify(files[1]));
  // console.log("****************************************");
  // console.log("The Entire raw files: " + files);
  // console.log("The JSON.Stringified files: " + JSON.stringify(files[1]));
  // console.log ("whats keys inside: " + Object.keys(files));
  // console.log ("whats values inside: " + Object.values(files));
  // console.log ("whats values inside: " + JSON.stringify(Object.values(files)));
*/
