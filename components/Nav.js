import React, { useState } from 'react'

export default function Nav() {
    return (

        <React.Fragment>
            <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
                <div className="container-fluid py-1 px-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                            
                            <li className="breadcrumb-item text-sm text-dark active" aria-current="page">MiniProject</li>
                        </ol>
                        <h6 className="font-weight-bolder mb-0">MiniProject</h6>
                    </nav>
                </div>
            </nav>
        </React.Fragment>
    )
}