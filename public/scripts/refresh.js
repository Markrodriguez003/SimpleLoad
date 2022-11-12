//********************************************************* */
import footerPrompt from "./footerPrompt.js";
const CLIENT_INPUT = document.getElementById("client-code");
const MATTER_INPUT = document.getElementById("matter-code");
const NETDOCS_INPUT = document.getElementById("netdocs-directory");
const DOCTYPE_SELECT = document.getElementById("doctype");
const AUTHOR_SELECT = document.getElementById("author");
const PRODUCTION_INPUT = document.getElementById("production-folder");
const refreshColor = "rgb(39, 111, 245)"

const elementArry = [
  CLIENT_INPUT,
  MATTER_INPUT,
  NETDOCS_INPUT,
  DOCTYPE_SELECT,
  AUTHOR_SELECT,
  PRODUCTION_INPUT
];

export default function refresh(e) {

  elementArry.forEach((v,i,a)=>{
    a[i].value = "";
    a[i].style.borderColor = "rgb(133,133,133)";
    a[i].style.backgroundColor = "white";

  }); 
     
  PRODUCTION_INPUT.value = null;
  console.log("Page cleared and form resetted . . ")
  footerPrompt(refreshColor, "🔄 FORM HAS BEEN REFRESHED!");
}
 

 


 