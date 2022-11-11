const { app, BrowserWindow, remote } = require('electron');
const path = require('path');

let userHomePath = app.getPath('home');

// ELECTRON HOT-LOAD
try {
    require('electron-reloader')(module);
} catch { }

const createWindow = () => {
    const win = new BrowserWindow({
        width: 900,
        height: 565,
        icon: __dirname + '/public/images/icon.ico',
        webPreferences: {
            nodeIntegration: false,
            preload: __dirname + '/preload.js'
        },
        resizable: false
    })
    win.webContents.openDevTools();
    win.loadFile('index.html')
}

app.disableHardwareAcceleration()
app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
})

try {
    require('electron-reloader')(module)
} catch (_) { }


