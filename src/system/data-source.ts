import "reflect-metadata"
import { DataSource, Table } from "typeorm"
import { User_Kasir } from "../entity/User_Kasir"
import { Booking } from "../entity/Booking"
import { Cart } from "../entity/Cart"
import { Detail_Booking } from "../entity/Detail_Booking"
import { Detail_Cafe } from "../entity/Detail_Cafe"
import { Harga_Billing } from "../entity/Harga_Billing"
import { Kategori_Menu } from "../entity/Kategori_Menu"
import { Menu } from "../entity/Menu"
import { Pesanan } from "../entity/Pesanan"
import { Settings } from "../entity/Settings"
import { Stok_Barang } from "../entity/Stok_Barang"
import { Stok_Masuk } from "../entity/Stok_Masuk"
import { Stok } from "../entity/Stok"
import { Struk } from "../entity/Struk"
import { Table_Billiard } from "../entity/Table_Billiard"
import { Waiting_List } from "../entity/Waiting_List"

const AppDataSource = async () => {
    const dataSourceConn = new DataSource({
        type: "sqlite",
        database: "./kasirv3.sqlite",
        synchronize: true,
        logging: false,
        entities: [
            User_Kasir,
            Booking,
            Cart,
            Detail_Booking,
            Detail_Cafe,
            Harga_Billing,
            Kategori_Menu,
            Menu,
            Pesanan,
            Settings,
            Stok_Barang,
            Stok_Masuk,
            Stok,
            Struk,
            Table_Billiard,
            Waiting_List
        ],
        migrations: [
            "./src/migrations/**/*.ts"
        ],
        subscribers: [
            "./src/subscriber/**/*.ts"
        ],
    })

    try {
        await dataSourceConn.initialize();
        console.log("Data Source has been initialized!");
        return dataSourceConn;
    } catch (err) {
        console.error("Error during Data Source initialization", err);        
    }
}

export const dataSource = AppDataSource();
