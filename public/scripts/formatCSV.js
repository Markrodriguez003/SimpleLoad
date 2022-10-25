// REFERENCES
// https://code-maven.com/create-and-download-csv-with-javascript
// https://www.geeksforgeeks.org/how-to-create-and-download-csv-file-in-javascript/

export default function formatCSV(formData, files) {
  var formData = {
    filepath: "/test/hub/folder1",
    client: "48009",
    matter: "0009",
    doctype: "Doc",
    "document name": "Test.pdf",
    "document extension": ".pdf",
    folder: "/netdocs/directoryB",
  };

  var cvsHeaders = [
    "filepath",
    "client",
    "matter",
    "doctype",
    "document name",
    "document extension",
    "folder",
  ];

   

  var csv = [];
  csv.push(cvsHeaders.join(","));


  // console.log("Amount of files: " + files.length);

  // console.log("Test raw Object: " + testObject);
  // console.log("Test JSON.Stringified Object: " +JSON.stringify(testObject));

  // console.log("****************************************");
  // console.log("The single raw files: " + files[1]);
  // console.log("The single JSON.Stringified file: " + JSON.stringify(files[1]));
  // console.log("****************************************");
  // console.log("The Entire raw files: " + files);
  // console.log("The JSON.Stringified files: " + JSON.stringify(files[1]));
  // console.log ("whats keys inside: " + Object.keys(files));
  // console.log ("whats values inside: " + Object.values(files));
  // console.log ("whats values inside: " + JSON.stringify(Object.values(files)));

  // for (var i = 0; i < files.length; i++) {
  //     formattedData = formattedData +
  //         "\r" +
  //         files[i].webkitRelativePath +
  //         "," + "\r " +
  //         formData.client +
  //         "," + "\r" +
  //         formData.matter +
  //         "," + "\r" +
  //         formData.docType +
  //         "," + "\r" +
  //         files[i].name +
  //         "," + "\r" +
  //         files[i].type +
  //        "," + "\r" +
  //         formData.netDocs +
  //         "," +
  //         formData.author;

  // }

  return csv;
}
