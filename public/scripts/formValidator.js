// FORM VALIDATOR
import  footerPrompt  from "../scripts/footerPrompt.js";

export default function formValidator() {
  var CLIENT_INPUT = document.getElementById("client-code");
  var C_WARNING = document.getElementById("client-warning");
  var MATTER_INPUT = document.getElementById("matter-code");
  var M_WARNING = document.getElementById("matter-warning");
  var NETDOCS_INPUT = document.getElementById("netdocs-directory");
  var N_WARNING = document.getElementById("netdocs-warning");
  const DOCTYPE_SELECT = document.getElementById("doctype");
  var D_WARNING = document.getElementById("doctype-warning");
  const AUTHOR_SELECT = document.getElementById("author");
  var A_WARNING = document.getElementById("author-warning");

  var numbers = /^[0-9]+$/;

  if (!CLIENT_INPUT.value.match(numbers)) {
    console.log("CLIENT DIGITS " + CLIENT_INPUT.value.length);
    console.log("CLIENT IS " + CLIENT_INPUT.value);
    CLIENT_INPUT.style.borderColor = "red";
    CLIENT_INPUT.style.backgroundColor = "red";
    footerPrompt("red", "❌ ERRORS WERE FOUND IN THE FORM!");
    // CLIENT_INPUT.style.Color = "red";
    // C_WARNING.style.display = "block";
  } else {
    console.log("CLIENT IS EXACTLY 5 DIGITS");
    CLIENT_INPUT.style.borderColor = "black";
    CLIENT_INPUT.style.Color = "black";
    CLIENT_INPUT.style.backgroundColor = "white";
    // C_WARNING.style.display = "none";

    footerPrompt("green", "✅ FILE SUCESSFULLY CONVERTED!");
  }

  return {
    pass: true,
    client: CLIENT_INPUT.value,
    matter: MATTER_INPUT.value,
    netdocs: NETDOCS_INPUT.value,
    author: AUTHOR_SELECT.value,
    doctype: DOCTYPE_SELECT.value,
  }; // returns author, netdocs, doctype, matter, client
}

// MATTER INPUT VALIDATOR
// MATTER_INPUT.addEventListener("input", (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     var input = document.getElementById("matter-code");

//     if (!MATTER_INPUT.value.match(numbers)) {
//         console.log("CLIENT DIGITS " + MATTER_INPUT.value.length)
//         console.log("CLIENT IS " + MATTER_INPUT.value)
//         MATTER_INPUT.style.borderColor = "red";
//         MATTER_INPUT.style.Color = "red";
//         MATTER_INPUT.style.backgroundColor = "red";
//         M_WARNING.style.display = "block"
//     } else {
//         console.log("CLIENT IS EXACTLY 5 DIGITS")
//         MATTER_INPUT.style.borderColor = "black";
//         MATTER_INPUT.style.Color = "black";
//         MATTER_INPUT.style.backgroundColor = "white";
//         M_WARNING.style.display = "none"

//     }

// })

/* **********************
if(CLIENT_INPUT.value.length != 5) {
    console.log("CLIENT DIGITS " + CLIENT_INPUT.value.length)
    console.log("CLIENT IS " + CLIENT_INPUT.value)
    CLIENT_INPUT.style.borderColor="red";
    CLIENT_INPUT.style.Color="red";
    CLIENT_INPUT.style.backgroundColor="red";
    C_WARNING.style.display ="block"
} 
*/
