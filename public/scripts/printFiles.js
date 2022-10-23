// PRINTING FILES TO BROWSER
export default function printFiles(files) {
    console.log("VALIDATING FORM")

    var output = document.querySelector("ul");

    for (var i = 0; i < files.length; i++) {
        var item = document.createElement("li");

        item.style.listStyleType = "none";
        item.innerHTML = "/" + files[i].webkitRelativePath;
        output.appendChild(item);
    }
    // var exampleData =
    //     "Loading File" +
    //     " " +
    //     files[5].webkitRelativePath +
    //     " " +
    //     files[5].name +
    //     " " +
    //     files[5].type +
    //     " " +
    //     files[5].size +
    //     " " +
    //     files[5].lastModified;
    // console.log(exampleData);

    return false;
}