let timeoutId;
let gotResponse;
let callCount = 0;
const sendMessage = (tabId, text) => {
    const doSend = () => {
        callCount++;
        if (gotResponse || callCount > 10) {
            return;
        }
        chrome.tabs.sendMessage(tabId, {torrent: text}, null, response => {
            gotResponse = true;
        });
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            doSend();
        }, 500);
    };
    setTimeout(doSend, 1000);

};
const essCallback = (tabId, response) => {
    response.text().then(sendMessage.bind(null, tabId));
};
document.addEventListener('DOMContentLoaded', () => {
    const headers = new Headers();
    const init = {
        method: 'GET',
        headers: headers,
        mode: 'cors',
        cache: 'default'
    };
    chrome.tabs.getSelected(null, tab => {
        tabUrl = tab.url;
        chrome.tabs.update(tab.id, {url: 'http://localhost:4000'});
        const url = 'http://localhost:3000/download/torrent/' + encodeURIComponent(tabUrl);
        fetch(url, init).then(essCallback.bind(null, tab.id));
    });
});
