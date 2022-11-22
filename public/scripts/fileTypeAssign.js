export default function fileTypeAssign(file) {
  var imgItem = document.createElement("img");
  console.log("The file type is: " + file);

  imgItem.setAttribute("class", "file-img");

  switch (file.slice(-4)) {
    case ".pdf":
      imgItem.setAttribute("src", "./public/images/icons/png/pdf.png");
      break;
    case ".txt":
    case ".rtf":
      imgItem.setAttribute("src", "./public/images/icons/png/txt.png");
      break;
    case ".xls":
    case "xlsx":
      imgItem.setAttribute("src", "./public/images/icons/png/xls.png");
      break;
    case ".ppt":
    case "pptx":
      imgItem.setAttribute("src", "./public/images/icons/png/pptx.png");
      break;
    case "docx":
      imgItem.setAttribute("src", "./public/images/icons/png/docx.png");
      break;
    default:
      imgItem.setAttribute("src", "./public/images/icons/png/doc.png");
  }

  return imgItem;
}
