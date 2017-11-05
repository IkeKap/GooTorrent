chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
            console.log('url', message.torrent);
            sendResponse('got it');
            document.querySelectorAll('[name=torrentId]')[0].value = message.torrent;
        });
console.log('am alive')