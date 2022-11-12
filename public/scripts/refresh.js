//********************************************************* */
// SETS FOOTER PROMPT MESSAGE
import footerPrompt from "./footerPrompt.js";
// RESETS PRINTED FILE ITEMS FROM PREVIOUS LOAD
import printFiles from "./printFiles.js";

//GRABS FORM ELEMENTS
const CLIENT_INPUT = document.getElementById("client-code");
const MATTER_INPUT = document.getElementById("matter-code");
const NETDOCS_INPUT = document.getElementById("netdocs-directory");
const DOCTYPE_SELECT = document.getElementById("doctype");
const AUTHOR_SELECT = document.getElementById("author");
const PRODUCTION_INPUT = document.getElementById("production-folder");
const refreshColor = "rgb(39, 111, 245)"
const LOGO = document.getElementById("loaderLogo");
var DOWNLOADCSV = document.getElementById("download-load-f");
const LOADBUTTON = document.getElementById("load-f");
const FILEBODYMSG = document.getElementById("contentMsg");
// FITS FORM ELEMENTS INTO ARRAY FOR LOOPING
const elementArry = [
  CLIENT_INPUT,
  MATTER_INPUT,
  NETDOCS_INPUT,
  DOCTYPE_SELECT,
  AUTHOR_SELECT,
  PRODUCTION_INPUT
];

// FUNCTION THAT RESETS FORM
export default function refresh(e) {

  // LOOPS THROUGH ARRAY AND RESETS VALUES/CSS 
  elementArry.forEach((v, i, a) => {
    a[i].value = "";
    a[i].style.borderColor = "rgb(133,133,133)";
    a[i].style.backgroundColor = "white";

  });

  // RESETS FILE INPUT
  PRODUCTION_INPUT.value = null;
  console.log("Page cleared and form resetted . . ");
  LOGO.src = "public/images/simpleloadguy..png";
  FILEBODYMSG.style.display = "block";
  // TURNS ON DOWNLOAD PRODUCTION LOAD FILE BUTTON
  DOWNLOADCSV.style.display = "none";
  LOADBUTTON.style.display = "block";


  //CALLS MESSAGE PROMPT FOOTER
  printFiles(PRODUCTION_INPUT.files);
  footerPrompt(refreshColor, "🔄 FORM HAS BEEN REFRESHED!");
}





