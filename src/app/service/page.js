import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons


export default function Services() {
    const servicesData = [
        {
            icon: 'bi bi-geo-alt',
            title: 'MAP',
            description: 'อุปกรณ์นำทางต่างๆ',
        },
        {
            icon: 'bi bi-laptop',
            title: 'LAPTOP',
            description: 'จำหน่ายอุปกรณ์ LAPTOP',
        },
        {
            icon: 'bi bi-cpu',
            title: 'CPU',
            description: 'จำหน่าย CPU ต่างๆ',
        },
        {
            icon: 'bi bi-pc-display',
            title: 'COMPUTER',
            description: 'จำหน่ายคอมพิวเตอร์แบบสำเร็จรูป',
        },
        {
            icon: 'bi bi-lightning-charge-fill',
            title: 'ELECTRONIC',
            description: 'จำหน่ายอุปกรณ์อิเล็กทรอนิกส์ต่างๆ',
        },
        {
            icon: 'bi bi-camera',
            title: 'CAMERA',
            description: 'อุปกณ์ถ่ายรูปและบันทึกภาพต่างๆ',
        },
    ];

    return (
        <div style={{ backgroundColor: '#212529', padding: '50px' }}>
            <div className="container py-5 animate__animated animate__lightSpeedInRight">
                <div className="text-center mb-5">
                    <p className="text-uppercase mb-2" style={{ color: '#F0FFFF' }}>บริการของเรา</p>
                    <h2 className="font-weight-bold" style={{ color: '#F0FFFF' }}>สินค้าที่จำหน่าย</h2>
                </div>
                <div className="row">
                    {servicesData.map((service, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card h-100 text-center card-hover-effect" style={{ backgroundColor: '#343a40', borderRadius: '15px', border: 'none' }}>
                                <div className="card-body">
                                    <i className={`${service.icon} mb-3`} style={{ fontSize: '2rem', color: '#F0FFFF' }}></i>
                                    <h5 className="card-title" style={{ color: '#F0FFFF' }}>{service.title}</h5>
                                    <p className="card-text" style={{ color: '#CED4DA' }}>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

}
