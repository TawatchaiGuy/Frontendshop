import React from "react";
import Image from "next/image";

export default function Card() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-hover-effect">
                        <img src="image/11.png" layout="responsive" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">COMPUTER ยกชุด</h5>
                            <p className="card-text">เป็นคอมพิวเตอร์ยดเช็ต ที่ประกอบพร้อมใช้งาน</p>
                            <a href="/buyitem" className="btn btn-primary">สั่งสินค้า</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card card-hover-effect">
                        <img src="image/12.png" layout="responsive" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">อุปกรณ์อิเล็กทรอนิกส์</h5>
                            <p className="card-text">อุปกรณ์อิเล็กทรอนิกส์ที่ครบถ้วนในที่เดียว</p>
                            <a href="/buyitem" className="btn btn-primary">สั่งสินค้า</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card card-hover-effect">
                        <img src="image/13.png" layout="responsive" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">กล้องถ่ายรูป</h5>
                            <p className="card-text">กล้องถ่ายรูปต่างๆทั้งขนาดเล็กและขนาดใหญ์</p>
                            <a href="/buyitem" className="btn btn-primary">สั่งสินค้า</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
