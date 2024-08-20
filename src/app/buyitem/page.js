'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 animate__animated animate__backInDown">
            <form className="card card-body mx-auto" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center mb-4">สั่งสินค้า</h2>

                <div className="mb-3">
                    <i class="bi bi-envelope-at-fill mx-2" ></i>
                    <label htmlFor="inputEmail4" className="form-label mx-2">อีเมล</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>

                <div className="mb-3">
                    <i class="bi bi-person-circle mx-2"></i>
                    <label htmlFor="inputEmail4" className="form-label mx-2">ชื่อ-สกุล</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>

                <div className="mb-3">
                    <i class="bi bi-house-add-fill mx-2"></i>
                    <label htmlFor="inputEmail4" className="form-label mx-2">ที่อยู่ผู้สั่งซื้อ</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="mb-3">
                    <i class="bi bi-telephone-forward-fill mx-2"></i>
                    <label htmlFor="inputEmail4" className="form-label mx-2">เบอร์โทรศัพท์</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="text-center">
                    <Link href="/" className="btn btn-primary w-100" type="submit">สั่งสินค้า</Link>
                </div>

            </form>
        </div>


    )
}