'use client'

import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
    const [activeLink, setActiveLink] = useState('/');

    const handleSetActiveLink = (pathname) => {
        setActiveLink(pathname);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top animate__animated animate__bounceInDown" style={{ borderRadius: '15px', width: '95%', margin: '0 auto' }}>
            <div className="container-fluid">
                <img src="image/logo.png" width={197} height={60} alt="Logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <center>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="/"
                                        className={`nav-link active d-flex align-items-center card-hover-effect ${activeLink === '/' ? 'text-primary' : ''}`}
                                        aria-current="page"
                                        onClick={() => handleSetActiveLink('/')}
                                    >
                                        <i class="bi bi-house-fill"></i>หน้าแรก
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about"
                                        className={`nav-link active d-flex align-items-center card-hover-effect ${activeLink === '/about' ? 'text-primary' : ''}`}
                                        aria-current="page"
                                        onClick={() => handleSetActiveLink('/about')}
                                    >
                                        <i class="bi bi-bell-fill"></i> เกี่ยวกับเรา
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact" 
                                        className={`nav-link active d-flex align-items-center card-hover-effect ${activeLink === '/contact' ? 'text-primary' : ''}`}
                                        aria-current="page"
                                        onClick={() => handleSetActiveLink('/contact')}
                                    >
                                        <i class="bi bi-chat-right-dots-fill"></i>ติดต่อเรา
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/service"
                                        className={`nav-link active d-flex align-items-center card-hover-effect ${activeLink === '/service' ? 'text-primary' : ''}`}
                                        aria-current="page"
                                        onClick={() => handleSetActiveLink('/service')}
                                    >
                                        <i class="bi bi-bag-check-fill"></i> บริการของเรา
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="sign in">
                            <Link href="/signin"  className="btn btn-outline-danger mx-2" type="submit">ลงชื่อเข้าใช้
                            </Link>
                            <Link href="/signup" className="btn btn-outline-success mx-2" type="submit">สมัครบัญชี
                            </Link>
                        </form>
                    </div>
                </center>
            </div>
        </nav>
    )
}
 