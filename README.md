# Torrent_Extension
MAHacks project summer 2017. Won 4th place with it

To Set Up backend:

Open 3 instances of powershell. Use "npm start" command to run GUI of webtorrent on localhost:4000. Use "node .\index.js" command to run ESS on localhost:3000. Use "magnet-link http://my-server.com/file.torrent"  OR  "magnet-link ...\FileName.torrent" where ... means FileName Folder address.

To prepare frontend:

Open Chrome. Enter extensions menu and reload extension (RENAME TO FINAL. PACKAGE IF TIME). Go to Pirate bay and open Magnet Link in new tab. Open Dev tools/console (to demonstrate what the code is doing. Click Hello world icon to initiate extension. It should plug magnet link into entry prompt. All that needs to be done is to press start. If something bad happens at this stage, it is out of Client's hands (reliant on unrestricted internet connection to DHT nodes for bittorent protocol). 

For .Torrent Files (framework unfinished. requires semi-manual entry). Download file to local HD. use "magnet-link" command as referenced above. IF EXTRA TIME, ATTEMPT TO USE DOWNLOAD API TO MANIPULATE FILE into a specific directory.
