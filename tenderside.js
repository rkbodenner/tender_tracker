chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        sendResponse({
            ticketTitle: document.getElementsByTagName("title")[0].innerText.split(" / ")[0],
            ticketUrl: document.documentURI
        });
    }
);