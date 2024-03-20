function getHotjarID() {
try {
  if (typeof (hj) != "undefined" && hj.hasOwnProperty("globals")) {
    var hjUID = JSON.parse(localStorage.getItem("hjActiveViewportIds"))[0].id;
    outputhjUID = hjUID.split("-").shift();
    document.getElementById("hotjarid").textContent = outputhjUID;
  }
    } catch (err) {
      /** ignore **/
    }
console.log(document.getElementById("hotjarid").innerText)
}
