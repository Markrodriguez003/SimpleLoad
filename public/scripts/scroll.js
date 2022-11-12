

const upArrow = document.getElementById("up-arrow");
const downArrow = document.getElementById("down-arrow");
document.addEventListener("scroll", (e) => {

    console.log("Amount of scroll height pixel --> " + scrollY);
    scrollY >= 275
        ? (upArrow.style.display = "inline",
            downArrow.style.display = "none")
        : (upArrow.style.display = "none",
            downArrow.style.display = "inline")

})
