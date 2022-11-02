// PRINTING FILES TO BROWSER

export default function printFiles(files) {
  console.log("PRINTING FORM");

  var output = document.getElementById("file-menu-load");

  // ICONS ATTACH TO THE LEFT OF PRINTED FILES
  // VIDEO -> .gif, .avi, .mpeg, ect --> 🎞️
  // IMAGES  -> .png, .jpg, ect --> 🖻 🖼️
  // PDF ->  .tiff, .pdf, ect --> 🗒️
  // TEXT ->  .txt, .rtf, .md, ect --> 📝
  // COMPRESSED FILE --> .tar, .tarball, .zip, .rar, ect, --> 🗄️
  // OTHER DATA -> .dat, .file, ect --> 🗋
  //

  // ICONS FOR FILE TYPE
  var fileTypeIcon = {
    video: "🎞️",
    image: "🖼️",
    pdf: "🗒️",
    text: "📝",
    compressed: "🗋",
    data: "🗄️",
  };

  for (var i = 0; i < files.length; i++) {
    var item = document.createElement("li");
    item.style.listStyleType = "round";
    item.innerHTML = fileTypeIcon.pdf + " || /" + files[i].webkitRelativePath;
    output.appendChild(item);
  }
  var exampleData =
      "Loading File" +
      " " +
      files[5].webkitRelativePath +
      " " +
      files[5].name +
      " " +
      files[5].type +
      " " +
      files[5].size +
      " " +
      files[5].lastModified;
  console.log(exampleData);

  return false;
};
