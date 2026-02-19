 if (!document.getElementById("my-gif-overlay")){
    const img = document.createElement("img");
    img.id = "my-gif-overlay";
    img.src = chrome.runtime.getURL("GIF/MarcelineTheVamp.gif");
    
    img.alt = "Overlay GIF";

    document.body.appendChild(img);
 }