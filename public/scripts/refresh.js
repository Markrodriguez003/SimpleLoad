//********************************************************* */
import footerPrompt from "./footerPrompt.js";


// Add a way of clearing all forms and printed files?

 // REFRESH PAGE BUTTON
const refreshButton = document.getElementById("resetBtn");
// BUTTON THAT CLEARS FORM AND REFRESHES ENTIRE PAGE.
refreshButton &&
  refreshButton.addEventListener("click", (e) => {
    e.preventDefault(); // Eliminates previous HTTP headers
    location.reload(); // Refresh entire page
    console.log("Page cleared and form resetted . . ")
    footerPrompt("cornflowerblue", "🔄 FORM HAS BEEN REFRESHED!");
  });

 
