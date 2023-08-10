//ポップアップ
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.runtime.sendMessage({ to_backscript: tabs[0].url });
    make_qr_code (tabs[0].url); 
        //console.log("URLをQR化できた");
});

function make_qr_code (text) {
    var qrcode = new QRCode (document.getElementById("qrcode"), {
        text: text,
        width: 128,   
        height: 128,
        colorDark: "#000000",  
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,   
    });
}   