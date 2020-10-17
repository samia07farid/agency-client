import React, { useEffect, useState } from 'react';

const OrderHistory = ({allOrder}) => {
    return (
            <table className="table table-borderless table-hover">
            <thead className="thead-light">
               <tr>
                    <th  className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Email ID</th>
                    <th className="text-secondary" scope="col">Service</th>
                    <th className="text-secondary" scope="col">Project Details</th>
                    <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                  allOrder.map((order, index) => 
                        
                    <tr>
                        <th>{order.name}</th>
                        <td>{order.email}</td>
                        <td>{order.order}</td>
                        <td>{order.details}</td>
                        <td>
                            <div class="dropdown">
                                <button class="btn btn-transparent btn-outline-danger dropdown-toggle btn-sm" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Pending
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default OrderHistory;

