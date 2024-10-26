document.addEventListener("DOMContentLoaded", () => {
    if (!window.AppInventor) { // if not in the app, display page in a smaller width
        console.log("not in MIT AI2");
        document.body.style.maxWidth = "740px";
        document.body.style.margin = "auto";
        document.body.style.border = "1px solid black";
        document.body.style.borderRadius = "10px";
    }
});

function receive_message(message) {
    // if message if type of a dictionary, set message as value
    if (typeof message === "object") {
        message = message.scan_result;
    }
    fetch("http://192.168.1.43/medisafe?scan_result=" + message)
    //alert(message);
}

function send_message(message) {
    window.AppInventor.setWebViewString(message);
}