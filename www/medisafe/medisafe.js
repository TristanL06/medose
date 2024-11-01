function send_message(message) {
    console.log("sending message: " + message);
    if (window.AppInventor) {
        window.AppInventor.setWebViewString(message);
    }
}

function nfc_dealer(message, id) {
    if (id === "1") {
        document.getElementById("nfc").innerHTML = "";
    }
    const msg = document.createElement("p");
    msg.innerText = "nfc " + id + " : " + String(message);
    document.getElementById("nfc").appendChild(msg);
}

function barcode_dealer(message) {
    const msg = document.createElement("p");
    msg.innerText = "barcode : " + message;
    document.getElementById("nfc").appendChild(msg);
}

function receive_message(message) {
    if (typeof message === "object") {
        document.getElementById("bottom-image").style.display = "none";
        if (message.nfc_result !== undefined) {
            nfc_dealer(message.nfc_result, message.block_id);
        } else if (message.barcode_result !== undefined) {
            barcode_dealer(message.barcode_result);
        }
    }
}

// Charger le script lorsqu'on est prêt
document.addEventListener("DOMContentLoaded", () => {
    if (!window.AppInventor) {
        document.body.style.maxWidth = "480px";
        document.body.style.margin = "auto";
        document.body.style.border = "1px solid black";
        document.body.style.borderRadius = "10px";
    } else {
        send_message("read_nfc");
    }

    document.getElementById("medisafe_logo").addEventListener("click", () => { 
        send_message("read_barcode");
    });
});