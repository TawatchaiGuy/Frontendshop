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
                <h2 className="text-center mb-4">เข้าสู่ระบบ</h2>

                <div className="mb-3">
                    <i className="bi bi-envelope-at mx-2"></i>
                    <label htmlFor="inputEmail4" className="form-label mx-2">อีเมล</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>

                <div className="mb-3 position-relative">
                    <i className="bi bi-key mx-2"></i>
                    <label htmlFor="inputPassword4" className="form-label mx-2">รหัสผ่าน</label>
                    <input type={showPassword ? "text" : "password"} id="password" className="form-control p-2" style={{ backgroundColor: '#e7ecff', paddingRight: '2.5rem' }} placeholder="รหัสผ่าน" />
                    <span
                        onClick={togglePasswordVisibility}
                        className="position-absolute"
                        style={{ cursor: 'pointer', right: '10px', top: '75%', transform: 'translateY(-50%)' }}
                    >
                        <i className={`fa-solid ${showPassword ? 'bi bi-eye' : 'bi bi-eye-slash'}`}></i>
                    </span>
                </div>

                <div className="text-center">
                <Link href="/" className="btn btn-primary w-100" type="submit">ล็อคอิน</Link>
                </div>

                <div className="text-center mt-3">
                    <p>หากไม่มีบัญชี <a href="/signup" className="text-primary">คลิกเพื่อสมัครบัญชี</a></p>
                </div>
            </form>
        </div>


    )
}