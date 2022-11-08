
// HANDLES COLLAPSIBLE MENU
export default function collapsible() {
  var colMenu = document.getElementById("collapsible");
  var colContent = document.getElementById("content");
  colMenu.addEventListener("click", (e) => {
    colContent.style.display === "none"
      ? (colContent.style.display = "block")
      : (colContent.style.display = "none");
  });
  return false;
}
