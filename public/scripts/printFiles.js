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
      var imgItem = document.createElement("img");
      imgItem.setAttribute("class", "file-img");
      imgItem.setAttribute("src", "./public/images/icons/png/xaml.png");
      // li.before(imgItem);
      li.appendChild(imgItem);
      li.appendChild(document.createTextNode(`${files[i].webkitRelativePath}`));
      li.appendChild(document.createTextNode(`${files[i].size}`));
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
      output.lastElementChild.scrollIntoView();
      //  downArrow.style.display = "none";
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
