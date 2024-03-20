var hjUID = JSON.parse(localStorage.getItem("hjActiveViewportIds"))[0].id
outputhjUID = hjUID.split("-").shift();
document.getElementById("hotjarid").textContent = outputhjUID

console.log(document.getElementById("hotjarid").innerText)
