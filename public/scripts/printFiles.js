// PRINTING FILES TO BROWSER
//REFERENCES
//https://www.youtube.com/watch?v=wmp18_OiRLk&ab_channel=CodingShiksha

// const app = required('electron');
// import {app} from "electron"
// const userHomePath = app.getPath('home');
// `<object data="./public/images/icons/folder-outline.svg" style="transform:scale(0.1)" "width="300" height="300"> </object>`

const contentMsg = document.getElementById("contentMsg");
const output = document.getElementById("file-menu-load");
const returnArrow = document.getElementById("up-arrow");
export default function printFiles(files) {
  if (files.length > 0) {
    console.log("Printing Files. . . ");
    for (var i = 0; i < files.length; i++) {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(files[i].webkitRelativePath));
      output.appendChild(li);
    }
    contentMsg.style.display = "none";
    returnArrow.style.display = "inline";

  } else {
    // Remove all previous file names
    returnArrow.style.display = "none";
    output.innerHTML = "";


  }
  return false;
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
