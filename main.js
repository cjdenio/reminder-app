const { app, BrowserWindow, Notification, ipcMain } = require('electron')

app.on("ready", function () {
    var mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true
        }
    })
    mainWindow.loadFile('dist/index.html')
    //mainWindow.setMenu(null)
})

ipcMain.on("notify", function (e, args) {
    var notification = new Notification({
        title: "Alert",
        body: args
    })
    notification.show()
    notification.on("click", function(e, index){
        console.log("yeah")
    })
})