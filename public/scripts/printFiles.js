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


  //`<object data="./public/images/icons/folder-outline.svg" style="transform:scale(0.1)" "width="300" height="300"> </object>`
  for (var i = 0; i < files.length; i++) {
    var item = document.createElement("li");
    var icon = document.createElement("img")
    icon.src = "./public/images/icons/folder-outline.svg";
    icon.className = "svg-icon";
    item.style.listStyleType = "round";
    item.innerHTML = " /" + files[i].webkitRelativePath;
    item.ChildNode.before(icon);
    output.appendChild(item);
  }
  // var exampleData =
  //     "Loading File" +
  //     " " +
  //     files[5].webkitRelativePath +
  //     " " +
  //     files[5].name +
  //     " " +
  //     files[5].type +
  //     " " +
  //     files[5].size +
  //     " " +
  //     files[5].lastModified;
  // console.log(exampleData);

  return false;
};
