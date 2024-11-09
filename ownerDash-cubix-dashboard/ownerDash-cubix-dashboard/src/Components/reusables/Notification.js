import React from "react";
import './Notification.css'

const Notification = () => {
    return (
        <div className="card-hover" id="deptSales">
            <div className="card-dashboard border p-2 rounded bg-white" id="deptSales">
                <table class="table table-light">
                    <thead>
                        <tr>
                            <td colSpan={3} className="p-3" id="NotHead">
                                Notifications
                            </td>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr className="table-secondary">
                            <td id="loopTd">Name</td>
                            <td id="loopTd">Staff</td>
                            <td id="loopTd">Action</td>
                        </tr>
                        <tr>
                            <td id="loopTd">Edit Voucher</td>
                            <td id="loopTd">Saji</td>
                            <td>
                                <button className="btn-dtls px-2" id="loopTd">details</button>
                            </td>
                        </tr>
                        <tr>
                            <td id="loopTd">New Order</td>
                            <td id="loopTd">Davis</td>
                            <td>
                                <button className="btn-dtls  px-2" id="loopTd">details</button>
                            </td>
                        </tr>

                        <tr>
                            <td id="loopTd">Edit Entry 24444</td>
                            <td id="loopTd">Afsal</td>
                            <td>
                                <button className="btn-dtls  px-2" id="loopTd">details</button>
                            </td>
                        </tr>

                        <tr>
                            <td id="loopTd">Delete Jv 2323</td>
                            <td id="loopTd">Anil</td>
                            <td>
                                <button className="btn-dtls  px-2" id="loopTd">details</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Notification;
