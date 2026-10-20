const { app, BrowserWindow } = require("electron");

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    title: "GTA5",
    autoHideMenuBar: true
  });

  win.loadURL("https://gta.ezgames.lol/");
});

app.on("window-all-closed", () => {
  app.quit();
});