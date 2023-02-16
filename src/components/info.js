import React from "react";
import pic from "./anusha.jpg";

export default function Info()
{
    return(
        <div className="info-content">
            <img src={pic} alt="img" className="pic"/>
            <h3 className="h3-info">PEDDOJU ANUSHA</h3>
            <p className="p-info">Student</p>
            <div>
                <a className="email" href="mailto:peddojuanusha754@gmail.com">
                    <button className="btn-email">Email</button>
                    </a>
                <a className="lin" href="https://www.linkedin.com/in/anusha-peddoju-945a7320b">
                    <button className="btn-lin">Linkdin</button>
                </a>
            </div>

        </div>
    );
}