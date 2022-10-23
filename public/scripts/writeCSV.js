
// WRITE CSV LOAD FILE FUNC

// import path from "/node";

export default function writeCSV(data) {
  console.log("I'm inside writeCSV func!")

  const DOWNLOAD_LOADF = document.getElementById("load-f");

  console.log("Writing csv load file. . . ");
  var loadFile = null;
  var data = new Blob([data], { type: "text/csv" });

  if (loadFile !== null) {
    window.URL.revokeObjectURL(loadFile);
  }

  loadFile = window.URL.createObjectURL(data);

  DOWNLOAD_LOADF.style.display = "none";
  return loadFile;
}


