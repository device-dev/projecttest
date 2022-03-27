
export default function Header() {
    return (
            <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
                <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                    <a className="navbar-brand m-0" href="#" target="_blank">
                            <span className="ms-1 font-weight-bold text-white">Mini project</span>
                    </a>
                </div>
                <div className="horizontal light mt-0 mb-2">
                    <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                        <ul className="navbar-nav">
                           
                            <li className="nav-item">
                                <a className="nav-link text-white " href="/">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">ข้อมูลทั้งหมด</i>
                                    </div>
                               
                                </a>
                            </li>
                           
                        </ul>
                    </div>
                   
                    </div>
            </aside>
   
    )
}