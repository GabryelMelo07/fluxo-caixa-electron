const { app, BrowserWindow, Menu, MenuItem } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1366,
        height: 768,
        resizable: false,
        icon: __dirname + "/public/img/logo-rr.png"
    })

    win.loadURL(`file://${__dirname}/public/index.html`)
}

const menu = Menu.buildFromTemplate([
    {
        label: "Opções",
        submenu: [
            {role: 'togglefullscreen'}
        ]
    }
])
Menu.setApplicationMenu(menu)

app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})