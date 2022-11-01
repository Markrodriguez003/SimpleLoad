
  var $ = require("jquery");
module.exports.collapsible = function(){


  console.log("I am a function!")

// var colMenu =  document.getElementsByClassName("collapsible");
var colMenu = $(".collapsible");
var colContent = $(".content");

colMenu.click((e)=>{
console.log("Hello");
  
if(colContent.css("display") === "none"){
  // $("#file-menu-load").find("li").css("list-style-type", "square");
  colContent.css("display", "block");
  colContent.find("li").css({
    "font-style": "italic",
    "color": "red",
    // "list-style-type": "square"
  });
  colContent.find('li:nth-child(even)').css("background-color", "lightgrey");

} else{
  colContent.css("display", "none");

}
      
    
})

return false;

}