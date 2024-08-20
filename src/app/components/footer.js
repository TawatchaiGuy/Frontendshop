import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="container-fluid bg-white">
        <footer className="py-5">
          <div className="row align-items-center">
            <center>
              <div className="col-md-4 ">
              <img src="image/7.png" width={100} height={100} className="m-3 rounded" />
                <ul className="nav d-flex flex-row justify-content-between w-100 ">
                  <li className="nav-item mb-2 mb-md-0">
                    <a href="/" className="nav-link p-0 text-body-secondary">
                      หน้าแรก
                    </a>
                  </li>
                  <li className="nav-item mb-2 mb-md-0">
                    <a href="/about" className="nav-link p-0 text-body-secondary">
                      เกี่ยวกับเรา
                    </a>
                  </li>
                  <li className="nav-item mb-2 mb-md-0">
                    <a href="/contact" className="nav-link p-0 text-body-secondary">
                      ติดต่อเรา
                    </a>
                  </li>
                  <li className="nav-item mb-2 mb-md-0">
                    <a href="/service" className="nav-link p-0 text-body-secondary">
                      บริการของเรา
                    </a>
                  </li>
                </ul>
              </div>
            </center>


            <div className="col-md-3 mb-4 mb-md-0 d-flex flex-column align-items-center">
              <ul className="list-unstyled d-flex justify-content-center mb-3">
                <li className="ms-3">
                  <a className="link-body-emphasis" href="#">
                    <svg className="bi" width={24} height={24}>
                      <use xlinkHref="#twitter" />
                    </svg>
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-body-emphasis" href="#">
                    <svg className="bi" width={24} height={24}>
                      <use xlinkHref="#instagram" />
                    </svg>
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-body-emphasis" href="#">
                    <svg className="bi" width={24} height={24}>
                      <use xlinkHref="#facebook" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <center>
              <div className="col-md-6 text-center">
                <p className="mt-3">© 2024 Company, Inc. All rights reserved.</p>
              </div>
            </center>
          </div>
        </footer>
      </div>
    </footer>


  )
}