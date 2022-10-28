import { dataSource } from "./data-source";
import { Harga_Billing } from "../entity/Harga_Billing";
import 'moment-timezone';
import moment from "moment";

class BillingOperation {
    async checkHarga(durasi:number):Promise<any> {
        let service = await dataSource;
        const jam = moment().tz("Asia/Jakarta");
        const jam_sekarang = jam.format("HH");

        const harga_detail = [];
        var total_harga = 0;


            for (var i = 0; i<durasi; i++) {
                const jam_estimasi = jam.set('minute', i * 60).format('HH');
            
                if (jam_estimasi <= '17') {
                    const result = await service.manager.find(Harga_Billing, {
                        where: {
                            tipe_durasi: "Siang"
                        }
                    });

                    harga_detail.push({'tipe': "Siang", harga: result[0].harga})
                    total_harga += result[0].harga;
                } else if (jam_estimasi >= '17') {
                    const result = await service.manager.find(Harga_Billing, {
                        where: {
                            tipe_durasi: "Malam"
                        }
                    })

                    harga_detail.push({'tipe': "Malam", harga: result[0].harga})
                    total_harga += result[0].harga;

                }
            }
        return {'response': true, harga_detail: harga_detail, total_harga: total_harga}
    }
}

export default BillingOperation

// const bill = new BillingOperation()
// const data = async () => {
//     console.log(await bill.checkHarga(3))
// }

// data()
