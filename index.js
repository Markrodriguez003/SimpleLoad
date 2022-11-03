const { app, BrowserWindow } = require('electron');
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 900,
        height:720,
        icon: __dirname + '/public/images/icon.ico',
        // webPreferences: {
        //     preload: path.join(__dirname, 'preload.js')
        //   }
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
  } catch (_) {}
