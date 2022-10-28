import React, { useState } from "react";
import ModalBooking from "./ModalBooking";
import { ipcRenderer } from "electron";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DotAdded from "../../system/DotAdded";


class Table_01 extends React.Component<any,any> {
    constructor(props) {
        super(props);

        this.state = {
            timer: "00:00:00",
            jam: "",
            disabled: true,
            isUse: false,
            nama: "",
            price: 0,
            table_name: "Table 01",
            mode: "",
            table_id: "table001",
            modal_close: false,
            harga_detail: "",
            total_harga: 0,
            blink: '',
        }

        this.handleMode = this.handleMode.bind(this);
        this.handleJam = this.handleJam.bind(this);
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.getTimeString = this.getTimeString.bind(this)
        this.handleNama = this.handleNama.bind(this)
        this.handleBlink = this.handleBlink.bind(this)

    }

    validation() {
        setTimeout(() => {
            const jam = this.state.jam;
            const mode = this.state.mode;
            const nama = this.state.nama;
            const blink = this.state.blink;

            if (jam.length === 0 || mode.length === 0 || nama.length === 0 || blink.length === 0) {
                this.setState({disabled: true});
                console.log("belum")
            } else {
                this.setState({disabled: false});
                console.log("Sudah")
            }
        }, 500)
    }

    handleMode(e) {
        if (e.target.value.length === 0) {
            toast.error("Mode wajib diisi!")
            this.setState({mode: "", modal_close:false})
            this.validation()

        } else {
            this.setState({mode: e.target.value, modal_close:false})
            this.validation()
        }
    }

    handleJam(e) {
        const dot = new DotAdded();
        if (e.target.value.length === 0) {
            toast.error("Jam wajib diisi!")
            this.setState({jam: "", modal_close:false});
            this.validation()

        } else {
            this.setState({jam: e.target.value, modal_close:false});
            ipcRenderer.invoke("checkHarga", e.target.value).then((result) => {
                console.log(result);
                var data_new = ""
                if (result.response) {
                    result.harga_detail.forEach(element => {
                        data_new += `<li>${element.tipe} = Rp. ${dot.parse(element.harga)}</li>`
                    });

                    this.setState({harga_detail: data_new, total_harga: dot.parse(result.total_harga)})
                    this.validation()
                } else {
                    toast.error("Terjadi kesalahan pada mengitung jam!")
                }
            })
        }
    }

    handleNama(e) {
        if (e.target.value.length === 0) {
            toast.error("Nama wajib diisi!")
            this.setState({nama: "", modal_close:false});
            this.validation()

        } else {
            this.setState({nama: e.target.value, modal_close:false});
            this.validation()
        }
    }

    handleBlink(e) {
        console.log(e.target.value)
        if (e.target.value.length === 0) {
            toast.error("Blink wajib diisi!")
            this.setState({blink: "", modal_close:false});
            this.validation()

        } else {
            var blink;
            if (e.target.value === 'Iya') {
                blink = true;
            } else {
                blink = false;
            }
            this.setState({blink: blink, modal_close:false});
            this.validation()
        }
    }

    startTimer(): void {
        if (this.state.jam != '' && this.state.mode != '') {
            this.setState({disabled: true})
            setTimeout(() => {
                const durasi_minute = this.state.jam * 60;
                const minutetoms = durasi_minute * 60000;

                const data_booking = {
                    nama: this.state.nama,
                    durasi_booking: this.state.jam,
                    total_harga: this.state.total_harga,
                    tipe_booking: this.state.mode,
                    user_in: sessionStorage.getItem('username'),
                }
                
                if (this.state.mode === 'Regular') {
                    ipcRenderer.invoke("start", this.state.table_id, minutetoms, 0, this.state.blink, false, false, 0, 0, data_booking).then(() => {
                        console.log("start 01 is created");
                        this.setState({disabled: true, isUse:true, modal_close:true})
                    });
                } else {
                    console.log(":''")
                }
            }, 1000);
            
        } else {
            console.log("table 01 error")
        }
    }

    stopTimer(): void {
        ipcRenderer.invoke("start", this.state.table_id, 0, 0, true, true).then(() => {
            console.log("stop 01 is done")
            this.setState({disabled: false, isUse:false})
        })
    }

