
// REFERENCES
// https://code-maven.com/create-and-download-csv-with-javascript
// https://www.geeksforgeeks.org/how-to-create-and-download-csv-file-in-javascript/

export default function formatCSV(formData, files) {

    // var testObject = {
    //     test: true,
    //     number: 245,
    //     text: "test"
    // }

  

    var data = [
        ["/myfilename/data/mainhub", "49008", "0001", "shapes", ".pdf", "/netdocs/folders/hellow"],
        ["/myfilename/data/mainhub", "49008", "0001", "triangles", ".docx", "/netdocs/folders/hellow"],
        ["/myfilename/data/mainhub", "49008", "0001", "armitures", ".txt", "/netdocs/folders/hellow"]
    ];
    
    
    var csv = 'filepath,client,matter,doctype,document name, document extension, folder,\n';
  
   
    // csv.push(headers.join(','));
    data.forEach(function(row){
        csv += row.join(',');
        csv += "\n";

    });


 
 

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




    return csv ;
}