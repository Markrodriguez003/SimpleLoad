// PRINTING FILES TO BROWSER
//REFERENCES
//https://www.youtube.com/watch?v=wmp18_OiRLk&ab_channel=CodingShiksha

// const app = required('electron');
// import {app} from "electron"
// const userHomePath = app.getPath('home');

export default function printFiles(files) {
  console.log("Printing Files. . . ");
  // var dire
  var output = $("#file-menu-load");
  var item = $("<li> </li>").setAttr;

  //`<object data="./public/images/icons/folder-outline.svg" style="transform:scale(0.1)" "width="300" height="300"> </object>`
  for (var i = 0; i < files.length; i++) {
    var item = files[i];
    output.append(`<li> ${userHomePath}/${files[i].webkitRelativePath} </li>`);
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
