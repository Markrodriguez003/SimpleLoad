// PRINTING FILES TO BROWSER

export default function printFiles(files) {
  console.log("PRINTING FORM");

  var output = $("#file-menu-load");
  var iconSrc = "./public/images/icons/folder-outline.svg";
  var icon = $(
    `<img src="./public/images/icons/folder-outline.svg"></img>`
  ).addClass("svg-icon");

  //`<object data="./public/images/icons/folder-outline.svg" style="transform:scale(0.1)" "width="300" height="300"> </object>`
  for (var i = 0; i < files.length; i++) {
    output.append(
      $(`<li class="file-list-item"> ${files[i].webkitRelativePath} </li>`)
        // .text(`${files[i].webkitRelativePath}`)
        // .prepend(`<img src="./public/images/question.png" class="svg-icon" />`)
        
    );

    console.log("file: " + output);
    // var item = document.createElement("li");
    // var icon = document.createElement("img");
    // icon.src = "./public/images/icons/folder-outline.svg";
    // icon.className = "svg-icon";
    // item.style.listStyleType = "round";
    // item.innerHTML = " /" + files[i].webkitRelativePath;
    // output.appendChild(item);
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
}
