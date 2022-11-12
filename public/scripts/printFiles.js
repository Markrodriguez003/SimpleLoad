// PRINTING FILES TO BROWSER
//REFERENCES
//https://www.youtube.com/watch?v=wmp18_OiRLk&ab_channel=CodingShiksha

// const app = required('electron');
// import {app} from "electron"
// const userHomePath = app.getPath('home');
// `<object data="./public/images/icons/folder-outline.svg" style="transform:scale(0.1)" "width="300" height="300"> </object>`

const contentMsg = document.getElementById("contentMsg");
const output = document.getElementById("file-menu-load");
const downArrow = document.getElementById("down-arrow");
export default function printFiles(files) {
  if (files.length > 0) {
    console.log("Printing Files. . . ");
    for (var i = 0; i < files.length; i++) {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(files[i].webkitRelativePath));
      output.appendChild(li);
    }
    contentMsg.style.display = "none";
    downArrow.style.display = "inline";

  } else {
    // Remove all previous file names
    downArrow.style.display = "none";
    output.innerHTML = "";
  }


  if (downArrow.style.display === "inline") {
    downArrow.addEventListener("click", (e) => {
      // var lastItem = output[output.length - 1];
      output.lastElementChild.scrollIntoView();
      // console.log("Scrolling down to " + output.lastElementChild.innerHTML);
    })
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
