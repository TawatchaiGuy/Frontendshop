import React from "react";
import Image from "next/image";

export default function Carousel() {
    return ( 
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <Image src="/image/11.png" className="d-block img-fluid" width={1920} height={960} alt="..." />
                </div>
                <div className="carousel-item">
                    <Image src="/image/12.png" className="d-block img-fluid"   width={1920} height={960} alt="..." />
                </div>
                <div className="carousel-item">
                    <Image src="/image/13.png" className="d-block img-fluid"  width={1920} height={960} alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev" >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        
    )
}
