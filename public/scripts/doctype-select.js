  //********************************************************* */
  // SELECT OPTION FOR DOCTYPE
  const DOCTYPE_SELECT = document.getElementById("doctype");
  DOCTYPE_SELECT.addEventListener(
    "click",
    function (event) {
      for (var x = 0; x < dTypes.length; x++) {
        var option = document.createElement("option");
        option.innerHTML = dTypes.sort()[x];
        option.value = dTypes[x];
        DOCTYPE_SELECT.appendChild(option);
      }
    },
    false
  );
  //********************************************************* */