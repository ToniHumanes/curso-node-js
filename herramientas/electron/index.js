

const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', createWindow );

function createWindow(params) {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
    });

    mainWindow.loadFile('index.html');
}
