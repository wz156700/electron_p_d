// 桥

const { contextBridge, ipcRenderer } = require('electron');

const open = () => {
    console.log('0');
}

contextBridge.exposeInMainWorld('myApi', {
    open
})