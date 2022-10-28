import { dataSource } from "./data-source";
import { Table_Billiard } from "../entity/Table_Billiard";
import { Booking } from "../entity/Booking";
import shortid from 'shortid'

class TableRegular {
    private ms_all:number;
    private ms_delay:number;
    blink: boolean;
    private id_table:string;
    port:any;
    table_timer:any;
    table_diff:any;
    win:any;
    table_number:string;

    constructor(id_table:string, ms_all:number, ms_delay:number, blink:boolean, port:any, win:any){
        this.ms_all = ms_all;
        this.ms_delay = ms_delay;
        this.blink = blink;
        this.id_table = id_table;
        this.port = port;
        this.win = win;
        this.table_number = this.id_table.split('table0').join('');
    }

    timerInit(diff:any, duration:any, start:any):void {
        this.table_timer = () => {
            diff = duration - (((Date.now() - start) / 1000) | 0);
            var hours:any = (diff / 3600) | 0;
            var min:any = ((diff % 3600) / 60) | 0;
            var sec:any = diff % 60 | 0;

            hours = hours < 10 ? "0" + hours : hours;
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;

            console.log(`${this.id_table} => ${hours}:${min}:${sec}`);
            this.win.webContents.send(
                `${this.id_table}`,
                {reponse: true, data: `${hours}:${min}:${sec}`},
            );

            this.table_diff += diff
            this.ms_all--;

            if (diff <= 0) {
                this.stopTimer(this.table_timer, true);
            }
        }
    }

    async startTimer(data_booking:any):Promise<any> {
        const turn_all = this.ms_all + this.ms_delay;
        const count_time = turn_all / 3600000;
        const duration = 3600 * count_time;
        let start = Date.now();
        let diff, min, sec;

        const id_booking = shortid.generate();

        (await dataSource).createQueryBuilder().update(Table_Billiard).set({
            id_booking: "TEST",
            status: "active",
        }).where('id_table = :id', {id: this.id_table}).execute();
        
        (await dataSource).createQueryBuilder().insert().into(Booking).values({
            id_booking: id_booking,
            id_member: '',
            nama_booking: data_booking.nama,
            id_table: this.id_table,
            durasi_booking: data_booking.durasi_booking,
            total_harga: data_booking.total_harga,
            uang_cash: 0,
            tipe_booking: data_booking.tipe_booking,
            user_in: data_booking.user_in
        }).execute();

        this.timerInit(diff, duration, start)
        this.table_timer = setInterval(this.table_timer, 1000);
        this.port.write(`on ${this.table_number}`);
        return this.table_timer;
    }

    addOn(ms_delay:number, ms_add:number) {
        this.stopTimer(this.table_timer, false);
        const turn_all = ms_add + ms_delay + this.ms_all;
        const count_time = turn_all / 3600000;
        const duration = 3600 * count_time;
        let start = Date.now();
        let diff, min, sec;

        this.timerInit(diff, duration, start)
        this.table_timer = setInterval(this.table_timer, 1000);
    }

    stopTimer(table_timer:any, turn_off:boolean) {
        clearInterval(table_timer)
        console.log('Time stoped');
        if (turn_off === true) {
            this.port.write(`of ${this.table_number}`);
        }

        this.win.webContents.send(
            `${this.id_table}`,
            {reponse: false, data: `Time stoped`},
          );
    }

    get getTable():string {
        return this.id_table;
    }

    get getMsAll():number {
        return this.ms_all;
    }

    get getMsDelay():number {
        return this.ms_delay;
    }

    get getIdTable():string {
        return this.id_table;
    }
}



class TablePersonal extends TableRegular {
    table_timer_2:any;
    constructor(id_table:string, port:any, win:any) {
        super(id_table, 0, 0, false, port, win);
    }

    timerInit(): void {
        var milliseconds = 0;
        var seconds = 0;
        var minutes = 0;
        var hours = 0;

        this.table_timer_2 = () => {
            milliseconds += 1000;
            if (milliseconds == 1000) {
              milliseconds = 0;
              seconds++;
              if (seconds == 60) {
                seconds = 0;
                minutes++;
                if (minutes == 60) {
                  minutes = 0;
                  hours++;
                }
              }
            }
            let h = hours < 10 ? "0" + hours : hours;
            let m = minutes < 10 ? "0" + minutes : minutes;
            let s = seconds < 10 ? "0" + seconds : seconds;

            console.log(`${this.getIdTable} => ${h}:${m}:${s}`);
          };

          this.table_timer = setInterval(this.table_timer, 1000);

    }

    async startTimer() {
        this.timerInit()
    }

    stopTimer(): void {
        clearInterval(this.table_timer)
        console.log("Timer is stoped");
    }
}


// const table = new TableRegular("Table 01", 5000, 3000, false, "dawd", "Testing", false);
// console.log(table.startTimer());

// setTimeout(() => {
//     table.stopTimer();
// }, 3000)

// const table_2 = new TableSettings("Table 02", 7000, 5000, true, "ddd");
// console.log(table_2.startTimer());
// console.log(table_2.table_diff);

export {TableRegular, TablePersonal}