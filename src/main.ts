import {app, BrowserWindow, dialog, ipcMain, ipcRenderer} from 'electron'
import * as url from 'url'
import * as path from 'path'
import PortConnect from './system/PortConnect'
import {TableRegular, TablePersonal} from './system/Table'
import Auth from './system/Auth';
import BillingOperation from './system/BillingOpration'


// AppDataSource.initialize().then(async () => {

//     console.log("Inserting a new user into the database...")
//     const user = new User_Kasir()
//     user.id_user = "TEST"
//     user.nama = "Aye Shabira"
//     user.username = "aye"
//     user.password = "password"
//     user.jabatan = "Kasir"
//     await AppDataSource.manager.save(user)
//     console.log("Saved a new user with id: " + user.id)

//     console.log("Loading users from the database...")
//     const users = await AppDataSource.manager.find(User_Kasir)
//     console.log("Loaded users: ", users)

//     console.log("Here you can setup and run express / fastify / any other framework.")

// }).catch(error => console.log(error))


//init MainWindow
let win:any;
const gotTheLock = app.requestSingleInstanceLock();
app.on('ready', () => {
   win = new BrowserWindow({
        width:800,
        height:600,
        icon:path.join(__dirname, '..', '/public/assets/img/icon-desktop.png'),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            webSecurity: false
        }
    })

   win.loadURL('http://localhost:3000')

   win.on('closed', () => {
       win = null;
        app.quit();
    })
})

if (!gotTheLock) {
    app.quit();
} else {
    app.on("second-instance", () => {
        if (win) {
            if (win.isMinimized())win.restore();
           win.focus();
        }
    })
}

ipcMain.handle("get_data",async (event) => {
    return "HEHEHE";
})

//init Billing Arduino Port
var billingArduino:any;
const arduino = new PortConnect(billingArduino, 57600, "none", true, false, "COM3");
arduino.getConnect()
arduino.isOpen()

var table_01_time:any, table_02_time:any, table_03_time:any

//set Regular Timer Billing
ipcMain.handle("start", async (event, id_table:any, ms_all:any, ms_delay:any, blink:any, stop:any, add_on:any, ms_delay_add:any, ms_add:any, data_booking:any) => {
    if (id_table == "table001") {
        const table_01 = new TableRegular(id_table, ms_all, ms_delay, blink, arduino.path, win);
        if (stop === true) {
            table_01.stopTimer(table_01_time, true)
        } else {
            if (add_on === true) {
                table_01_time = table_01.addOn(ms_delay_add, ms_add);
            } else {
                table_01_time = await table_01.startTimer(data_booking);
            }
        }
    } else if (id_table == "table002") {
        const table_02 = new TableRegular(id_table, ms_all, ms_delay, blink, arduino.path, win);
        if (stop === true) {
            table_02.stopTimer(table_02_time, true);
        } else {
            if (add_on === true) {
                table_02_time = table_02.addOn(ms_delay_add, ms_add);
            } else {
                table_02_time = await table_02.startTimer(data_booking);
            }
        }
    } else if (id_table == "table003") {
        const table_03 = new TableRegular(id_table, ms_all, ms_delay, blink, arduino.path, win);
        if (stop === true) {
            table_03.stopTimer(table_03_time, true);
        } else {
            if (add_on === true) {
                table_03_time = table_03.addOn(ms_delay_add, ms_add);
            } else {
                table_03_time = await table_03.startTimer(data_booking);
            }
        }
    }
})

ipcMain.handle("login",async (event, username, password) => {
    const data_user = new Auth(username, password);
    return await data_user.goAuth()
})

ipcMain.handle("checkHarga", async(event, durasi) => {
    const bill = new BillingOperation();
    return await bill.checkHarga(durasi);
})