
// WRITE CSV LOAD FILE FUNC

// import path from "/node";

export default function writeCSV(data) {

  const DOWNLOAD_LOADF = document.getElementById("load-f");

  console.log("Writing csv load file. . . ");
  var loadFile = null;
  // var universalBOM = "\uFEFF";
  // var csvString = 'ı,ü,ü,ğ,ş,#Hashtag,ä,ö';
  var data = new Blob([data], { type: "text/csv" });

  if (loadFile !== null) {
    window.URL.revokeObjectURL(loadFile);
  }

  loadFile = window.URL.createObjectURL(data);

  DOWNLOAD_LOADF.style.display = "none";
  DOWNLOAD_LOADF.setAttribute('href', 'data:text/csv; charset=utf-8,' + encodeURI(loadFile));
  // DOWNLOAD_LOADF.setAttribute('download', 'loadfile.csv');
  return loadFile;
}


