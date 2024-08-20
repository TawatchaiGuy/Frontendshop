import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import navbar from "../components/navbar";

export default function About() {
    return (
        <>
            <br />
            <br />
            <div style={{ backgroundColor: '#F0FFFF', color: '#212529', padding: '50px' }}>
                <div className="container  animate__animated animate__bounceInLeft  ">
                    <h1 className="text-center mb-5">เกี่ยวกับเรา</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <img
                                src="/image/5.gif"
                                alt="1.png"
                                className="img-fluid mb-4"
                                width={"100%"}
                            />
                        </div>
                        <div className="col-md-6">
                            <h2>การให้บริการของเรา</h2>
                            <p>
                                การให้บริการของเรา ท่านสามารถเข้าเลือกชมสินค้าได้ในเว็ปไซต์ของเราได้อย่างอิสระ
                            </p>
                            <h2> สินค้าที่จำหน่าย </h2>
                            <p>
                            สินค้าที่วางจำหน่ายในเว็บไซต์ของเราจะเป็นสินค้าในส่วนของอุปกรณ์อิเล็กทรอนิกส์ต่างๆ เช่น คอมพิวเตอร์ เป็นต้น
                            </p>
                            <h2>ติดต่อเราได้ที่ช่องทาง</h2>
                            <p>
                                ติดต่อได้ในช่องทางต่างๆของเรา{' '}
                                <a href="https://www.google.co.th/?hl=th">Tadashishop@gmail.com</a>.
                            </p>
                            <button
                                className="btn"
                                style={{ backgroundColor: '#212529', color: '#F4C2C2' }}
                            >
                                ดูเพิ่มเติม
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
