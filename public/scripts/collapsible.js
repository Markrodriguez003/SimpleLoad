// HANDLES COLLAPSIBLE MENU

export default function collapsible() {
  var colMenu = document.getElementById("collapsible");
  var colContent = document.getElementById("content");
  var arrow = document.querySelector("#collapsible,  span");
  colMenu.addEventListener("click", (e) => {
    console.log("User clicked on print collapsible");
    colContent.style.display === "none"
      ? ((colContent.style.display = "block"),
        (arrow.style.transform = "rotate(180deg)"))
      : ((colContent.style.display = "none"),
        (arrow.style.transform = "rotate(-180deg)"));
  });
  return false;
}
