import React from "react"


class ModalBooking extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            harga_list: ""
        }
    }

    close() {
        document.getElementById('close-modal').click()
    }

    getHargaList() {
        const listItems = this.props.harga_detail.map((number) =>
            <li>{number.tipe} = {number.harga}</li>
        );

        this.setState({harga_list:listItems})
    }

    componentDidMount(): void {
        if (this.props.close) {
            this.close()
        }
    }


    componentDidUpdate(prevProps): void {
        console.log(this.props.close)
        if (this.props.close) {
            this.close()
        }

        if (this.props.harga_detail !== prevProps.harga_detail) {
            console.log(this.props.harga_detail)
        }

    }

    render(): React.ReactNode {
        

        return (
            <div className="modal fade" id="booking" tabIndex={-1} aria-labelledby="bookingLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="bookingLabel">Booking Form</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="box-booking">
                            <div className="booking-content">
                                <h5>Booking Details</h5>
                                <div className="form-group-2 mt-4">
                                    <select name="" onChange={this.props.handleMode} className="form-control custom-input" id="input_check_customer">
                                        <option value="">Pilih Mode</option>
                                        <option value="Regular">Regular</option>
                                        <option value="Loss">Loss</option>
                                    </select>
                                </div>
                                <div className="form-group-custom">
                                    <label>Nama lengkap</label>
                                    <input type="text" className="form-control custom-input" onChange={this.props.handleNama} id="nama_lengkap_booking"/>
                                </div>
                            </div>
                        </div>
                        <div className="box-booking mt-3">
                            <div className="booking-content">
                                <h5>Detail Pesanan</h5>
                                <label className="label-white mb-2">Table terpilih</label>
                                <div className="detail-table">
                                    <p><img src="assets/img/icon/archive.png" alt=""/> <span id="table_ids"></span>
                                     {this.props.table_name}</p>
                                </div>
                                <label className="label-white mb-2 mt-3"> Durasi penyewaan
                                </label><br/>
                                <label className="label-white-regular mb-1">Durasi (Per jam)</label>
    
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-default"><img
                                            src="assets/img/icon/clock2.png" width="20" alt=""/></span>
                                    <input type="number" onChange={this.props.handleJam} className="form-control group-input-custom"
                                        aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                                        id="durasi_booking"/>
                                </div>
                                <label className="label-white mb-2">Detail harga</label>
                                <div className="detail-table  mb-3">
                                        <ul dangerouslySetInnerHTML={{__html: this.props.harga_detail}}>
                                        </ul>
                                </div>
                                <label className="label-white mb-2">Total harga</label>
                                <div className="detail-table">
                                    <p><img src="assets/img/icon/rp.png" alt=""/> <span
                                            id="harga_total_text"> {this.props.total_harga}</span>
                                    </p>
                                    <p className="mt-3"><img src="assets/img/icon/clock.png" width="25" alt=""/> <span
                                            id="durasi_total_text">{this.props.jam} Jam</span></p>
                                </div>
    
                                <div className="form-group-2 mt-4">
                                    <select name="" onChange={this.props.handleBlink} className="form-control custom-input" id="input_setting_blink">
                                        <option value="">Pilih Setting Blink</option>
                                        <option value="Iya">Iya</option>
                                        <option value="Tidak">Tidak</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="box-booking mt-3">
                            <div className="booking-content">
                                <h5>Table Settings</h5>
                                <div className="d-flex">
                                    <div className="p-1">
                                        <div className="mt-2">
                                            <div>
                                                <button id="reset_table2" className="btn btn-warning">Reset Table</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-1">
                                        <div className="mt-2">
                                            <div>
                                                <button id="turn_off_table2" className="btn btn-danger">Turn Off Table</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" data-bs-dismiss="modal" id="close-modal" className="btn btn-primary btn-primary-cozy-dark"
                            >Close</button>
                        <button className="btn btn-primary btn-primary-cozy" onClick={this.props.startTimer} disabled={this.props.disableSubmit}>Booking Sekarang</button>
                    </div>
    
                </div>
            </div>
        </div>
        )
    }
}

export default ModalBooking;