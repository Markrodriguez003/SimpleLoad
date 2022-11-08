var ALL_INPUTS = document.querySelectorAll("input");

for (var i = 0; i < ALL_INPUTS.length; i++) {
  ALL_INPUTS &&
    ALL_INPUTS[i].addEventListener(
      "click",
      (e) => {
        // e.preventDefault();
        e.stopPropagation();
        console.log("Clicked on an input!");
        e.target.style.backgroundColor = "white";
      },
      false
    );
}

var ALL_SELECT = document.querySelectorAll("select");
for (var i = 0; i < ALL_SELECT.length; i++) {
    ALL_SELECT &&
    ALL_SELECT[i].addEventListener(
      "click",
      (e) => {
        // e.preventDefault();
        e.stopPropagation();
        console.log("Clicked on an select!");
        e.target.style.backgroundColor = "white";
      },
      false
    );
}

 