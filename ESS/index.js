const express = require('express');
const app = express();

/**
 * takes a encoded magnet link and downloads the torrent file
**/
app.get('/download/torrent/:path', function (req, res) {
 // expect link to be a string that has been 
    // encoded by encodeURIComponent() so we will
    // decode it with decodeURIComponent
   
     const path = decodeURIComponent(req.params.path);
    let link;
    
    const magnetizer = path => {
      var magnetLink = require('magnet-link')
      //    http://releases.ubuntu.com/16.04/ubuntu-16.04.2-desktop-amd64.iso.torrent
      //    is example of good url
      magnetLink('C:\Users\Isaac\Documents\Torrent_Extension\test', function (err, link) {
  // you got a magnet link from a local torrent file
})

      
    };
    

    if (/^magnet:/.test(path)) {
        link = path;
    } else {
        link = magnetizer(path);
    }
    console.log('link', link);

  res.set('Access-Control-Allow-Origin', '*' )
  res.send(path)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})