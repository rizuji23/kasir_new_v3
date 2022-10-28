import React from "react";
import {Table_01, Table_02, Table_03, Table_04, Table_05, Table_06, Table_07, Table_08, Table_09, Table_10, Table_11, Table_12} from './table/Table'

class Home extends React.Component<any,any> {
    render(): React.ReactNode {
        return (
                <div className="overview-pemb mb-5">
                <div className="row">
                    <div className="col-sm">
                        <div className="d-flex mb-2">
                            <div className="p-1">
                                <a href="home.html"
                                    className="btn btn-primary btn-primary-cozy btn-home-top border-r-13 pl-20 pr-20 pt-10 pb-10">Home</a>
                            </div>

                            <div className="p-1">
                                <a href="list_member.html"
                                    className="btn btn-primary btn-primary-cozy-dark btn-home-top border-r-13 pl-20 pr-20 pt-10 pb-10">List
                                    Member</a>
                            </div>

                            <div className="p-1">
                                <a href="list_transaksi.html"
                                    className="btn btn-primary btn-primary-cozy-dark btn-home-top border-r-13 pl-20 pr-20 pt-10 pb-10">List
                                    Transaksi</a>
                            </div>
                            <div className="p-1">
                                <a href="billing_terminal.html"
                                    className="btn btn-primary btn-primary-cozy-dark btn-home-top border-r-13 pl-20 pr-20 pt-10 pb-10">Billing
                                    Terminal</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="d-flex mb-2 float-end">
                            <div className="p-1">
                                <a href="javascript:void(0)"
                                    className="btn btn-primary btn-primary-cozy border-r-13 pl-20 pr-20 pt-10 pb-10"
                                    id="refresh_table"><img src="assets/img/icon/refresh-ccw.png" alt=""/></a>
                            </div>
                            <div className="p-1">
                                <a href="javascript:void(0)"
                                    className="btn btn-primary btn-primary-cozy-dark border-r-13 pl-20 pr-20 pt-10 pb-10"
                                    id="continue_timer">Lanjutkan Timer</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div id="error_handler">
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-sm-3 g-4" id="table_billiard">
                    <Table_01/>
                    <Table_02/>
                    <Table_03/>
                    <Table_04/>
                    <Table_05/>
                    <Table_06/>
                    <Table_07/>
                    <Table_08/>
                    <Table_09/>
                    <Table_10/>
                    <Table_11/>
                    <Table_12/>
                </div>
            </div>
        )
    }
}



export default Home