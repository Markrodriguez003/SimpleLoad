// PRINTING FILES TO BROWSER
//REFERENCES
//https://www.youtube.com/watch?v=wmp18_OiRLk&ab_channel=CodingShiksha

// const app = required('electron');
// import {app} from "electron"
// const userHomePath = app.getPath('home');

export default function printFiles(files) {
  console.log("Printing Files. . . ");
  var output = document.getElementById("file-menu-load");

  //`<object data="./public/images/icons/folder-outline.svg" style="transform:scale(0.1)" "width="300" height="300"> </object>`
  for (var i = 0; i < files.length; i++) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(files[i].webkitRelativePath)); 
    output.appendChild(li);
  }

  //  OLD CODE
  //****************************************************************************** */

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
