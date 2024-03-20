var generateIDBtn = document.getElementById('generateHJUID');
function getHotjarID() {
    var hjUID = JSON.parse(localStorage.getItem("hjActiveViewportIds"))[0].id;
    outputhjUID = hjUID.split("-").shift();
    document.getElementById("hotjarid").textContent = outputhjUID;
    }
console.log(outputhjUID)
////////////////////////////
    // function stringHotjarID() {
    //     if (typeof (hj) != "undefined" && hj.hasOwnProperty("globals")) {
    //     var hjUID = JSON.parse(localStorage.getItem("hjActiveViewportIds"))[0].id;
    //     outputhjUID = hjUID.split("-").shift();
    //     localStorage.setItem("sessionID", outputhjUID);
    // }
    
    // function getHotjarID() {
    //     var sessionID = JSON.parse(localStorage.getItem("sessionID");
    //     document.getElementById("hotjarid").textContent = sessionID;
    //     console.log(sessionID)
    // }

// if (typeof (hj) != "undefined" && hj.hasOwnProperty("globals")) {
//     var hjUID = JSON.parse(localStorage.getItem("hjActiveViewportIds"))[0].id;
//     outputhjUID = hjUID.split("-").shift();
//     document.getElementById("hotjarid").textContent = outputhjUID;
//     }
//     console.log(outputhjUID)