    componentDidMount(): void {
        setTimeout(() => {
            this.getTimeString()
        }, 1000)
    }

    getTimeString(): void {
        ipcRenderer.on(this.state.table_id, (event, msg) => {
            this.setState({timer: msg.data})
            if (msg.reponse === true) {
                this.setState({disabled: true, isUse:true})
            } else {
                this.setState({disabled: false, isUse:false})
            }
        })
    }

    render(): React.ReactNode {
        let modal;
        if (this.state.isUse === false) {
            modal = <ModalBooking table_name={this.state.table_name} handleMode={this.handleMode} handleJam={this.handleJam} startTimer={this.startTimer} close={this.state.modal_close} handleNama={this.handleNama} disableSubmit={this.state.disabled} harga_detail={this.state.harga_detail} total_harga={this.state.total_harga} jam={this.state.jam} handleBlink={this.handleBlink} />
        }

        return (
            <React.StrictMode>
               <div className="col" data-bs-toggle="modal" data-bs-target="#booking">
               <ToastContainer
                        position="bottom-center"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                        />
                    <div className="card card-custom-dark h-100 card-table">
                        <img src="assets/img/billiard-dark.png" className="img-billiard" alt="..."/>
                        <div className="card-body">
                            <div className="container-biliiard">
                            <span className="badge rounded-pill text-bg-success mb-2">Tersedia</span>
                            &nbsp;<span className="badge rounded-pill mr-2 text-bg-light">Regular</span>
                                <h4>{this.state.table_name}</h4>
                                <p>Nama pemesan: {this.state.nama}</p>
                                <div className="d-flex mt-3">
                                    <div className="p-1">
                                        <img src="assets/img/icon/rp_2.png" alt=""/>
                                    </div>
                                    <div className="p-1">
                                        <p id="">Rp. {this.state.total_harga}</p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="p-1">
                                        <img src="assets/img/icon/clock.png" alt=""/>
                                    </div>
                                    <div className="p-1">
                                        <p>{this.state.timer}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {modal}
            </React.StrictMode>
        
            
        )
    }
}

