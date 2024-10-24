// if the website is not accessed via mit ai2 application, force max width to 600px

document.addEventListener("DOMContentLoaded", () => {
    if (window.AppInventor) {
        console.log("in MIT AI2");
        ini_mit();
    } else {
        ini_mit();
        console.log("not in MIT AI2");
        document.body.style.maxWidth = "740px";
        document.body.style.margin = "auto";
        document.body.style.border = "1px solid black";
        document.body.style.borderRadius = "10px";
    }
});

// Execute after load in webview
document.addEventListener("DOMContentLoaded", () => {
});

function ini_mit() {
    element = document.createElement("input");
    element.id = "transmitter";
    element.type = "text";
    element.name = "transmitter";
    document.body.appendChild(element);
    document.getElementById("transmitter").value = "transmitter";
    document.getElementById("transmitter").addEventListener("change", function() {
        document.getElementById("test").style.backgroundColor = "red";
    });
}

function receive_message(message) {
    // if message if type of a dictionary, set message as value
    if (typeof message === "object") {
        message = message.scan_result;
    }
    
    document.getElementById("transmitter").value = message;
}

function send_message(message) {
    window.AppInventor.setWebViewString(message);
}