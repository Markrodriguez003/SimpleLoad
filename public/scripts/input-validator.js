// FORM VALIDATOR FOR 'Client' 'Matter' 'NetDocs Directory'
let CLIENT_INPUT = document.getElementById("client-code");
let C_WARNING = document.getElementById("client-warning");
let MATTER_INPUT = document.getElementById("matter-code");
let M_WARNING = document.getElementById("matter-warning");
var numbers = /^[0-9]+$/;

let NETDOCS_INPUT = document.getElementById("netdocs-directory");

// CLIENT INPUT VALIDATOR
CLIENT_INPUT.addEventListener("input", (e) => {
    e.preventDefault();
    e.stopPropagation();
    var input = document.getElementById("client-code");
   
  if(!CLIENT_INPUT.value.match(numbers) ) {
            console.log("CLIENT DIGITS " + CLIENT_INPUT.value.length)
            console.log("CLIENT IS " + CLIENT_INPUT.value)
            CLIENT_INPUT.style.borderColor="red";
            CLIENT_INPUT.style.Color="red";
            CLIENT_INPUT.style.backgroundColor="red";
            C_WARNING.style.display ="block"
        } 
    
    else {
            console.log("CLIENT IS EXACTLY 5 DIGITS")
            CLIENT_INPUT.style.borderColor="black";
            CLIENT_INPUT.style.Color="black";
            CLIENT_INPUT.style.backgroundColor="white";
            C_WARNING.style.display ="none"
        }

})


// MATTER INPUT VALIDATOR
MATTER_INPUT.addEventListener("input", (e) => {
    e.preventDefault();
    e.stopPropagation();
    var input = document.getElementById("matter-code");
   
    if(!MATTER_INPUT.value.match(numbers)) {
        console.log("CLIENT DIGITS " + MATTER_INPUT.value.length)
        console.log("CLIENT IS " + MATTER_INPUT.value)
        MATTER_INPUT.style.borderColor="red";
        MATTER_INPUT.style.Color="red";
        MATTER_INPUT.style.backgroundColor="red";
        M_WARNING.style.display ="block"
    } else {
        console.log("CLIENT IS EXACTLY 5 DIGITS")
        MATTER_INPUT.style.borderColor="black";
        MATTER_INPUT.style.Color="black";
        MATTER_INPUT.style.backgroundColor="white";
        M_WARNING.style.display ="none"

    }

})




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





