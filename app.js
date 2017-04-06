const {app} = require('electron');
const {BrowserWindow} = require('electron');
const path = require('path');

//Launching the app
app.on('ready', () => {
	let win = new BrowserWindow({
		width: 800,
	    height: 600
	});
	win.loadURL('http://127.0.0.1:3000');
});


//After all windows of the app are closed
app.on('window-all-closed', () => {
	app.quit();

});