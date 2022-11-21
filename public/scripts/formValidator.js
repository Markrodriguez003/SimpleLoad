// FORM VALIDATOR
import footerPrompt from "../scripts/footerPrompt.js";
var CLIENT_INPUT = document.getElementById("client-code");
var MATTER_INPUT = document.getElementById("matter-code");
var NETDOCS_INPUT = document.getElementById("netdocs-directory");
const DOCTYPE_SELECT = document.getElementById("doctype");
const AUTHOR_SELECT = document.getElementById("author");
const PRODUCTION_INPUT = document.getElementById("production-folder");
var numbers = /^[0-9]+$/;
const ERRORCOLOR =  "rgba(212, 34, 34,1)";
const ERRORCOLORPANEL =  "rgba(212, 34, 34,0.4)";
const SUCCESSCOLOR = "rgba(1, 124, 4,1)"

const CLIENTMAX = 5;
const MATTERMAX = 4;


export default function formValidator() {
  var v = client_validator();
  var w = matter_validator();
  var x = author_validator();
  var y = doctypes_validator();
  var z = netdocs_validator();
  var zz = file_upload_validator();
 
  //LOGO
  const logo = document.getElementById("loaderLogo");

  if (
    v === true &&
    w === true &&
    x === true &&
    y === true &&
    z === true &&
    zz === true
  ) {
    footerPrompt(SUCCESSCOLOR, "✅ FILE SUCESSFULLY CONVERTED!");
    // TARGETS MAIN LOGO
    // CHANGES LOGO
    logo.src = "public/images/simpleloadguy-success..png";
    return {
      pass: true,
      client: CLIENT_INPUT.value,
      matter: MATTER_INPUT.value,
      netdocs: NETDOCS_INPUT.value,
      author: AUTHOR_SELECT.value,
      doctype: DOCTYPE_SELECT.value,
    };
  } else {
    logo.src = "public/images/simpleloadguy-failure..png";
    footerPrompt(ERRORCOLOR, "❌ ERRORS WERE FOUND IN THE FORM!");
    return {
      pass: false,
    };
  }
}

function client_validator() {
  if (CLIENT_INPUT.value.match(numbers) && CLIENT_INPUT.value.length === CLIENTMAX) {
    console.log("CLIENT IS EXACTLY 5 DIGITS!");
    return true;
  } else {
    console.log("CLIENT IS EXACTLY NOT 5 DIGITS!");
    CLIENT_INPUT.style.borderColor = ERRORCOLORPANEL;
    CLIENT_INPUT.style.backgroundColor = ERRORCOLORPANEL;
    return false;
  }
}

function matter_validator() {
  if (MATTER_INPUT.value.match(numbers) && MATTER_INPUT.value.length === MATTERMAX) {
    console.log("MATTER IS EXACTLY 4 DIGITS!");
    return true;
  } else {
    console.log("MATTER IS EXACTLY NOT 4 DIGITS!");
    MATTER_INPUT.style.borderColor = ERRORCOLORPANEL;
    MATTER_INPUT.style.backgroundColor = ERRORCOLORPANEL;
    return false;
  }
}

// && NETDOCS_INPUT.value === /^(\/?[a-z0-9]+)+$/
function netdocs_validator() {
  if (
    NETDOCS_INPUT.value != null &&
    NETDOCS_INPUT.value != undefined &&
    NETDOCS_INPUT.value != ""
  ) {
    console.log("NETDOCS FIELD IS FILLED!");
    return true;
  } else {
    console.log("NETDOCS FIELD IS NOT FILLED!");
    NETDOCS_INPUT.style.borderColor = ERRORCOLORPANEL;
    NETDOCS_INPUT.style.backgroundColor = ERRORCOLORPANEL;
    return false;
  }
}

function author_validator() {
  if (
    AUTHOR_SELECT.value != null &&
    AUTHOR_SELECT.value != undefined &&
    AUTHOR_SELECT.value != "" &&
    AUTHOR_SELECT.value != undefined
  ) {
    console.log("AUTHOR SELECTION IS FILLED!");
    return true;
  } else {
    AUTHOR_SELECT.style.borderColor = ERRORCOLORPANEL;
    AUTHOR_SELECT.style.backgroundColor = ERRORCOLORPANEL;
    console.log("AUTHOR SELECTION IS NOT FILLED!");
    return false;
  }
}

function doctypes_validator() {
  if (
    DOCTYPE_SELECT.value != null &&
    DOCTYPE_SELECT.value != "" &&
    DOCTYPE_SELECT.value != undefined
  ) {
    console.log("DOCTYPES SELECTION IS FILLED!");
    return true;
  } else {
    DOCTYPE_SELECT.style.borderColor = ERRORCOLORPANEL;
    DOCTYPE_SELECT.style.backgroundColor = ERRORCOLORPANEL;
    console.log("DOCTYPES SELECTION IS NOT FILLED!");
    return false;
  }
}

function file_upload_validator() {
  if (PRODUCTION_INPUT.files.length > 0) {
    console.log("PRODUCTION FOLDER HAS BEEN UPLOADED!");
    return true;
  } else {
    // DOCTYPE_SELECT.style.borderColor = "red";
    // DOCTYPE_SELECT.style.backgroundColor = "red";
    console.log("PRODUCTION FOLDER HAS NOT BEEN UPLOADED!");
    return false;
  }
}
