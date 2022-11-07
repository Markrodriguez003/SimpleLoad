
// import * as $ from "../../node_modules/jquery" 
export default function collapsible() {
  // var colMenu =  document.getElementsByClassName("collapsible");
  var colMenu = $(".collapsible");
  var colContent = $(".content");

  colMenu.click((e) => {
    // USE JQUERY HIDE()
    if (colContent.css("display") === "none") {
      // $("#file-menu-load").find("li").css("list-style-type", "square");
      colContent.css("display", "block");
      // colContent.find("li").css({
      //   "font-style": "italic",
      //   "color": "red",
      //   // "list-style-type": "square"
      // });
      // colContent.find('li:nth-child(even)').css("background-color", "lightgrey");
      // colContent.find('li').css("list-style-type", "circle");

    } else {
      colContent.css("display", "none");

    }


  })

  return false;

}