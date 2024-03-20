  if (typeof (hj) != "undefined" && hj.hasOwnProperty("globals")) {
    var hjUID = JSON.parse(localStorage.getItem("hjActiveViewportIds"))[0].id;
    outputhjUID = hjUID.split("-").shift();
    document.getElementById("hotjarid").textContent = outputhjUID;
  }else{
    continue
  }
console.log(outputhjUID)
