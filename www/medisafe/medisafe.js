function init_local() {
    functionHolder.set_nfc_dealer(manage_nfc_result);
    console.log("init_local");
    send_message("read_nfc");
}

function manage_nfc_result(message) {
    alert(message);
    const msg = document.createElement("p");
    msg.innerText = message;
    document.getElementById("nfc").appendChild(msg);
    document.getElementById("bottom-image").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    const script = document.createElement("script");
    script.src = "../js/general_logic.js";script.onload = () => {
        if (typeof trigger_script === "function") {
            trigger_script();  // Appeler trigger_script après que le script est chargé
        } else {
            console.error("trigger_script n'est pas défini.");
        }
    };
    document.head.appendChild(script);
});
