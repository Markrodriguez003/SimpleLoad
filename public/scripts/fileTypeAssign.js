export default function fileTypeAssign(file) {
  var imgItem = document.createElement("img");
  console.log("The file type is: " + file);

  imgItem.setAttribute("class", "file-img");

  // Add a way of evaulating filetypes that are 1 & 2 syllable file extensions like "r" and "py"
  switch (file.slice(-4)) {
    case ".pdf":
      imgItem.setAttribute("src", "./public/images/icons/png/pdf.png");
      break;
    case ".xd2":
      imgItem.setAttribute("src", "./public/images/icons/png/adobe.png");
      break;
    case ".txt":
    case ".rtf":
      imgItem.setAttribute("src", "./public/images/icons/png/document.png");
      break;
    case ".xls":
    case "xlsx":
      imgItem.setAttribute("src", "./public/images/icons/png/excel.png");
      break;
    case ".ppt":
    case "pptx":
    case "pptm":
      imgItem.setAttribute("src", "./public/images/icons/png/powerpoint.png");
      break;
    case ".eml":
    case ".msg":
    case ".pst":
      imgItem.setAttribute("src", "./public/images/icons/png/email.png");
      break;
    case "docx":
    case ".doc":
      imgItem.setAttribute("src", "./public/images/icons/png/word.png");
      break;
    case ".tar":
    case ".zip":
    case ".rar":
      imgItem.setAttribute("src", "./public/images/icons/png/compressed.png");
      break;
    case ".bmp":
    case ".gif":
    case ".png":
    case ".jpeg":
    case ".jpg":
    case ".ico":
    case ".svg":
    case "tiff":
      imgItem.setAttribute("src", "./public/images/icons/png/image.png");
      break;
    case ".exe":
    case ".dmg":
      imgItem.setAttribute("src", "./public/images/icons/png/install.png");
      break;
    case ".wav":
    case ".mp3":
    case ".ogg":
    case ".cda":
    case "aiff":
    case "aiac":
    case "alac":
    case "aifc":
    case "flac":
    case ".aac":
      imgItem.setAttribute("src", "./public/images/icons/png/audio.png");
      break;
    case ".mp4":
    case ".mp2":
    case ".asf":
    case ".wmv":
    case ".wma":
    case ".avi":
    case "midi":
    case ".mid":
    case ".mov":
    case ".m4a":
    case ".mpv":
    case "mp4v":
    case "mpeg":
    case ".3gp":
    case "3gpp":
    case "3gp2":
    case ".3g2":
    case ".mpg":
      imgItem.setAttribute("src", "./public/images/icons/png/video.png");
      break;
    default:
      imgItem.setAttribute("src", "./public/images/icons/png/unknown.png");
  }

  return imgItem;
}