class Table_02 extends React.Component<any,any> {
    render(): React.ReactNode {
        return (
            <div className="col">
                <div className="card card-custom-dark h-100 card-table">
                    <img src="assets/img/billiard-dark.png" className="img-billiard" alt="..."/>
                    <div className="card-body">
                        <div className="container-biliiard">
                        <span className="badge rounded-pill text-bg-success mb-2">Tersedia</span>
                        &nbsp;<span className="badge rounded-pill mr-2 text-bg-light">Regular</span>
                            <h4>TESTING</h4>
                            <p>Nama pemesan: Null</p>
                            <div className="d-flex mt-3">
                                <div className="p-1">
                                    <img src="assets/img/icon/rp_2.png" alt=""/>
                                </div>
                                <div className="p-1">
                                    <p id="">Rp. 10.000</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="p-1">
                                    <img src="assets/img/icon/clock.png" alt=""/>
                                </div>
                                <div className="p-1">
                                    <p>0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Table_03 extends React.Component<any,any> {
    render(): React.ReactNode {
        return (
            <div className="col">
                <div className="card card-custom-dark h-100 card-table">
                    <img src="assets/img/billiard-dark.png" className="img-billiard" alt="..."/>
                    <div className="card-body">
                        <div className="container-biliiard">
                        <span className="badge rounded-pill text-bg-success mb-2">Tersedia</span>
                        &nbsp;<span className="badge rounded-pill mr-2 text-bg-light">Regular</span>
                            <h4>TESTING</h4>
                            <p>Nama pemesan: Null</p>
                            <div className="d-flex mt-3">
                                <div className="p-1">
                                    <img src="assets/img/icon/rp_2.png" alt=""/>
                                </div>
                                <div className="p-1">
                                    <p id="">Rp. 10.000</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="p-1">
                                    <img src="assets/img/icon/clock.png" alt=""/>
                                </div>
                                <div className="p-1">
                                    <p>0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Table_04 extends React.Component<any,any> {
    render(): React.ReactNode {
        return (
            <div className="col">
                <div className="card card-custom-dark h-100 card-table">
                    <img src="assets/img/billiard-dark.png" className="img-billiard" alt="..."/>
                    <div className="card-body">
                        <div className="container-biliiard">
                        <span className="badge rounded-pill text-bg-success mb-2">Tersedia</span>
                        &nbsp;<span className="badge rounded-pill mr-2 text-bg-light">Regular</span>
                            <h4>TESTING</h4>
                            <p>Nama pemesan: Null</p>
                            <div className="d-flex mt-3">
                                <div className="p-1">
                                    <img src="assets/img/icon/rp_2.png" alt=""/>
                                </div>
                                <div className="p-1">
                                    <p id="">Rp. 10.000</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="p-1">
                                    <img src="assets/img/icon/clock.png" alt=""/>
                                </div>
                                <div className="p-1">
                                    <p>0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Table_05 extends React.Component<any,any> {
    render(): React.ReactNode {
        return (
            <div className="col">
                <div className="card card-custom-dark h-100 card-table">
                    <img src="assets/img/billiard-dark.png" className="img-billiard" alt="..."/>
                    <div className="card-body">
                        <div className="container-biliiard">
                        <span className="badge rounded-pill text-bg-success mb-2">Tersedia</span>
                        &nbsp;<span className="badge rounded-pill mr-2 text-bg-light">Regular</span>
                            <h4>TESTING</h4>
                            <p>Nama pemesan: Null</p>
                            <div className="d-flex mt-3">
                                <div className="p-1">
                                    <img src="assets/img/icon/rp_2.png" alt=""/>
                                </div>
                                <div className="p-1">
                                    <p id="">Rp. 10.000</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="p-1">
                                    <img src="assets/img/icon/clock.png" alt=""/>
                                </div>
                                <div className="p-1">
                                    <p>0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Table_06 extends React.Component<any,any> {
    render(): React.ReactNode {
        return (
            <div className="col">
                <div className="card card-custom-dark h-100 card-table">
                    <img src="assets/img/billiard-dark.png" className="img-billiard" alt="..."/>
                    <div className="card-body">
                        <div className="container-biliiard">
                        <span className="badge rounded-pill text-bg-success mb-2">Tersedia</span>
                        &nbsp;<span className="badge rounded-pill mr-2 text-bg-light">Regular</span>
                            <h4>TESTING</h4>
                            <p>Nama pemesan: Null</p>
                            <div className="d-flex mt-3">
                                <div className="p-1">
                                    <img src="assets/img/icon/rp_2.png" alt=""/>
                                </div>
                                <div className="p-1">
                                    <p id="">Rp. 10.000</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="p-1">
                                    <img src="assets/img/icon/clock.png" alt=""/>
                                </div>
                                <div className="p-1">
                                    <p>0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Table_07 extends React.Component<any,any> {
    render(): React.ReactNode {
        return (
            <div className="col">
                <div className="card card-custom-dark h-100 card-table">
                    <img src="assets/img/billiard-dark.png" className="img-billiard" alt="..."/>
                    <div className="card-body">
                        <div className="container-biliiard">
                        <span className="badge rounded-pill text-bg-success mb-2">Tersedia</span>
                        &nbsp;<span className="badge rounded-pill mr-2 text-bg-light">Regular</span>
                            <h4>TESTING</h4>
                            <p>Nama pemesan: Null</p>
                            <div className="d-flex mt-3">
                                <div className="p-1">
                                    <img src="assets/img/icon/rp_2.png" alt=""/>
                                </div>
                                <div className="p-1">
                                    <p id="">Rp. 10.000</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="p-1">
                                    <img src="assets/img/icon/clock.png" alt=""/>
                                </div>
                                <div className="p-1">
                                    <p>0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Table_08 extends React.Component<any,any> {
    render(): React.ReactNode {
        return (
            <div className="col">
                <div className="card card-custom-dark h-100 card-table">
                    <img src="assets/img/billiard-dark.png" className="img-billiard" alt="..."/>
                    <div className="card-body">
                        <div className="container-biliiard">
                        <span className="badge rounded-pill text-bg-success mb-2">Tersedia</span>
                        &nbsp;<span className="badge rounded-pill mr-2 text-bg-light">Regular</span>
                            <h4>TESTING</h4>
                            <p>Nama pemesan: Null</p>
                            <div className="d-flex mt-3">
                                <div className="p-1">
                                    <img src="assets/img/icon/rp_2.png" alt=""/>
                                </div>
                                <div className="p-1">
                                    <p id="">Rp. 10.000</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="p-1">
                                    <img src="assets/img/icon/clock.png" alt=""/>
                                </div>
                                <div className="p-1">
                                    <p>0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Table_09 extends React.Component<any,any> {
    render(): React.ReactNode {
        return (
            <div className="col">
                <div className="card card-custom-dark h-100 card-table">
                    <img src="assets/img/billiard-dark.png" className="img-billiard" alt="..."/>
                    <div className="card-body">
                        <div className="container-biliiard">
                        <span className="badge rounded-pill text-bg-success mb-2">Tersedia</span>
                        &nbsp;<span className="badge rounded-pill mr-2 text-bg-light">Regular</span>
                            <h4>TESTING</h4>
                            <p>Nama pemesan: Null</p>
                            <div className="d-flex mt-3">
                                <div className="p-1">
                                    <img src="assets/img/icon/rp_2.png" alt=""/>
                                </div>
                                <div className="p-1">
                                    <p id="">Rp. 10.000</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="p-1">
                                    <img src="assets/img/icon/clock.png" alt=""/>
                                </div>
                                <div className="p-1">
                                    <p>0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Table_10 extends React.Component<any,any> {
    render(): React.ReactNode {
        return (
            <div className="col">
                <div className="card card-custom-dark h-100 card-table">
                    <img src="assets/img/billiard-dark.png" className="img-billiard" alt="..."/>
                    <div className="card-body">
                        <div className="container-biliiard">
                        <span className="badge rounded-pill text-bg-success mb-2">Tersedia</span>
                        &nbsp;<span className="badge rounded-pill mr-2 text-bg-light">Regular</span>
                            <h4>TESTING</h4>
                            <p>Nama pemesan: Null</p>
                            <div className="d-flex mt-3">
                                <div className="p-1">
                                    <img src="assets/img/icon/rp_2.png" alt=""/>
                                </div>
                                <div className="p-1">
                                    <p id="">Rp. 10.000</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="p-1">
                                    <img src="assets/img/icon/clock.png" alt=""/>
                                </div>
                                <div className="p-1">
                                    <p>0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Table_11 extends React.Component<any,any> {
    render(): React.ReactNode {
        return (
            <div className="col">
                <div className="card card-custom-dark h-100 card-table">
                    <img src="assets/img/billiard-dark.png" className="img-billiard" alt="..."/>
                    <div className="card-body">
                        <div className="container-biliiard">
                        <span className="badge rounded-pill text-bg-success mb-2">Tersedia</span>
                        &nbsp;<span className="badge rounded-pill mr-2 text-bg-light">Regular</span>
                            <h4>TESTING</h4>
                            <p>Nama pemesan: Null</p>
                            <div className="d-flex mt-3">
                                <div className="p-1">
                                    <img src="assets/img/icon/rp_2.png" alt=""/>
                                </div>
                                <div className="p-1">
                                    <p id="">Rp. 10.000</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="p-1">
                                    <img src="assets/img/icon/clock.png" alt=""/>
                                </div>
                                <div className="p-1">
                                    <p>0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Table_12 extends React.Component<any,any> {
    render(): React.ReactNode {
        return (
            <div className="col">
                <div className="card card-custom-dark h-100 card-table">
                    <img src="assets/img/billiard-dark.png" className="img-billiard" alt="..."/>
                    <div className="card-body">
                        <div className="container-biliiard">
                        <span className="badge rounded-pill text-bg-success mb-2">Tersedia</span>
                        &nbsp;<span className="badge rounded-pill mr-2 text-bg-light">Regular</span>
                            <h4>TESTING</h4>
                            <p>Nama pemesan: Null</p>
                            <div className="d-flex mt-3">
                                <div className="p-1">
                                    <img src="assets/img/icon/rp_2.png" alt=""/>
                                </div>
                                <div className="p-1">
                                    <p id="">Rp. 10.000</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="p-1">
                                    <img src="assets/img/icon/clock.png" alt=""/>
                                </div>
                                <div className="p-1">
                                    <p>0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export {Table_01, Table_02, Table_03, Table_04, Table_05, Table_06, Table_07, Table_08, Table_09, Table_10, Table_11, Table_12};