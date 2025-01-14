// Get the modal
var modal = document.getElementById("help-modal");

// Get the button that opens the modal
var help = document.getElementById("help-icon");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
help.onclick = function () {
  console.log("User clicked to see help window");
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  console.log("User clicked to close help window");
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    console.log("User clicked to close help window");

    modal.style.display = "none";
  }
};
