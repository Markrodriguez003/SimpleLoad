// const browserify = require("browserify");
// const { app, BrowserWindow } = require("electron");
import { app, BrowserWindow } from ("electron");
import browserify from ("browserify");

const createWindow = () => {
  const appWindow = new BrowserWindow({
    width: 700,
    height: 500,
  });

  appWindow.loadFile("./public/main.html");
};

app.whenReady().then(() => {
  createWindow();


  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
  });

  
  app.on ('active', ()=>{
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
});

 